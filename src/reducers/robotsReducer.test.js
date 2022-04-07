import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } from '../actions/constants';

    import robotReducer from './robotsReducer';

    describe('Should test the robot Reducer', ()=>{
        const initialStateRobot = {
            isPending: false,
            robots: [],
            error: ''
        }

        it('Initial state should be pending', ()=>{
            expect(robotReducer(initialStateRobot, {
                type: REQUEST_ROBOTS_PENDING,
                payload: false
            })).toEqual({
                isPending: true,
                robots: [],
                error: ''
            })
        })

        it('Initial state should not be pending', ()=>{
            expect(robotReducer(initialStateRobot, {
                type: REQUEST_ROBOTS_FAILED,
                payload: 'Error occured here'
            })).toEqual({ 
                isPending: false,
                robots: [],
                error: 'Error occured here'
            })
        })

    })