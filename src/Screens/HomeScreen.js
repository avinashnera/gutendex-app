import React, { useEffect } from 'react';
import { GenreCard } from "../Components";

function HomeScreen() {
    const genreList = ['Fiction', 'Philosophy', 'Drama', 'History', 'Humour', 'Adventure', 'Politics'];

    return (
        <>
            <div className="section bg-pattern">
                <div className="container pt-5 pb-3">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="montserrat-semibold primary-color">Gutenberg Project</h1>
                            <p className="montserrat-semibold">A social cataloging website that allows you to freely search its database of books, annotations,
                                and reviews.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section bg-light-grey">
                <div className="container pt-3 pb-5">
                    <div className="row genres-row mt-4">
                        {genreList.map((genre, index) => {
                            return <GenreCard key={index} genre={genre} />;
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export { HomeScreen };