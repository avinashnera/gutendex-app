import axios from 'axios';
import { GET_DATA, LOADER } from './ActionTypes';

export const getBooks = (data) => {
    const url = 'http://skunkworks.ignitesol.com:8000/books?mime_type=image%2Fjpeg&' + 'topic=' + data.genreFilter + (data.titleAuthorFilter ? '&search=' + data.titleAuthorFilter : "");

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
            });
    }
}