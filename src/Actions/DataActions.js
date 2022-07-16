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

    return dispatch => {
        // loader is rendered
        dispatch({
            type: LOADER,
            payload: true,
        })
        axios.get(url)
            .then((response) => {
                let result = {
                    next: response.data.next,
                    books_data: [...books_data, ...response.data.results]
                }

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
    if(navigate) {
        navigate('/');
    }
    return dispatch => {
        dispatch({
            type: RESET
        })
    }
}