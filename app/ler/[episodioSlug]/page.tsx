import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {BookReader} from '@/components/BookReader';
import {MalibuCover} from '@/components/MalibuCover';
import {episodes,getEpisode,getSeries} from '@/lib/catalog';
export function generateStaticParams(){return episodes.map(item=>({episodioSlug:item.slug}))}
export async function generateMetadata({params}:{params:Promise<{episodioSlug:string}>}):Promise<Metadata>{const {episodioSlug}=await params;const item=getEpisode(episodioSlug);return item?{title:item.title,description:item.synopsis,openGraph:{title:item.title,description:item.synopsis,type:'article'}}:{} }
export default async function ReadPage({params}:{params:Promise<{episodioSlug:string}>}){const {episodioSlug}=await params;const episode=getEpisode(episodioSlug);if(!episode)notFound();const parent=getSeries(episode.seriesSlug);return <><section className="reader-hero"><MalibuCover/><div className="reader-hero__veil"/><div className="reader-hero__content"><span className="kicker kicker--light">{episode.subtitle}</span><Link href={`/series/${episode.seriesSlug}`}>{parent?.title}</Link><h1>Uma Questão<br/><em>de Coluna</em></h1><p>{episode.synopsis}</p><span>9 capítulos + cena extra · {episode.readingTime}</span><a className="button button--primary" href="#cap-0">Começar a leitura ↓</a></div></section><BookReader episode={episode}/></>}
