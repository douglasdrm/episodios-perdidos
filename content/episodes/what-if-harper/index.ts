import type {Episode} from '../../types';
import {whatIfHarperChapters} from './parse-story';

export const whatIfHarper:Episode={
  slug:'what-if-harper',
  seriesSlug:'two-and-a-half-men',
  title:'What If...?',
  subtitle:'Especial What If...? · Fanfiction não oficial',
  synopsis:'Três realidades alternativas colocam Alan e Charlie Harper em destinos opostos — e Evelyn observa cada possibilidade com a mesma profunda decepção.',
  status:'published',
  readingTime:'Leitura longa',
  label:'Especial What If...?',
  chapterCount:21,
  hasExtra:true,
  showEndMark:false,
  heroPresentation:'editorial',
  artwork:{
    hero:{
      desktop:'/images/episodes/what-if-harper/hero-desktop.webp',
      mobile:'/images/episodes/what-if-harper/hero-mobile.webp',
      mobileBreakpoint:600,
      alt:'Evelyn Harper diante de três realidades alternativas dos irmãos Alan e Charlie.',
      focalPoint:{desktop:'50% 43%',mobile:'50% 34%'},
    },
    card:{
      desktop:'/images/episodes/what-if-harper/hero-desktop.webp',
      mobile:'/images/episodes/what-if-harper/hero-mobile.webp',
      mobileBreakpoint:600,
      alt:'Evelyn Harper observando realidades alternativas de Alan e Charlie.',
      focalPoint:{desktop:'50% 48%',mobile:'50% 43%'},
    },
    overlay:{
      desktop:'linear-gradient(90deg,rgba(5,7,18,.94) 0%,rgba(10,9,30,.72) 34%,rgba(11,8,34,.18) 68%),linear-gradient(0deg,rgba(5,7,18,.82),transparent 62%)',
      mobile:'linear-gradient(180deg,rgba(5,7,18,.08) 0%,rgba(5,7,18,.22) 52%,rgba(5,7,18,.92) 100%)',
    },
  },
  chapters:whatIfHarperChapters,
};
