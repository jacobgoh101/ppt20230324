import React from "react";

export function MovieCard({ movie, handleClick }) {
    const { original_title, tagline, vote_average } = movie;
    return (
        <div className="w-full flex justify-center cursor-pointer" onClick={handleClick}>
            <div className="w-full block max-w-sm rounded-lg bg-white p-6 shadow-lg">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                    {original_title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 ">{tagline}</p>
                <p className="mb-4 text-base text-neutral-600 ">
                    <span className="text-primary-500 font-bold">{vote_average}</span> / 10
                </p>
            </div>
        </div>
    );
}
