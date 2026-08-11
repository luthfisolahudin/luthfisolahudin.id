import { getCollection, type CollectionEntry } from 'astro:content';

export type WritingPost = CollectionEntry<'writing'>;

export function getPostSlug(post: WritingPost): string {
  return post.id.replace(/\.md$/, '');
}

/** Returns published writing in newest-first order. */
export async function getPublishedPosts(): Promise<WritingPost[]> {
  const posts = await getCollection('writing', ({ data }) => !data.draft);

  return posts.sort(
    (first, second) => second.data.publishedAt.valueOf() - first.data.publishedAt.valueOf(),
  );
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(date);
}
