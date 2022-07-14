import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import $ from 'jquery';
import { BookCard } from '../Components';
import { getBooks } from '../Actions';
import './css/BooksScreen.css';

function BooksScreen(props) {
    const dispatch = useDispatch();
    const { genre } = useParams();
    const reduxState = useSelector(state => state.data);
    const { books_data, books_count, loader } = reduxState;
    const [titleAuthorFilter, setTitleAuthorFilter] = useState('');


    const renderLoader = () => {
        console.log("IN LOADER FUNCTION::::::::::");
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
            dispatch(getBooks({
                genre: genre,
                titleAuthorFilter: e.target.value
            }))
        }
    };

    const clearSearchInput = () => {
        console.log("CLEAR BUTTON CLICK EVENT::::::::::");
        document.getElementById('searchInput').value = "";
        document.getElementById('clearButton').style.display = 'none';
        document.getElementById('clearButton').style.zIndex = '0';
        getData();
    }

    const getData = () => {
        console.log("IN GET DATA FUNCTION::::::::::", genre);
        dispatch(getBooks({
            genre: genre,
            titleAuthorFilter: titleAuthorFilter
        }))
    }
    const renderClearButton = () => {
        document.getElementById('searchInput').addEventListener('input', (e) => {
            console.log("SEARCH INPUT VALUE:::::::::: ", e.currentTarget.value);
            if (e.currentTarget.value != "") {
                document.getElementById('clearButton').style.display = 'block';
                document.getElementById('clearButton').style.zIndex = '99';
            } else {
                document.getElementById('clearButton').style.display = 'none';
                document.getElementById('clearButton').style.zIndex = '0';
            }
        })
    }

    useEffect(() => {
        console.log("IN USEEFFECT FUNCTION::::::::::")
        // if (genre != "") {
        getData();
        // }
        renderClearButton();
    }, [genre]);

    return (
        <>
            <div className="section bg-white pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-3">
                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <div className="me-3">
                                    <Link to="/" className="go-to-genre-button"><img src='./../assets/images/Back.svg' className="go-to-genre-icon" /></Link>
                                </div>
                                <div>
                                    <h2 className="montserrat-semibold primary-color mb-0">{genre}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 pb-4">
                            <div className="input-group">
                                <span className="input-group-append">
                                    <img src='./../assets/images/Search.svg' className="go-to-genre-icon" />
                                </span>
                                <input id="searchInput" onKeyPress={(e) => handleKeypress(e)}
                                    className="form-control bg-light-grey search-input" placeholder="Search" />
                                <button id="clearButton" className="clear-button" onClick={() => { clearSearchInput() }}><img src='./../assets/images/Cancel.svg' className="clear-icon" /></button>
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