import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPostSlug, getPublishedPosts } from '../lib/writing';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedPosts();

  return rss({
    title: 'Writing by Luthfi Solahudin',
    description: 'Writing by Luthfi Solahudin.',
    site: site ?? 'https://luthfisolahudin.id',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${getPostSlug(post)}/`,
    })),
  });
};
