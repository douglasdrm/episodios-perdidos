import { chapters } from '@/app/story';
import type { Episode } from '../types';

export const umaQuestaoDeColuna: Episode = {
  slug: 'uma-questao-de-coluna',
  seriesSlug: 'two-and-a-half-men',
  title: 'Uma Questão de Coluna',
  subtitle: 'Uma história que poderia ter acontecido',
  synopsis: 'Charlie passou a vida inteira zombando da profissão do irmão. Agora, suas costas têm outros planos — e Alan finalmente ganha a chance de provar seu valor.',
  status: 'published',
  readingTime: '35 min de leitura',
  artwork: {
    hero: {
      desktop: '/images/episodes/uma-questao-de-coluna/hero-desktop.webp',
      mobile: '/images/episodes/uma-questao-de-coluna/hero-mobile.webp',
      alt: 'Sala de uma casa de praia em Malibu iluminada pelo pôr do sol, com sofá, piano e vista para o oceano.',
      focalPoint: {
        desktop: '62% 52%',
        mobile: '52% 48%',
      },
    },
    card: {
      desktop: '/images/episodes/uma-questao-de-coluna/hero-desktop.webp',
      alt: 'Sala de uma casa de praia em Malibu iluminada pelo pôr do sol.',
      focalPoint: {
        desktop: '60% 52%',
        mobile: '56% 52%',
      },
    },
    social: '/images/episodes/uma-questao-de-coluna/social.webp',
  },
  chapters,
};
