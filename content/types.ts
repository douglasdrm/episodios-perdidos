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
  overlay?: {
    desktop: string;
    mobile?: string;
  };
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
  tocLabel?: string;
  blocks?: ChapterBlock[];
  image?: ResponsiveArtwork;
};

export type ChapterBlock = {
  kind: 'paragraph' | 'subheading' | 'divider' | 'emphasis' | 'strong';
  text?: string;
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
  label?: string;
  chapterCount?: number;
  hasExtra?: boolean;
  endNote?: string;
  showEndMark?: boolean;
  chapters: Chapter[];
  artwork?: EpisodeArtwork;
  theme?: Partial<VisualTheme>;
};
