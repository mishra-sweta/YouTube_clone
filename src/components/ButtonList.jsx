import React, { useRef } from "react";
import Button from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const list = [
  "All",
  "Gaming",
  "Comedy",
  "Songs",
  "JavaScript",
  "MERN",
  "Movies",
  "Podcasts",
  "Pop",
  "Mixes",
  "Dramedy",
  "AI",
];

const ButtonList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full flex items-center mx-3">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 p-2 bg-white shadow rounded-full"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {/* Scrollable Button List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-2 px-10 py-3 scrollbar-hide scroll-smooth"
      >
        {list.map((name, idx) => (
          <Button key={idx} name={name} />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 p-2 bg-white shadow rounded-full"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ButtonList;
