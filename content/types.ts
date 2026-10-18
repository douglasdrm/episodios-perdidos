export type ResponsiveArtwork = {
  desktop: string;
  mobile?: string;
  alt: string;
  focalPoint?: {
    desktop?: string;
    mobile?: string;
  };
};

export type VisualTheme = {
  accent: string;
  accentSoft: string;
  surface: string;
  overlay: string;
};

export type SeriesArtwork = {
  poster?: ResponsiveArtwork;
  hero?: ResponsiveArtwork;
  social?: string;
};

export type EpisodeArtwork = {
  hero?: ResponsiveArtwork;
  card?: ResponsiveArtwork;
  social?: string;
};

export type Chapter = {
  title: string;
  paragraphs: string[];
  eyebrow?: string;
  image?: ResponsiveArtwork;
};

export type Series = {
  slug: string;
  title: string;
  description: string;
  mood: string;
  artwork?: SeriesArtwork;
  theme?: VisualTheme;
};

export type Episode = {
  slug: string;
  seriesSlug: string;
  title: string;
  subtitle: string;
  synopsis: string;
  publishedAt?: string;
  status: 'published' | 'draft';
  readingTime: string;
  chapters: Chapter[];
  artwork?: EpisodeArtwork;
  theme?: Partial<VisualTheme>;
};
