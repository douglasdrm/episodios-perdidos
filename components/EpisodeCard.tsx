import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Episode } from '@/content/types';
import { MalibuCover } from './MalibuCover';
import { Artwork } from './Artwork';
import { getSeries } from '@/lib/catalog';

export function EpisodeCard({ episode }: { episode: Episode }) {
  const parent = getSeries(episode.seriesSlug);
  const numberedChapters = episode.chapters.filter((chapter) => !chapter.eyebrow).length;
  const hasExtra = episode.chapters.some((chapter) => chapter.eyebrow);
  return (
    <article className="episode-card">
      <Link className="episode-card__cover" href={`/ler/${episode.slug}`} aria-label={`Ler ${episode.title}`}>
        <Artwork artwork={episode.artwork?.card} fallback={<MalibuCover compact />} />
        <span className="cover-label">Edição especial</span>
        <span className="cover-title">{episode.title}</span>
      </Link>
      <div className="episode-card__body">
        <span className="kicker">{parent?.title}</span>
        <h3><Link href={`/ler/${episode.slug}`}>{episode.title}</Link></h3>
        <p>{episode.synopsis}</p>
        <div className="card-meta"><span>{numberedChapters} capítulos{hasExtra?' + cena extra':''}</span><span>{episode.readingTime}</span></div>
        <Link className="text-link" href={`/ler/${episode.slug}`}>Começar a leitura <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
