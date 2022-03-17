import { CHANGESEARCHFIELD } from '../actions/constants';


const initialStateSearch = {
    searchText: ''
  }
  
 const searchReducer = (state=initialStateSearch, action={}) =>{
    switch (action.type) {
      case CHANGESEARCHFIELD:
        return Object.assign({}, state, {searchText: action.payload})
      default:
        return state;
    }
  }

  export default searchReducer;