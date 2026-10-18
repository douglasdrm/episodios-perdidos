import Link from 'next/link';
import {ArrowRight,BookOpen,Library,Sparkles} from 'lucide-react';
import {EpisodeCard} from '@/components/EpisodeCard';
import {MalibuCover} from '@/components/MalibuCover';
import {episodes} from '@/lib/catalog';

export default function Home(){const featured=episodes[0];return <>
 <section className="home-hero"><MalibuCover/><div className="home-hero__veil"/><div className="home-hero__content"><span className="kicker kicker--light">Edição inaugural · comédia</span><p className="series-display">Two and a Half Men</p><h1>Uma Questão<br/><em>de Coluna</em></h1><p>{featured.synopsis}</p><div className="hero-actions"><Link className="button button--primary" href={`/ler/${featured.slug}`}><BookOpen size={18}/> Ler agora</Link><Link className="button button--ghost" href={`/series/${featured.seriesSlug}`}>Ver a série <ArrowRight size={18}/></Link></div></div><span className="home-hero__note">Malibu, Califórnia · arquivo nº 001</span></section>
 <section className="manifesto section-shell"><span className="kicker">Uma biblioteca fora do ar</span><h2>Os episódios que nunca foram filmados.<br/><em>Mas deveriam ter sido.</em></h2><p>Episódios Perdidos reúne histórias de fã em formato literário, com a atmosfera das séries que conhecemos e novas confusões para seus personagens.</p><div className="manifesto-features"><div><Library/><strong>Catálogo curado</strong><span>Histórias organizadas por série.</span></div><div><BookOpen/><strong>Leitura sem distrações</strong><span>Uma experiência feita como um livro.</span></div><div><Sparkles/><strong>Universos revisitados</strong><span>Novas histórias, sempre não oficiais.</span></div></div></section>
 <section className="catalog-section section-shell"><div className="section-heading"><div><span className="kicker">Agora em cartaz</span><h2>Episódios recentes</h2></div><Link className="text-link" href="/series">Explorar séries <ArrowRight size={16}/></Link></div><EpisodeCard episode={featured}/></section>
 <section className="coming-soon section-shell"><span className="kicker">A coleção está começando</span><h2>Próximos episódios?</h2><p>Novas histórias entrarão no catálogo quando estiverem prontas. Nenhum algoritmo, nenhuma pressa — apenas bons episódios para ler.</p></section>
 </>}
