"use client";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { FormEvent } from "react";

const NewsletterInput = ({ className }: { className?: String }) => {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log("handle Search");
  };
  return (
    <div className={`search-bar flex min-w-[200px] just-cont ${className}`}>
      <div className="search-bar w-full grid h-8 place-items-center">
        <form onSubmit={handleSearch} className="relative w-full h-8">
          <input
            type="text"
            id="news-letter"
            placeholder="Email Address"
            className="w-full h-8 rounded-sm outline-0 focus:outline-0 placeholder:text-primary/60 text-primary pl-3 py-2.5 pr-12"
          />
          <button className="search-btn text-primary grid place-items-center absolute top-2/4 right-3 -translate-y-2/4 w-7 h-7 rounded-lg hover:bg-blue-500/10 active:bg-blue-500/30 overflow-hidden">
            <ArrowSmallRightIcon className="h-5 w-5" strokeWidth={2} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterInput;
