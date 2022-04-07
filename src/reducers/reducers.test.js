import {
    CHANGESEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } from '../actions/constants';

    import searchReducer from './searchReducer';

console.log(searchReducer);
    describe('searchRobots', ()=>{
        it('Should return the initial state', ()=>{
            expect(searchReducer(undefined, {})).toEqual({searchText: ''})
        })
    })