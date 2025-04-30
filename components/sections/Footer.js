'use client';
import React from "react";
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isBlogDetails = pathname.includes('/blog-details/');

  return (
    <footer
      className="text-center py-4 text-white w-full text-xs"
      style={{
        backgroundColor: '#80CBC4',
        position: isBlogDetails ? 'fixed' : 'relative',
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        marginTop: isBlogDetails ? 0 : 'auto'
      }}
    >
      {/* Copyright Text */}
      <p>
        &copy; 2025 Gossip&apos;s. All rights reserved.
      </p>
      {/* Newsletter Subscription */}
      {/* <NewsLetter /> */}
    </footer>
  );
}