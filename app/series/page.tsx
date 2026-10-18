import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {series} from '@/content/series';
import {getSeriesEpisodes} from '@/lib/catalog';
export const metadata:Metadata={title:'Séries',description:'Explore as séries do catálogo Episódios Perdidos.'};
export default function SeriesPage(){return <section className="listing-page section-shell"><span className="kicker">Arquivo de universos</span><h1>Séries</h1><p className="page-lead">Cada coleção abre uma porta para episódios inéditos de uma série conhecida.</p><div className="series-grid">{series.map(item=><article className="series-card" key={item.slug}><span className="series-card__number">01</span><div><span className="kicker">{item.mood}</span><h2>{item.title}</h2><p>{item.description}</p><span>{getSeriesEpisodes(item.slug).length} episódio publicado</span></div><Link href={`/series/${item.slug}`} aria-label={`Abrir ${item.title}`}><ArrowRight/></Link></article>)}</div></section>}
