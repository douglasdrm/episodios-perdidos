import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {EpisodeCard} from '@/components/EpisodeCard';
import {series} from '@/content/series';
import {getSeries,getSeriesEpisodes} from '@/lib/catalog';
export function generateStaticParams(){return series.map(item=>({serieSlug:item.slug}))}
export async function generateMetadata({params}:{params:Promise<{serieSlug:string}>}):Promise<Metadata>{const {serieSlug}=await params;const item=getSeries(serieSlug);return item?{title:item.title,description:item.description}:{} }
export default async function SeriesDetail({params}:{params:Promise<{serieSlug:string}>}){const {serieSlug}=await params;const item=getSeries(serieSlug);if(!item)notFound();const items=getSeriesEpisodes(item.slug);return <><section className="series-hero section-shell"><span className="kicker">Coleção 01 · {item.mood}</span><h1>{item.title}</h1><p>{item.description}</p><div><strong>{items.length}</strong><span>episódio publicado</span></div></section><section className="catalog-section section-shell"><div className="section-heading"><div><span className="kicker">Histórias disponíveis</span><h2>Todos os episódios</h2></div></div>{items.map(episode=><EpisodeCard episode={episode} key={episode.slug}/>)}</section></>}
