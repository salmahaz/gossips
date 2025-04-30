import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from '../lib/models/blog.js';

dotenv.config();

async function readBlogs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'blogs-database'
    });
    console.log('Connected to MongoDB');

    const blogs = await Blog.find({});
    console.log('Found blogs:', blogs.length);
    blogs.forEach(blog => {
      console.log('\nBlog:', {
        title: blog.title,
        author: blog.author,
        category: blog.category
      });
    });

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

readBlogs(); 