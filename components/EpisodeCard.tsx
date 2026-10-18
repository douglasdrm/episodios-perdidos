import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Episode } from '@/content/types';
import { MalibuCover } from './MalibuCover';

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <article className="episode-card">
      <Link className="episode-card__cover" href={`/ler/${episode.slug}`} aria-label={`Ler ${episode.title}`}>
        <MalibuCover compact />
        <span className="cover-label">Edição especial</span>
        <span className="cover-title">Uma Questão<br /><em>de Coluna</em></span>
      </Link>
      <div className="episode-card__body">
        <span className="kicker">Two and a Half Men</span>
        <h3><Link href={`/ler/${episode.slug}`}>{episode.title}</Link></h3>
        <p>{episode.synopsis}</p>
        <div className="card-meta"><span>9 capítulos + cena extra</span><span>{episode.readingTime}</span></div>
        <Link className="text-link" href={`/ler/${episode.slug}`}>Começar a leitura <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
