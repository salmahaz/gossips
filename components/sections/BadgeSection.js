'use client';
import { useState, useCallback } from 'react';
import React from 'react';

const BADGES = ["All Blogs", "Personal Finance", "Health & Fitness"];

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