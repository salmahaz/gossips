'use client';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import Link from 'next/link';

export default function LandingSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const searchBlogs = async () => {
      if (!debouncedSearchTerm.trim()) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const response = await fetch(`/api/blogs/search?q=${encodeURIComponent(debouncedSearchTerm)}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error searching blogs:', error);
      } finally {
        setIsSearching(false);
      }
    };

    searchBlogs();
  }, [debouncedSearchTerm]);

  return (
    <div
      style={{ backgroundColor: '#80CBC4' }}
      className="text-white text-center py-10 md:py-10 relative"
    >
      <h1 className="text-base md:text-xl font-bold mb-1 md:mb-2">Welcome To Gossip&apos;s</h1>
      <p className="mb-2 md:mb-4 text-xs md:text-base">
        Discover a number of gossips from various categories.
      </p>
      <div className="relative flex items-center w-full max-w-xs md:max-w-md mx-auto bg-white rounded shadow mb-2">
        <span className="px-2 py-4 md:px-2 text-gray-500 text-xs md:text-base">
          <FaSearch />
        </span>
        <input
          className="flex-1 p-1 md:p-2 rounded-r outline-none text-gray-800 text-xs md:text-base"
          type="search"
          placeholder="Search blogs by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isSearching && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#80CBC4]"></div>
          </div>
        )}
      </div>

      {searchResults.length > 0 && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-xs md:max-w-md mt-1 bg-white rounded-lg shadow-lg z-50">
          <div className="py-2">
            {searchResults.map((blog) => (
              <Link
                key={blog._id}
                href={`/blog-details/${blog._id}`}
                className="block px-4 py-2 text-sm md:text-base text-gray-800 hover:bg-gray-100"
              >
                <div className="font-medium">{blog.title}</div>
                <div className="text-xs md:text-sm text-gray-500">By {blog.author}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
