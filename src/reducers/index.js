import { CHANGESEARCHFIELD } from "../actions/constants";

const initialState = {
  searchText: ''
}

export const searchRobots = (state=initialState, action={}) =>{
  switch (action.type) {
    case CHANGESEARCHFIELD:
      return Object.assign({}, state, {searchText: action.payload})
    default:
      return state;
  }
}