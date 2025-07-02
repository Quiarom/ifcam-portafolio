import { getCollection } from 'astro:content';

export async function GET() {
  const blogPosts = await getCollection('blog');
  const portfolioPosts = await getCollection('portfolio');
  
  const searchData = [
    ...blogPosts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      slug: post.slug,
      type: 'blog'
    })),
    ...portfolioPosts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      slug: post.slug,
      type: 'portfolio'
    }))
  ];

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}