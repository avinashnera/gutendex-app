import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { BookCard } from '../Components';
import { getBooks } from '../Actions';

function BooksScreen(props) {
    const dispatch = useDispatch();
    const reduxState = useSelector(state => state.data);
    const { books_data, books_count, loader, next } = reduxState;
    const [genreFilter, setGenreFilter] = useState(window.location.href
        .split("/")
        .slice(-1)[0]
        .split("-")[0]);
    const [titleAuthorFilter, setTitleAuthorFilter] = useState('');
    const [nextPageNumber, setNextPageNumber] = useState('');

    console.log("Next in Screen:::::::::: ", next);
    console.log("Next Page Number in Screen:::::::::: ", nextPageNumber);

    const renderLoader = () => {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>
        )
    }

    const handleKeypress = (e) => {
        if (e.charCode === 13) {
            console.log("Next value before function call:::::::::: ", next);
            dispatch(getBooks({
                genreFilter: genreFilter,
                titleAuthorFilter: e.target.value,
                next: 0
            }))
        }
    };

    // const readImageFromURL = () => {
    //     console.log("Read Image from URL: ", )
    //     JSZipUtils.getBinaryContent("http://www.gutenberg.org/files/1342/1342-0.zip", function (err, data) {
    //         if (err) {
    //            throw err;
    //         }
    //         const jsZip = new JSZip();
    //         jsZip.loadAsync(data).then(function (zip) {
    //            Object.keys(zip.files).forEach(function (filename) {
    //               zip.files[filename].async("base64").then(function (fileData) {
    //                  const image = document.createElement("img");
    //                  image.src = "data:image/*;base64," + fileData;
    //                  const unziped = document.querySelector(".unziped-container");
    //                  unziped.appendChild(image);
    //               });
    //            });
    //         });
    //      });
    // }


    const handleScroll = (e) => {
        console.log("top: " + e.target.documentElement.scrollTop + "  height: " + window.innerHeight + "  scrollheight: " + e.target.documentElement.scrollHeight)
        if (window.innerHeight + e.target.documentElement.scrollTop + 1 == e.target.documentElement.scrollHeight) {
            console.log("At the bottom of the page:::::::::: ", next);
            getData();
        }
    }

    const getData = () => {
        console.log("Inside getData:::::::::: ", next);
        dispatch(getBooks({
            genreFilter: genreFilter,
            titleAuthorFilter: titleAuthorFilter,
            next: next
        }))
    }

    useEffect(() => {
        console.log("UseEffect:::::::::: ")
        if (genreFilter != "") {
            console.log("Use Effect getData function is being called::::::::: ")
            getData();
        }
        window.addEventListener('scroll', handleScroll);
    }, [genreFilter]);
    return (
        <>
            <div className="section bg-white pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-3">
                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <div className="me-3">
                                    <Link to="/" className="go-to-genre-button"><img src='./assets/images/Back.svg' className="go-to-genre-icon" /></Link>
                                </div>
                                <div>
                                    <h2 className="montserrat-semibold primary-color mb-0">{genreFilter}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 pb-4">
                            <div className="input-group">
                                <span className="input-group-append">
                                    <img src='./assets/images/Search.svg' className="go-to-genre-icon" />
                                </span>
                                <input type="search" onKeyPress={(e) => handleKeypress(e)}
                                    className="form-control bg-light-grey search-input" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-light-grey pt-5">
                <div className="container pb-5">
                    {!loader ?
                        <div className="row books-row">
                            {books_count ?
                                books_data.map((item, index) => {
                                    return <BookCard key={index} fileFormats={item.formats} title={item.title} author={item.authors} />
                                })
                                :
                                <h5>There are no books available.</h5>
                            }
                        </div>
                        :
                        renderLoader()
                    }
                </div>
            </div>

        </>
    )
}

export { BooksScreen };