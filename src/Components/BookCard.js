import { useState } from 'react';
import './css/BookCard.css';

function BookCard(props) {
    const { fileFormats, title, author } = props;

    // Opens file in the order of preference and availability in a new tab, else shows alert with message.
    function openFile() {
        let index = 1;
        Object.keys(fileFormats).forEach(key => {
            if (key.includes('text/html')) {
                window.open(fileFormats[key], '_blank', 'noopener,noreferrer');
                return true;
            } else if (key == 'application/pdf') {
                window.open(fileFormats[key], '_blank', 'noopener,noreferrer');
                return true;
            } else if (key == 'text/plain') {
                window.open(fileFormats[key], '_blank', 'noopener,noreferrer');
                return true;
            } else if (index == Object.keys(fileFormats).length) {
                alert("No viewable version available");
            }
            index++;
        });
    }

    return (
        <div className="col-md-2 col-sm-4 col-4 mb-5">
            <div className="book-card">
                <a onClick={() => openFile()}>
                    <div className="cover-image mb-2">
                        <img src={fileFormats['image/jpeg']} className="img-fluid" />
                    </div>
                </a>
                <div className="title-section">
                    <h6 className="book-name montserrat-semibold uppercase text">{title}</h6>
                    <span className="tooltiptext montserrat-medium ">{title}</span>
                </div>
                {author.length > 0 ?
                    author.map((item, index) => {
                        return <p className="book-author montserrat-semibold medium-grey" key={index}>{item.name}</p>
                    })
                    :
                    <p className="book-author montserrat-semibold medium-grey">Anonymous</p>
                }
            </div>
        </div>
    )
}

export { BookCard };