"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

type PageItem = number | "...";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  siblingCount = 1,
}) => {
  // Generate page numbers to display
  const generatePageNumbers = (): PageItem[] => {
    // Mobile view: show fewer buttons
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const pageNumbers: PageItem[] = [1];

      // Add current page and immediate neighbors
      if (currentPage > 1 && currentPage < totalPages) {
        if (currentPage > 2) pageNumbers.push("...");
        pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
      }

      // Add dots and last page
      if (currentPage < totalPages - 1) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);

      return pageNumbers;
    }

    // Desktop view: more comprehensive pagination
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 1;

    const pageNumbers: PageItem[] = [];

    pageNumbers.push(1);

    if (showLeftDots) {
      pageNumbers.push("...");
    }

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      if (i > 1 && i < totalPages) {
        pageNumbers.push(i);
      }
    }

    if (showRightDots) {
      pageNumbers.push("...");
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  // State to track screen size
  const [, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  // Add resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Only add listener in browser environment
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const pageNumbers = generatePageNumbers();

  const renderPageButton = (page: PageItem) => {
    if (page === "...") {
      return (
        <div key="ellipsis" className="flex items-center">
          <EllipsisHorizontalIcon className="h-4 w-4 text-muted-foreground" />
        </div>
      );
    }

    return (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`
          ${
            page === currentPage
              ? "bg-blue-600 dark:bg-gray-500 text-white"
              : "hover:bg-blue-600 hover:dark:bg-gray-500 hover:text-white"
          }
          w-8 h-8 sm:w-10 sm:h-10 p-0 text-xs sm:text-base
        `}
      >
        {page}
      </button>
    );
  };

  return (
    <div className="flex items-center justify-center space-x-1 sm:space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-accent hover:text-accent-foreground"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map(renderPageButton)}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-accent hover:text-accent-foreground"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

// Example usage component
const PaginationComp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="text-sm text-muted-foreground">
        Current Page: {currentPage}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationComp;
