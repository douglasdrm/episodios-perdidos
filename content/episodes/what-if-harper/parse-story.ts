import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import type {Chapter,ChapterBlock} from '../../types';

const source=readFileSync(join(process.cwd(),'content/episodes/what-if-harper/story.md'),'utf8');
const imageRoot='/images/episodes/what-if-harper';
const illustrations:Record<string,ChapterBlock>={
  '— Eu sou Evelyn Harper. Observo todos os universos. E, infelizmente, sou mãe deles em todos.':{kind:'image',artwork:{desktop:`${imageRoot}/prologo-evelyn-vigia.webp`,alt:'Evelyn Harper como observadora do multiverso, cercada por realidades alternativas luminosas.'}},
  'Alan: quiroprático rico. Charlie: músico pobre.':{kind:'image',artwork:{desktop:`${imageRoot}/universo-1-alan-rico.webp`,alt:'Alan Harper rico em uma casa de Malibu enquanto Charlie tenta seguir a carreira musical.'}},
  'Alan, também adolescente, estudava anatomia à mesa.':{kind:'image',artwork:{desktop:`${imageRoot}/flashback-1986.webp`,alt:'Charlie adolescente tocando teclado enquanto Alan estuda biologia em 1986.'}},
  'Charlie: quiroprático rico. Alan: músico pobre.':{kind:'image',artwork:{desktop:`${imageRoot}/universo-2-charlie-rico.webp`,alt:'Charlie Harper como quiroprático bem-sucedido enquanto Alan tenta compor músicas.'}},
  'Alan: compositor rico. Charlie: quiroprático pobre.':{kind:'image',artwork:{desktop:`${imageRoot}/universo-3-alan-musico-rico.webp`,alt:'Alan Harper como compositor rico enquanto Charlie trabalha em uma clínica modesta.'}},
  'Na quarta realidade, o pai de Charlie e Alan estava vivo e os havia criado depois de se separar de Evelyn quando os filhos ainda eram pequenos.':{kind:'image',artwork:{desktop:`${imageRoot}/pos-creditos-quarta-realidade.webp`,alt:'Charlie e Alan felizes e bem-sucedidos ao lado do pai em uma quarta realidade alternativa.'}},
};

function parseStory(markdown:string):Chapter[]{
  const chapters:Chapter[]=[];
  let current:Chapter|undefined;
  let pendingPart='';
  let pendingChapter='';
  let pendingBlocks:ChapterBlock[]=[];
  let paragraph:string[]=[];
  let bodyStarted=false;

  const targetBlocks=()=>current?.blocks??pendingBlocks;
  const pushBlock=(block:ChapterBlock)=>{
    targetBlocks().push(block);
    if(block.text&&illustrations[block.text])targetBlocks().push(illustrations[block.text]);
  };
  const flushParagraph=()=>{
    if(!paragraph.length)return;
    pushBlock({kind:'paragraph',text:paragraph.join(' ')});
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
    if(line.startsWith('# EPÍLOGO — ')){startChapter(line.slice(12),'Epílogo','E');continue}
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
    if(line.startsWith('### ')){flushParagraph();pushBlock({kind:'subheading',text:line.slice(4)});continue}
    if(line==='---'||line==='***'){flushParagraph();pushBlock({kind:'divider'});continue}
    if(/^\*\*.*\*\*$/.test(line)){flushParagraph();pushBlock({kind:'strong',text:line.slice(2,-2)});continue}
    if(/^\*[^*].*\*$/.test(line)){flushParagraph();pushBlock({kind:'emphasis',text:line.slice(1,-1)});continue}
    paragraph.push(line);
  }
  flushParagraph();
  return chapters;
}

export const whatIfHarperChapters=parseStory(source);
