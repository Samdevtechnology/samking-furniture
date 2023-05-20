"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FormEvent } from "react";

const SearchBar = ({ className }: { className?: String }) => {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log("handle Search");
  };
  return (
    <div className={`search-bar flex just-cont ${className}`}>
      <div className="search-bar grid h-8 place-items-center w-full md:w-[90%]">
        <form
          onSubmit={handleSearch}
          className="relative w-full min-w-[200px] h-8"
        >
          <input
            type="text"
            placeholder="search"
            className="w-full h-8 rounded-lg outline-0 focus:outline-0 placeholder:text-primary/60 text-primary pl-3 py-2.5 pr-12"
          />
          <button className="search-btn text-primary grid place-items-center absolute top-2/4 right-3 -translate-y-2/4 w-7 h-7 rounded-lg hover:bg-blue-500/10 active:bg-blue-500/30 overflow-hidden">
            <MagnifyingGlassIcon className="h-5 w-5" strokeWidth={2} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
