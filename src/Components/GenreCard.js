import { Link } from "react-router-dom";
import './css/GenreCard.css';

function GenreCard(props) {
    const { genre } = props;

    return (
        <div className="col-md-6 mb-4">
            <Link to={`/books/${genre}`}>
                <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex">
                        <div className="align-self-middle me-2"><img src={'./assets/images/' + genre + '.svg'} className="genre-card-icon" /></div>
                        <div><h5 className="montserrat-semibold uppercase">{genre}</h5></div>
                    </div>
                    <div>
                        <p className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export { GenreCard };