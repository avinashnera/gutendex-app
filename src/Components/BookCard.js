import { useState, useEffect } from 'react';

function BookCard(props) {
    const { fileFormats, title, author } = props;
    const [coverImage, setCoverImage] = useState('');

    function getFileFormatURL(format) {
        Object.keys(fileFormats).forEach(key => {
            if (key == format) {
                setCoverImage(fileFormats[key]);
            }
        });
    }

    useEffect(() => {
        getFileFormatURL("image/jpeg");
    });

    return (
        <div className="col-md-2 col-sm-4 col-4 mb-5">
            <div className="book-card">
                <div className="cover-image mb-2">
                    <img src={coverImage} className="img-fluid" />
                </div>
                <h6 className="book-name montserrat-semibold uppercase">{title}</h6>
                <p className="book-author montserrat-semibold medium-grey">{author.length > 0 ? author[0].name : "Anonymous"}</p>
            </div>
        </div>
    )
}

export { BookCard };