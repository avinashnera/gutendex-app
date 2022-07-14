import { useState, useEffect } from 'react';
import './css/BookCard.css';

function BookCard(props) {
    const { fileFormats, title, author } = props;
    const [ coverImage, setCoverImage ] = useState('');
    const [ htmlFile, setHtmlFile ] = useState('');
    const [ pdfFile, setPdfFile ] = useState('');
    const [ textFile, setTextFile ] = useState('');

    // setting image, HTML, PDF and TXT file URLs from fileFormats
    function setFileFormatURLs() {
        Object.keys(fileFormats).forEach(key => {
            if (key == 'image/jpeg') {
                setCoverImage(fileFormats[key]);
            }
            if (key.includes("text/html")) {
                setHtmlFile(fileFormats[key]);
            }
            if (key == 'application/pdf') {
                setPdfFile(fileFormats[key]);
            }
            if (key == 'text/plain') {
                setTextFile(fileFormats[key]);
            }
        });
    }

    // Opens file in the order of preference and availability in a new tab, else shows alert with message.
    function openFile() {
        if (htmlFile != '') {
            window.open(htmlFile, '_blank', 'noopener,noreferrer');
        } else if (pdfFile != '') {
            window.open(pdfFile, '_blank', 'noopener,noreferrer');
        } else if (textFile != '') {
            window.open(textFile, '_blank', 'noopener,noreferrer');
        } else {
            alert("No viewable version available");
        }
    }

    useEffect(() => {
        setFileFormatURLs();
    }, []);

    return (
        <div className="col-md-2 col-sm-4 col-4 mb-5">
            <div className="book-card">
                <a onClick={() => openFile()}>
                    <div className="cover-image mb-2">
                        <img src={coverImage} className="img-fluid" />
                    </div>
                </a>
                <div className="title-section">
                    <h6 className="book-name montserrat-semibold uppercase text">{title}</h6>
                    <span className="tooltiptext montserrat-medium ">{title}</span>
                </div>
                <p className="book-author montserrat-semibold medium-grey">{author.length > 0 ? author[0].name : "Anonymous"}</p>
            </div>
        </div>
    )
}

export { BookCard };