import { GET_DATA, LOADER } from '../Actions/ActionTypes';

var INITIAL_STATE = {
    books_data: [],
    books_count: '',
    next: '',
    previous: '',
    loader: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_DATA:
            console.log("Response:::::::::: ",action.payload)
            return { ...state, books_data: action.payload.results, books_count: action.payload.count, next: action.payload.next, previous: action.payload.previous }
            break;
        case LOADER:
            return { ...state, loader: action.payload }
            break;
        default:
            return state;
            break;
    }
}
