import { combineReducers } from "redux";
import DataReducers from './DataReducers';

export default combineReducers({
    data: DataReducers
});