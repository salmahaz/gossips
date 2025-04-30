'use client';
import { useState, useMemo } from 'react';
import BlogCard from "../atoms/BlogCard";
import BlogCardSkeleton from "../skeletons/BlogCardSkeleton";
import BadgeSection from './BadgeSection';
import React from 'react';

const MemoizedBlogCard = React.memo(BlogCard);

export default function BlogCardGrid({ initialBlogs }) {
  const [selectedCategory, setSelectedCategory] = useState('All Blogs');

  const filteredBlogs = useMemo(() => {
    return selectedCategory === 'All Blogs' 
      ? initialBlogs 
      : initialBlogs.filter(blog => blog.category === selectedCategory);
  }, [selectedCategory, initialBlogs]);

  if (!initialBlogs) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-2 min-h-[60vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-2 min-h-[60vh]">
      <BadgeSection 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {filteredBlogs.length === 0 ? (
        <div className="flex items-center justify-center min-h-[40vh]">
          <div className="text-center text-gray-500">
            <p className="text-lg font-medium">No blogs found in this category.</p>
            <p className="text-sm mt-2">Try selecting a different category or check back later.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBlogs.map(blog => (
            <MemoizedBlogCard key={blog._id} {...blog} />
          ))}
        </div>
      )}
    </div>
  );
}