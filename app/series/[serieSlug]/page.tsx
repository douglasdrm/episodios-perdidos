import type {Metadata} from 'next';
import type {CSSProperties} from 'react';
import {notFound} from 'next/navigation';
import {EpisodeCard} from '@/components/EpisodeCard';
import {HeroArtwork} from '@/components/HeroArtwork';
import {series} from '@/content/series';
import {getSeries,getSeriesEpisodes} from '@/lib/catalog';
export function generateStaticParams(){return series.map(item=>({serieSlug:item.slug}))}
export async function generateMetadata({params}:{params:Promise<{serieSlug:string}>}):Promise<Metadata>{const {serieSlug}=await params;const item=getSeries(serieSlug);return item?{title:item.title,description:item.description,openGraph:{images:item.artwork?.social?[item.artwork.social]:undefined}}:{} }
export default async function SeriesDetail({params}:{params:Promise<{serieSlug:string}>}){const {serieSlug}=await params;const item=getSeries(serieSlug);if(!item)notFound();const items=getSeriesEpisodes(item.slug);const heroStyle={'--series-overlay-desktop':item.artwork?.overlay?.desktop,'--series-overlay-mobile':item.artwork?.overlay?.mobile??item.artwork?.overlay?.desktop} as CSSProperties;const content=<><span className="kicker">Coleção 01 · {item.mood}</span><h1>{item.title}</h1><p>{item.description}</p><div><strong>{items.length}</strong><span>{items.length===1?'episódio publicado':'episódios publicados'}</span></div></>;return <>{item.artwork?.hero?<section className="series-hero series-hero--art" style={heroStyle}><HeroArtwork artwork={item.artwork.hero} priority/><div className="series-hero__veil"/><div className="series-hero__content section-shell">{content}</div></section>:<section className="series-hero section-shell">{content}</section>}<section className="catalog-section section-shell"><div className="section-heading"><div><span className="kicker">Histórias disponíveis</span><h2>Todos os episódios</h2></div></div>{items.map(episode=><EpisodeCard episode={episode} key={episode.slug}/>)}</section></>}
