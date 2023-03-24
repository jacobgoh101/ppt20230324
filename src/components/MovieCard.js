import React from "react";

export function MovieCard({ movie, handleClick }) {
  const { title, tagline, vote_average } = movie;
  return (
    <div
      className="flex w-full cursor-pointer justify-center"
      onClick={handleClick}
    >
      <div className="block w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 ">{tagline}</p>
        <p className="mb-4 text-base text-neutral-600 ">
          <span className="font-bold text-primary-500">{vote_average}</span> /
          10
        </p>
      </div>
    </div>
  );
}
