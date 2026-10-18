import type { Series } from './types';

export const series: Series[] = [{
  slug: 'two-and-a-half-men',
  title: 'Two and a Half Men',
  description: 'Novas confusões na casa de Malibu, onde toda pequena vitória familiar encontra um jeito de terminar em desastre.',
  mood: 'Malibu · comédia · caos familiar',
  artwork: {
    poster: {
      desktop: '/images/series/two-and-a-half-men/poster.webp',
      alt: 'Sala de uma casa de praia em Malibu com escada, piano, sofá e vista para o oceano ao pôr do sol.',
      focalPoint: {
        desktop: '50% 48%',
        mobile: '50% 45%',
      },
    },
  },
  theme: {
    accent: '#ed956d',
    accentSoft: '#ffc9a2',
    surface: '#222522',
    overlay: 'rgba(12, 21, 25, 0.72)',
  },
}];
