import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {Series} from '@/content/types';
import {Artwork} from './Artwork';

type SeriesCardProps={series:Series;episodeCount:number;index:number};

export function SeriesCard({series,episodeCount,index}:SeriesCardProps){
  return <article className={`series-card${series.artwork?.poster?' series-card--with-art':''}`}>
    {series.artwork?.poster&&<Link className="series-card__art" href={`/series/${series.slug}`} aria-label={`Abrir ${series.title}`}><Artwork artwork={series.artwork.poster}/></Link>}
    <span className="series-card__number">{String(index+1).padStart(2,'0')}</span>
    <div className="series-card__content"><span className="kicker">{series.mood}</span><h2>{series.title}</h2><p>{series.description}</p><span>{episodeCount} {episodeCount===1?'episódio publicado':'episódios publicados'}</span></div>
    <Link className="series-card__link" href={`/series/${series.slug}`} aria-label={`Abrir ${series.title}`}><ArrowRight/></Link>
  </article>;
}
