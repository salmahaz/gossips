'use client';
import Link from 'next/link';
import React from 'react';

function BlogCard({ _id, title, content, category, photo }) {
  const imageUrl = photo || 'https://via.placeholder.com/300x200?text=No+Image';

  return (
    <div className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="flex flex-col gap-3 p-4 flex-1">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold w-fit"
          style={{ backgroundColor: '#80CBC4', color: '#fff' }}
        >
          {category}
        </span>
        <h3 className="font-bold text-sm line-clamp-2" title={title}>
          {title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-3">
          {content}
        </p>
        <div className="mt-auto">
          <Link
            href={`/blog-details/${_id}`}
            className="text-xs text-[#80CBC4] hover:underline font-medium"
          >
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(BlogCard);