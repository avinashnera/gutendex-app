import axios from 'axios';
import { GET_DATA, LOADER } from './ActionTypes';

export const getBooks = (data) => {
    /*URL endpoint - Below are the query params information 
    mime_type - image/jpeg.
    page - page number for next page data.
    topic - genre from the books screen.
    search - text to be searched from api using the textAuthorFilter passed from screen. The text is first given to encodeURIComponent() to replace spaces with %20 in URL encoded format.
    */
    const url = 'http://skunkworks.ignitesol.com:8000/books?mime_type=image%2Fjpeg&' + 'topic=' + data.genre + (data.titleAuthorFilter ? '&search=' + encodeURIComponent(data.titleAuthorFilter.trim()) : "");

    console.log("REQUEST URL:::::::::: ", url);
    return dispatch => {
        // loader is rendered
        dispatch({
            type: LOADER,
            payload: true,
        })
        axios.get(url)
            .then((response) => {
                let result = response.data;
                console.log("RESPONSE:::::::::: ", result);
                // api response data is set
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