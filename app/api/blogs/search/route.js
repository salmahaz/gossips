import { connectDB } from '@/lib/db';
import Blog from '@/lib/models/blog';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    await connectDB();

    const searchQuery = {
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { author: { $regex: query, $options: 'i' } }
      ]
    };

    const blogs = await Blog.find(searchQuery)
      .select('_id title author')
      .limit(5);

    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    console.error('Error searching blogs:', error);
    return new Response(JSON.stringify({ error: 'Failed to search blogs' }), { status: 500 });
  }
} 