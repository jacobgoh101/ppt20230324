import React, { useMemo } from "react";
import { parseDdMmYyyy } from "../util/date.util";
import { Button } from "./Button";

function Row({ label, children }) {
    return (
        <tr>
            <td>{label}</td>
            <td className="font-bold text-primary-500">{children}</td>
        </tr>
    );
}

export function MovieDetails({ movie, handleBack }) {
    const {
        original_title,
        tagline,
        overview,
        vote_average,
        release_date,
        runtime,
        status,
        vote_count,
        title, id
    } = movie;
    const date = useMemo(
        () => parseDdMmYyyy(release_date).toLocaleDateString(),
        [release_date]
    );
    return (
        <div className="flex justify-center">
            <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <img
                    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={`https://picsum.photos/200/300`}
                    alt=""
                />
                <div className="flex flex-col justify-start p-6">
                    <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                        {title}
                    </h5>
                    {tagline && (
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {tagline}
                        </p>
                    )}
                    {overview && (
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {overview}
                        </p>
                    )}

                    <table className="mb-10">
                        <tbody>
                            <Row label="Original Title">{original_title}</Row>
                            <Row label="Release Date">{date}</Row>
                            <Row label="Runtime">{runtime} minutes</Row>
                            <Row label="Status">{status}</Row>
                            <Row label="Ratings">{vote_average} / 10 ({vote_count} votes)</Row>
                        </tbody>
                    </table>

                    <div className="flex justify-center">
                        <Button
                            onClick={handleBack}
                        >
                            Back to Movie List
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
