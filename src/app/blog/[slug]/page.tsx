// app/blogs/[slug]/page.tsx
import { client } from '@/sanity/lib/client';
import { POST_QUERY, PREV_NEXT_POSTS_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/quries';
import BlogPostClient from './BlogPostClient';
import type { PortableTextBlock } from '@portabletext/types';

interface Slug {
  current: string;
  _type: string;
}

interface BlogPost {
  title: string;
  slug: Slug;
  author: string;
  publishedAt: string;
  body: PortableTextBlock[];
}

interface PrevNextPost {
  title: string;
  slug: Slug;
}

interface SlugParam {
  slug: string;
}

// Static params for dynamic routes
export async function generateStaticParams(): Promise<SlugParam[]> {
  const slugs = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<BlogPost | null>(POST_QUERY, { slug: params.slug });

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const allPosts = await client.fetch<PrevNextPost[]>(PREV_NEXT_POSTS_QUERY);
  const currentIndex = allPosts.findIndex(
    (p) => p.slug.current.toLowerCase() === params.slug.toLowerCase()
  );

  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return <BlogPostClient post={post} prevPost={prevPost} nextPost={nextPost} />;
}