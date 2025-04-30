export default function BlogDetailsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button Skeleton */}
      <div className="animate-pulse mb-6">
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* Image Skeleton */}
      <div className="animate-pulse mb-6">
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-4">
        {/* Category Badge Skeleton */}
        <div className="animate-pulse">
          <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
        </div>

        {/* Title Skeleton */}
        <div className="animate-pulse">
          <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
        </div>

        {/* Author and Date Skeleton */}
        <div className="animate-pulse flex items-center space-x-2">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>

        {/* Content Paragraphs Skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
} 