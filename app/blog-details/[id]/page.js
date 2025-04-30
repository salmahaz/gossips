import { connectDB } from '@/lib/db';
import Blog from '@/lib/models/blog';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import BlogDetailsSkeleton from '@/components/skeletons/BlogDetailsSkeleton';

async function getBlog(id) {
  try {
    await connectDB();
    const blog = await Blog.findById(id).lean();
    if (!blog) return null;
    
    return {
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt.toISOString()
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export default async function BlogDetails({ params }) {
  const blog = await getBlog(params.id);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-700 mb-2">Blog Not Found</h1>
            <p className="text-gray-500 mb-4">The blog you're looking for doesn't exist or has been removed.</p>
            <Link 
              href="/"
              className="text-[#80CBC4] hover:underline"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pb-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-[#80CBC4] mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          <div className="mb-6">
            <img
              src={blog.photo}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          <article className="prose prose-sm max-w-none">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ backgroundColor: '#80CBC4', color: '#fff' }}
            >
              {blog.category}
            </span>
            
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>
            
            <div className="flex items-center text-xs text-gray-500 mb-6">
              <span>By {blog.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>

            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
              {blog.content}
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
} 