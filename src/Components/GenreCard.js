import { Link } from "react-router-dom";
import { useState } from 'react';

function GenreCard(props) {
    const { genre } = props;

    return (
        <div className="col-md-6 mb-4">
            <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex">
                    <div className="align-self-middle me-2"><img src={'./assets/images/' + genre + '.svg'} className="genre-card-icon" /></div>
                    <div><h5 className="montserrat-semibold uppercase">{genre}</h5></div>
                </div>
                <div>
                    {/* <Link to={"/" + genre} className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></Link> */}
                    <Link to={{
                        pathname: '/Fiction'
                    }} className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></Link>
                </div>
            </div>
        </div>
    )
}

export { GenreCard };