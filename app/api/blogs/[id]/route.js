import { connectDB } from '@/lib/db';
import Blog from '@/lib/models/blog';

export async function GET(request, { params }) {
  try {
    await connectDB();
    
    const blog = await Blog.findById(params.id);
    
    if (!blog) {
      return Response.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    return Response.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return Response.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
} 