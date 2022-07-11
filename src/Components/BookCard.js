import { useState, useEffect } from 'react';

function BookCard(props) {
    const { fileFormats, title, author } = props;
    const [coverImage, setCoverImage] = useState('');
    const [htmlFile, setHtmlFile] = useState('');
    const [pdfFile, setPdfFile] = useState('');
    const [textFile, setTextFile] = useState('');


    function getFileFormatURLs() {
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

    function openFile() {
        if(htmlFile != '') {
            window.open(htmlFile, '_blank', 'noopener,noreferrer');
        } else if (pdfFile != '') {
            window.open(pdfFile, '_blank', 'noopener,noreferrer');
        } else if(textFile != '') {
            window.open(textFile, '_blank', 'noopener,noreferrer');
        } else {
            alert("No viewable version available");
        }
    }

    useEffect(() => {
        getFileFormatURLs();
    },[]);

    return (
        <div className="col-md-2 col-sm-4 col-4 mb-5">
            <div className="book-card">
                <a onClick={() => openFile()}>
                <div className="cover-image mb-2">
                    <img src={coverImage} className="img-fluid" />
                </div>
                </a>
                <h6 className="book-name montserrat-semibold uppercase">{title}</h6>
                <p className="book-author montserrat-semibold medium-grey">{author.length > 0 ? author[0].name : "Anonymous"}</p>
            </div>
        </div>
    )
}

export { BookCard };