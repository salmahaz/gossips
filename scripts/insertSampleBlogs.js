import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from '../lib/models/blog.js';

dotenv.config();

const sampleBlogs = [
  {
    title: "The Future of Personal Finance: AI and Automation",
    content: "Discover how artificial intelligence is revolutionizing personal finance management. From automated budgeting to smart investment strategies, learn how technology is making financial planning more accessible and efficient than ever before.",
    author: "Sarah Johnson",
    category: "Personal Finance",
    photo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "10 Essential Yoga Poses for Beginners",
    content: "Start your yoga journey with these fundamental poses. Learn proper alignment, breathing techniques, and how to build a strong foundation for your practice. Perfect for those new to yoga or looking to refresh their basics.",
    author: "Michael Chen",
    category: "Health & Fitness",
    photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Smart Budgeting: How to Save Money in 2024",
    content: "Practical tips and strategies for effective budgeting in the modern world. Learn how to track expenses, set financial goals, and make your money work for you. Includes real-world examples and actionable advice.",
    author: "Emma Davis",
    category: "Personal Finance",
    photo: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "High-Intensity Interval Training: The Science Behind It",
    content: "Explore the benefits of HIIT workouts and why they're so effective for fat loss and cardiovascular health. Includes sample workout routines and scientific explanations of how HIIT affects your body.",
    author: "David Wilson",
    category: "Health & Fitness",
    photo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Investment Strategies for Young Professionals",
    content: "A comprehensive guide to building wealth in your 20s and 30s. Learn about different investment vehicles, risk management, and how to create a diversified portfolio that aligns with your financial goals.",
    author: "Lisa Thompson",
    category: "Personal Finance",
    photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
  }
];

async function insertSampleBlogs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'blogs-database' // Updated database name
    });
    console.log('Connected to MongoDB');

    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('Cleared existing blogs');

    // Insert new blogs
    const insertedBlogs = await Blog.insertMany(sampleBlogs);
    console.log(`Successfully inserted ${insertedBlogs.length} blogs`);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

insertSampleBlogs(); 