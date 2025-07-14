import { getCollection } from 'astro:content';

export async function GET() {
  const portfolioPosts = await getCollection('portfolio');
  
  const searchData = portfolioPosts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    slug: post.id,
    type: 'portfolio'
  }));

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}