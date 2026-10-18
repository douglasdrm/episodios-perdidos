import type {Metadata} from 'next';
import {series} from '@/content/series';
import {getSeriesEpisodes} from '@/lib/catalog';
import {SeriesCard} from '@/components/SeriesCard';
export const metadata:Metadata={title:'Séries',description:'Explore as séries do catálogo Episódios Perdidos.'};
export default function SeriesPage(){return <section className="listing-page section-shell"><span className="kicker">Arquivo de universos</span><h1>Séries</h1><p className="page-lead">Cada coleção abre uma porta para episódios inéditos de uma série conhecida.</p><div className="series-grid">{series.map((item,index)=><SeriesCard series={item} episodeCount={getSeriesEpisodes(item.slug).length} index={index} key={item.slug}/>)}</div></section>}
