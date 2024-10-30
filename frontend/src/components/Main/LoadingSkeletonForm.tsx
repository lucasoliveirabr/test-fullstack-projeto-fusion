import React from "react";

const LoadingSkeletonForm: React.FC = () => {
  return (
    <div className="flex flex-col max-w-md p-6 border rounded-lg shadow bg-gray-800 border-gray-700 animate-pulse -z-10">
      <div className="mb-2 w-80 md:w-72 lg:w-64 xl:w-80 flex justify-between items-center">
        <div className="w-1/2 h-6 bg-gray-700 rounded"></div>
        <div className="flex space-x-1">
          <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
          <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
        </div>
      </div>
      <div className="text-gray-400 mb-4">
        <div className="h-4 bg-gray-700 rounded mb-2 w-1/3"></div>
        <div className="h-20 bg-gray-700 rounded w-full"></div>
      </div>
      <div className="text-gray-400">
        <div className="h-4 bg-gray-700 rounded mb-2 w-1/3"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
      </div>
    </div>
  );
}

export default LoadingSkeletonForm;