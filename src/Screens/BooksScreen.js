import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from "react-router-dom";
import { BookCard } from '../Components';
import { getBooks, resetState } from '../Actions';
import './css/BooksScreen.css';

function BooksScreen(props) {
    const dispatch = useDispatch();
    const { genre } = useParams();
    const navigate = useNavigate();
    const reduxState = useSelector(state => state.data);
    const { books_data, loader, next } = reduxState;
    const [titleAuthorFilter, setTitleAuthorFilter] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    console.log("NEXT1::::::::::", next);

    //displays the loader in place of the main content section 
    const renderLoader = () => {
        // console.log("IN LOADER FUNCTION::::::::::");
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

    //triggers the api when user enters after typing in the search field
    const handleKeypress = (e) => {
        if (e.charCode === 13) {
            // console.log("IN HANDLE KEYPRESS::::::::::")
            setPageNumber(1)
            setTitleAuthorFilter(e.target.value)
            dispatch(resetState(''))
        }
    };

    //clears the search input field on click of the clear button in the search field
    const clearSearchInput = () => {
        console.log("CLEAR BUTTON CLICK EVENT::::::::::");
        document.getElementById('searchInput').value = "";
        document.getElementById('clearButton').style.display = 'none';
        document.getElementById('clearButton').style.zIndex = '0';
        setPageNumber(1);
        setTitleAuthorFilter('');
        dispatch(resetState(''))
    }

    //triggers the getBooks api
    const getData = () => {
        console.log("IN GET DATA FUNCTION::::::::::", next, pageNumber);
        if(next != null) {
            // dispatch(getBooks({
            //     books_data: books_data,
            //     genre: genre,
            //     titleAuthorFilter: titleAuthorFilter,
            //     page_number: pageNumber,
            //     next: next
            // }))
            dispatch(getBooks(books_data,genre,titleAuthorFilter,pageNumber,next))
        }
    }

    //Renders the clear button in the search field on typing any text in the search field
    const renderClearButton = () => {
        document.getElementById('searchInput').addEventListener('input', (e) => {
            // console.log("SEARCH INPUT VALUE:::::::::: ", e.currentTarget.value);
            if (e.currentTarget.value != "") {
                document.getElementById('clearButton').style.display = 'block';
                document.getElementById('clearButton').style.zIndex = '99';
            } else {
                document.getElementById('clearButton').style.display = 'none';
                document.getElementById('clearButton').style.zIndex = '0';
            }
        })
    }

    //This function is called when the user scrolls and check if the user has reached the end of the page and if yes then sets the page number which triggers the getdata function that gets us the new books data.
    const handleScroll = () => {
        console.log("HANDLE SCROLL FUNCTIONIS CALLED::::::::::",next);
        if (next != null) {
            if (
                window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight
            ) {
                // console.log("IF IS TRUE::::::::::");
                return;
            } else {
                setPageNumber(pageNumber + 1);
                // getData(pageNumber +1)
                console.log("SET FETCHING TO TRUE::::::::::", titleAuthorFilter);
                return;
            }
        }
    }

    // console.log("NEXT2::::::::::", next);
    useEffect(() => {
        // console.log("IN USEEFFECT FUNCTION::::::::::")
        getData();
        renderClearButton();
        // This part of code checks for browser back button press event and triggers the reset state action then navigates to the home screen.
        if (window.history && window.history.pushState) {
            window.addEventListener('popstate', function () {
                dispatch(resetState(''))
            });
        }
        //This part of code triggers the handlescroll function for infinite scrolling and load more data on listening to scroll event.
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [genre, pageNumber, titleAuthorFilter]);


    return (
        <>
            <div className="section bg-white pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-3">
                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <div className="me-3">
                                    <a onClick={() => { dispatch(resetState(navigate)) }} className="go-to-genre-button"><img src='./../assets/images/Back.svg' className="go-to-genre-icon" /></a>
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

                    <div className="row books-row">
                        {/* looping through the books data and displaying it on the screen if books are available else displays the error message.*/}
                        {books_data.length ?
                            books_data.map((item, index) => {
                                return <BookCard key={index} fileFormats={item.formats} title={item.title} author={item.authors} />
                            })
                            :
                            ''
                        }
                        
                        {books_data.length == 0 && next == null ? <h5 className="text-center">There are no books available.</h5> : ''}

                        {books_data.length && next == null ? <h5 className="text-center">No more books available.</h5> : ''}

                        {/* displays the loader until the api response and we have more data to be displayed. */}
                        {loader && next != null ? renderLoader() : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export { BooksScreen };