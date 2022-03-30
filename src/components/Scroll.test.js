import react from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';
import setup from '../setupTest';

 

it('should the Scroll component match snapShot', ()=>{
    expect(shallow(<Scroll />)).toMatchSnapshot()
})
