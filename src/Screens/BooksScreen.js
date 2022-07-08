import React, { useEffect } from 'react';

function BooksScreen() {
    return (
        <>
            <div className="section bg-white pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-3">
                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <div class="me-3">
                                    <a href="#" className="go-to-genre-button"><img src='./assets/images/Back.svg' className="go-to-genre-icon" /></a>
                                </div>
                                <div>
                                    <h2 className="montserrat-semibold primary-color mb-0">Fiction</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 pb-4">
                            <div className="input-group">
                                <span class="input-group-append">
                                    <img src='./assets/images/Search.svg' className="go-to-genre-icon" />
                                </span>
                                <input type="search" className="form-control bg-light-grey search-input" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-light-grey pt-5">
                <div className="container pb-5">
                    <div className="row books-row">
                        <div className="col-md-2 col-sm-4 col-4 mb-5">
                            {/* book card */}
                            <div className="book-card">
                                <div className="cover-image mb-2">
                                <img src='./assets/cover.jpg' className="img-fluid" />
                                </div>
                                <h6 className="book-name montserrat-semibold uppercase">THE OLD MAN AND THE SEA</h6>
                                <p className="book-author montserrat-semibold medium-grey">Charles Dickens</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4 mb-5">
                            {/* book card */}
                            <div className="book-card">
                                <div className="cover-image mb-2">
                                <img src='./assets/cover.jpg' className="img-fluid" />
                                </div>
                                <h6 className="book-name montserrat-semibold uppercase">THE OLD MAN AND THE SEA</h6>
                                <p className="book-author montserrat-semibold medium-grey">Charles Dickens</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4 mb-5">
                            {/* book card */}
                            <div className="book-card">
                                <div className="cover-image mb-2">
                                <img src='./assets/cover.jpg' className="img-fluid" />
                                </div>
                                <h6 className="book-name montserrat-semibold uppercase">THE OLD MAN AND THE SEA</h6>
                                <p className="book-author montserrat-semibold medium-grey">Charles Dickens</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4 mb-5">
                            {/* book card */}
                            <div className="book-card">
                                <div className="cover-image mb-2">
                                <img src='./assets/cover.jpg' className="img-fluid" />
                                </div>
                                <h6 className="book-name montserrat-semibold uppercase">THE OLD MAN AND THE SEA</h6>
                                <p className="book-author montserrat-semibold medium-grey">Charles Dickens</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4 mb-5">
                            {/* book card */}
                            <div className="book-card">
                                <div className="cover-image mb-2">
                                <img src='./assets/cover.jpg' className="img-fluid" />
                                </div>
                                <h6 className="book-name montserrat-semibold uppercase">THE OLD MAN AND THE SEA</h6>
                                <p className="book-author montserrat-semibold medium-grey">Charles Dickens</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4 mb-5">
                            {/* book card */}
                            <div className="book-card">
                                <div className="cover-image mb-2">
                                <img src='./assets/cover.jpg' className="img-fluid" />
                                </div>
                                <h6 className="book-name montserrat-semibold uppercase">THE OLD MAN AND THE SEA</h6>
                                <p className="book-author montserrat-semibold medium-grey">Charles Dickens</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4 mb-5">
                            {/* book card */}
                            <div className="book-card">
                                <div className="cover-image mb-2">
                                <img src='./assets/cover.jpg' className="img-fluid" />
                                </div>
                                <h6 className="book-name montserrat-semibold uppercase">THE OLD MAN AND THE SEA</h6>
                                <p className="book-author montserrat-semibold medium-grey">Charles Dickens</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4 mb-5">
                            {/* book card */}
                            <div className="book-card">
                                <div className="cover-image mb-2">
                                <img src='./assets/cover.jpg' className="img-fluid" />
                                </div>
                                <h6 className="book-name montserrat-semibold uppercase">THE OLD MAN AND THE SEA</h6>
                                <p className="book-author montserrat-semibold medium-grey">Charles Dickens</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4 mb-5">
                            {/* book card */}
                            <div className="book-card">
                                <div className="cover-image mb-2">
                                <img src='./assets/cover.jpg' className="img-fluid" />
                                </div>
                                <h6 className="book-name montserrat-semibold uppercase">THE OLD MAN AND THE SEA</h6>
                                <p className="book-author montserrat-semibold medium-grey">Charles Dickens</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export { BooksScreen };