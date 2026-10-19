import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import type {Chapter,ChapterBlock} from '../../types';

const source=readFileSync(join(process.cwd(),'content/episodes/what-if-harper/story.md'),'utf8');

function parseStory(markdown:string):Chapter[]{
  const chapters:Chapter[]=[];
  let current:Chapter|undefined;
  let pendingPart='';
  let pendingChapter='';
  let pendingBlocks:ChapterBlock[]=[];
  let paragraph:string[]=[];
  let bodyStarted=false;

  const targetBlocks=()=>current?.blocks??pendingBlocks;
  const flushParagraph=()=>{
    if(!paragraph.length)return;
    targetBlocks().push({kind:'paragraph',text:paragraph.join(' ')});
    paragraph=[];
  };
  const startChapter=(title:string,eyebrow:string,tocLabel:string)=>{
    flushParagraph();
    current={title,eyebrow,tocLabel,paragraphs:[],blocks:pendingBlocks};
    pendingBlocks=[];
    chapters.push(current);
  };

  for(const rawLine of markdown.replace(/\r\n/g,'\n').split('\n')){
    const line=rawLine.trim();
    if(!bodyStarted){
      if(line==='---')bodyStarted=true;
      continue;
    }
    if(!line){flushParagraph();continue}
    const part=line.match(/^# PARTE (.+)$/);
    if(part){flushParagraph();current=undefined;pendingPart=`Parte ${part[1]}`;pendingBlocks=[];continue}
    const numberedHeading=line.match(/^# CAPÍTULO (\d+)$/);
    if(numberedHeading){flushParagraph();current=undefined;pendingChapter=numberedHeading[1];continue}
    const inlineChapter=line.match(/^## CAPÍTULO (\d+) — (.+)$/);
    if(inlineChapter){startChapter(inlineChapter[2],`${pendingPart} · Capítulo ${inlineChapter[1]}`,inlineChapter[1].padStart(2,'0'));pendingChapter='';continue}
    if(line.startsWith('## ')){
      const heading=line.slice(3);
      if(pendingChapter){startChapter(heading,`${pendingPart} · Capítulo ${pendingChapter}`,pendingChapter.padStart(2,'0'));pendingChapter='';continue}
      if(heading.startsWith('PRÓLOGO — ')){startChapter(heading.slice(10),'Prólogo','P');continue}
      if(heading.startsWith('INTERLÚDIO — ')){startChapter(heading.slice(13),`${pendingPart} · Interlúdio`,'I');continue}
      if(heading.startsWith('EPÍLOGO — ')){startChapter(heading.slice(10),'Epílogo','E');continue}
      if(heading.startsWith('CENA PÓS-CRÉDITOS — ')){startChapter(heading.slice(20),'Cena pós-créditos','★');continue}
    }
    if(line.startsWith('### ')){flushParagraph();targetBlocks().push({kind:'subheading',text:line.slice(4)});continue}
    if(line==='---'||line==='***'){flushParagraph();targetBlocks().push({kind:'divider'});continue}
    if(/^\*\*.*\*\*$/.test(line)){flushParagraph();targetBlocks().push({kind:'strong',text:line.slice(2,-2)});continue}
    if(/^\*[^*].*\*$/.test(line)){flushParagraph();targetBlocks().push({kind:'emphasis',text:line.slice(1,-1)});continue}
    paragraph.push(line);
  }
  flushParagraph();
  return chapters;
}

export const whatIfHarperChapters=parseStory(source);
