import searchReducer from './searchReducer';
import robotsReducer from './robotsReducer';


const rootReducer = {
    robot: robotsReducer,
    search: searchReducer,
}

export default rootReducer;
