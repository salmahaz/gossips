'use client';
import { useState, useCallback } from 'react';
import React from 'react';

const BADGES = ["All Blogs", "Personal Finance", "Health & Fitness"];

const Badge = React.memo(({ badge, isActive, onClick }) => (
  <span
    className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium cursor-pointer min-w-[100px] text-center transition-colors
      ${isActive ? 'text-white' : 'text-gray-800 hover:bg-teal-400'}
    `}
    style={
      isActive
        ? { backgroundColor: '#80CBC4' }
        : { backgroundColor: '#FBF8EF' }
    }
    
    onClick={() => onClick(badge)}
  >
    {badge}
  </span>
));

Badge.displayName = 'Badge';

export default function BadgesSection({ selectedCategory, onCategoryChange }) {
  const handleBadgeClick = useCallback((badge) => {
    onCategoryChange(badge);
  }, [onCategoryChange]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center my-4 gap-2">
        {BADGES.map((badge) => (
          <Badge
            key={badge}
            badge={badge}
            isActive={selectedCategory === badge}
            onClick={handleBadgeClick}
          />
        ))}
      </div>
    </div>
  );
}