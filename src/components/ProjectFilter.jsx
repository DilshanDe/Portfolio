import React from 'react';


export function ProjectFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 md:gap-4 ">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`
            relative rounded-full px-2 py-2 text-xs font-medium transition-all gap-2 xl:gap-6 lg:gap-4 lg:px-4 xl:px-4 lg:text-sm
            xl:text-base
            ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-red-600 via-gray-800 to-pink-900 text-white'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
            }
          `}
        >
          {category}
          {selectedCategory === category && (
            <span className="absolute inset-0 animate-pulse rounded-full bg-white/20 " />
          )}
        </button>
      ))}
    </div>
  );
}