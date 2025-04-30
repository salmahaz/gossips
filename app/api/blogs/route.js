import { connectDB } from '@/lib/db';
import Blog from '@/lib/models/blog';

export async function GET(request) {
  try {
    await connectDB();
    
    // Get the category from query parameters
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    // Build the query
    const query = category && category !== 'All Blogs' 
      ? { category } 
      : {};
    
    // Fetch blogs
    const blogs = await Blog.find(query).sort({ createdAt: -1 });
    
    return Response.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return Response.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
} 