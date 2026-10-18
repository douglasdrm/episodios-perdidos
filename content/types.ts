export type Chapter = { title: string; paragraphs: string[]; eyebrow?: string };

export type Series = {
  slug: string;
  title: string;
  description: string;
  mood: string;
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
};
