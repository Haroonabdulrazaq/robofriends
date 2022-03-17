import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import robotsReducer from './robotsReducer';


const rootReducer = combineReducers({
    robot: robotsReducer,
    search: searchReducer,
})

export default rootReducer;
