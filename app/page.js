import { connectDB } from '@/lib/db';
import Blog from '@/lib/models/blog';
import NavBar from "@/components/atoms/NavBar";
import BlogCardGrid from "@/components/sections/BlogCardGrid";
import Footer from "@/components/sections/Footer";
import LandingSection from "@/components/sections/LandingSection";

async function getBlogs() {
  try {
    await connectDB();
    const blogs = await Blog.find({})
      .select('_id title content category photo author createdAt')
      .sort({ createdAt: -1 })
      .lean()
      .then(blogs => blogs.map(blog => ({
        ...blog,
        _id: blog._id.toString(),
        createdAt: blog.createdAt.toISOString()
      })));
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export const revalidate = 3600;

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div>
      <NavBar/>
      <LandingSection/>
      <BlogCardGrid initialBlogs={blogs}/>
      <Footer/>
    </div>
  );
}
