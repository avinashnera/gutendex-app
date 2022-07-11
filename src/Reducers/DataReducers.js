import { GET_DATA, LOADER } from '../Actions/ActionTypes';

var INITIAL_STATE = {
    books_data: [],
    books_count: '',
    loader: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_DATA:
            return { ...state, books_data: action.payload.results, books_count: action.payload.count }
            break;
        case LOADER:
            return { ...state, loader: action.payload }
            break;
        default:
            return state;
            break;
    }
}
