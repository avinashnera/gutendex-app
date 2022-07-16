import { GET_DATA, RESET, LOADER } from '../Actions/ActionTypes';

var INITIAL_STATE = {
    books_data: [],
    loader: false,
    next: 'next'
}

export default (state = INITIAL_STATE, action) => {
    console.log("ACTION::::::::::",action);
    switch (action.type) {
        case GET_DATA:
            // console.log("PAYLOAD::::::::::", action.payload.next)
            return { ...state, books_data: action.payload.books_data, next: action.payload.next }
            break;
        case LOADER:
            return { ...state, loader: action.payload }
            break;
        case RESET:
            // console.log("RESET::::::::::", action.type)
            return INITIAL_STATE;
            break;
        default:
            return state;
            break;
    }
}
