import axios from 'axios';
import { GET_DATA, RESET, LOADER } from './ActionTypes';

export const getBooks = (books_data,genre,titleAuthorFilter,pageNumber,next) => {
    /*URL endpoint - Below are the query params information 
    mime_type - image/jpeg.
    page - page number for next page data.
    topic - genre from the books screen.
    search - text to be searched from api using the textAuthorFilter passed from screen. The text is first given to encodeURIComponent() to replace spaces with %20 in URL encoded format.
    */
    const url = `http://skunkworks.ignitesol.com:8000/books?mime_type=image%2Fjpeg&topic=${genre}${(pageNumber>1 ? `&page=${pageNumber}` : '')}${(titleAuthorFilter ? `&search=${encodeURIComponent(titleAuthorFilter.trim())}` : "")}`;

    console.log("REQUEST URL:::::::::: ", url);
    console.log("DATA.PAGE_NUMBER:::::::::: ", pageNumber);
    console.log("DATA.BOOKS_DATA:::::::::: ", books_data.length);
    console.log("DATA.NEXT:::::::::: ", next);
    return dispatch => {
        // loader is rendered
        dispatch({
            type: LOADER,
            payload: true,
        })
        axios.get(url)
            .then((response) => {
                // let books_data =[...data.books_data, ...response.data.results];
                let result = {
                    next: response.data.next,
                    books_data: [...books_data, ...response.data.results]
                    // books_data: response.data.results
                }
                
                console.log("RESPONSE_BOOKS_DATA:::::::::: ", response.data.results.length);
                console.log("TOTAL_BOOKS_DATA:::::::::: ", result.books_data.length);
                console.log("RESPONSE_DATA:::::::::: ", response.data);
                // console.log("RESULT:::::::::: ", result.books_data.length);
                // api response books data is set
                dispatch({
                    type: GET_DATA,
                    payload: result,
                })
                //loader is removed 
                dispatch({
                    type: LOADER,
                    payload: false,
                })
            })
            .catch((error) => {
            });
    }
}

export const resetState = (navigate) => {
    // console.log("RESET STATE DATA::::::::::",data);
    if(navigate) {
        // console.log("DATA.NAVIGATE IS TRUE::::::::::");
        navigate('/');
    }
    return dispatch => {
        dispatch({
            type: RESET
        })
    }
    
}