import {
    CHANGESEARCHFIELD } from '../actions/constants';

    import searchReducer from './searchReducer';


    // Reducer testing just give it a set of input and use the toEqual assertion to give the expected behavior of your reducer function
    
    describe('searchRobots', ()=>{
        const initialStateSearch = {
            searchText: ''
        }
        
        it('Should return the initial state', ()=>{
            expect(searchReducer(undefined, {})).toEqual({searchText: ''})
        })

        it('Should handle all SEARCHCHANGE EVENT', ()=>{
            expect(searchReducer(initialStateSearch, {
                type: CHANGESEARCHFIELD,
                payload: 'abc'
            })).toEqual({searchText: 'abc'})
        })
                
    })