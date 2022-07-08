import React, { useEffect } from 'react';

function HomeScreen() {
    return (
        <>
            <div className="section bg-pattern">
                <div className="container pt-5 pb-3">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="montserrat-semibold primary-color">Gutenberg Project</h1>
                            <p className="montserrat-semibold">A social cataloging website that allows you to freely search its database of books, annotations,
                                and reviews.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section bg-light-grey">
                <div className="container pt-3 pb-5">
                    <div className="row genres-row mt-4">
                        <div className="col-md-6 mb-4">
                            {/* genre card */}
                            <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex">
                                    <div className="align-self-middle me-2"><img src='./assets/images/Fiction.svg' className="genre-card-icon" /></div>
                                    <div><h5 className="montserrat-semibold uppercase">Fiction</h5></div>
                                </div>
                                <div>
                                    <a href="#" className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            {/* genre card */}
                            <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex">
                                    <div className="align-self-middle me-2"><img src='./assets/images/Fiction.svg' className="genre-card-icon" /></div>
                                    <div><h5 className="montserrat-semibold uppercase">Fiction</h5></div>
                                </div>
                                <div>
                                    <a href="#" className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            {/* genre card */}
                            <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex">
                                    <div className="align-self-middle me-2"><img src='./assets/images/Fiction.svg' className="genre-card-icon" /></div>
                                    <div><h5 className="montserrat-semibold uppercase">Fiction</h5></div>
                                </div>
                                <div>
                                    <a href="#" className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            {/* genre card */}
                            <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex">
                                    <div className="align-self-middle me-2"><img src='./assets/images/Fiction.svg' className="genre-card-icon" /></div>
                                    <div><h5 className="montserrat-semibold uppercase">Fiction</h5></div>
                                </div>
                                <div>
                                    <a href="#" className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            {/* genre card */}
                            <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex">
                                    <div className="align-self-middle me-2"><img src='./assets/images/Fiction.svg' className="genre-card-icon" /></div>
                                    <div><h5 className="montserrat-semibold uppercase">Fiction</h5></div>
                                </div>
                                <div>
                                    <a href="#" className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            {/* genre card */}
                            <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex">
                                    <div className="align-self-middle me-2"><img src='./assets/images/Fiction.svg' className="genre-card-icon" /></div>
                                    <div><h5 className="montserrat-semibold uppercase">Fiction</h5></div>
                                </div>
                                <div>
                                    <a href="#" className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            {/* genre card */}
                            <div className="card genre-card d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex">
                                    <div className="align-self-middle me-2"><img src='./assets/images/Fiction.svg' className="genre-card-icon" /></div>
                                    <div><h5 className="montserrat-semibold uppercase">Fiction</h5></div>
                                </div>
                                <div>
                                    <a href="#" className="go-to-genre-button"><img src='./assets/images/Next.svg' className="go-to-genre-icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export { HomeScreen };