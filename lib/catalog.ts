import { umaQuestaoDeColuna } from '@/content/episodes/uma-questao-de-coluna';
import { whatIfHarper } from '@/content/episodes/what-if-harper';
import { series } from '@/content/series';

export const episodes = [umaQuestaoDeColuna,whatIfHarper].filter((episode) => episode.status === 'published');

export function getEpisode(slug: string) {
  return episodes.find((episode) => episode.slug === slug);
}

export function getSeries(slug: string) {
  return series.find((item) => item.slug === slug);
}

export function getSeriesEpisodes(seriesSlug: string) {
  return episodes.filter((episode) => episode.seriesSlug === seriesSlug);
}
