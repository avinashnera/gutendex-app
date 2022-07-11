import axios from 'axios';
import { GET_DATA, LOADER } from './ActionTypes';

export const getBooks = (data) => {
    const url = 'http://skunkworks.ignitesol.com:8000/books?mime_type=image%2Fjpeg&' + (data.next > 1 ? 'page=' + data.next + '&' : "") + 'topic=' + data.genreFilter + (data.titleAuthorFilter ? '&search=' + data.titleAuthorFilter : "");
    console.log("Query Parameters:::::::::: ", data);
    console.log("Request url:::::::::: ", url);

    return dispatch => {
        dispatch({
            type: LOADER,
            payload: true,
        })
        axios.get(url)
            .then((response) => {
                let result = response.data;

                dispatch({
                    type: GET_DATA,
                    payload: result,
                })

                dispatch({
                    type: LOADER,
                    payload: false,
                })
            })
            .catch((error) => {
                console.log("Error:::::::::: ", error);
            });
    }
}