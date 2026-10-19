import type {Episode} from '../../types';
import {whatIfHarperChapters} from './parse-story';

export const whatIfHarper:Episode={
  slug:'what-if-harper',
  seriesSlug:'two-and-a-half-men',
  title:'What If...? — E se os Harper tivessem destinos diferentes?',
  subtitle:'Especial What If...? · Fanfiction não oficial',
  synopsis:'Três realidades alternativas colocam Alan e Charlie Harper em destinos opostos — e Evelyn observa cada possibilidade com a mesma profunda decepção.',
  status:'published',
  readingTime:'Leitura longa',
  label:'Especial What If...?',
  chapterCount:21,
  hasExtra:true,
  showEndMark:false,
  chapters:whatIfHarperChapters,
};
