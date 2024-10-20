"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef, useState, useEffect, ReactNode } from "react";

interface ScrollWrapperProps {
  children: ReactNode;
  itemWidth: number; // Largura dos itens na lista
}

export const ScrollWrapper = ({ children, itemWidth }: ScrollWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: itemWidth, // Pixels to scroll to the right
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -itemWidth, // Pixels to scroll to the left
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="relative">
      {showLeftArrow && (
        <div
          onClick={scrollLeft}
          className="hidden md:block absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2 cursor-pointer z-100"
        >
          <ArrowLeft size={24} />
        </div>
      )}

      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {showRightArrow && (
        <div
          onClick={scrollRight}
          className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2 cursor-pointer z-100"
        >
          <ArrowRight size={24} />
        </div>
      )}
    </div>
  );
};
