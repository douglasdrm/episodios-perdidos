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
    hero: {
      desktop: '/images/series/two-and-a-half-men/hero-desktop.webp',
      mobile: '/images/series/two-and-a-half-men/hero-mobile.webp',
      alt: 'Sala de uma casa de praia em Malibu com piano, sofá e vista para o oceano ao pôr do sol.',
      focalPoint: {
        desktop: '52% 50%',
        mobile: '50% 45%',
      },
    },
    overlay: {
      desktop: 'linear-gradient(90deg, rgba(7, 13, 16, .94) 0%, rgba(8, 16, 20, .66) 38%, rgba(9, 18, 23, .16) 72%), linear-gradient(0deg, rgba(6, 12, 15, .86), transparent 68%)',
      mobile: 'linear-gradient(180deg, rgba(7, 13, 16, .2), rgba(7, 13, 16, .52) 44%, rgba(7, 13, 16, .94) 88%)',
    },
  },
  theme: {
    accent: '#ed956d',
    accentSoft: '#ffc9a2',
    surface: '#222522',
    overlay: 'rgba(12, 21, 25, 0.72)',
  },
}];
