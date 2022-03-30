import React from 'react';
import { shallow } from 'enzyme';
import Card from "./Card";

import {configure} from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';




configure({ adapter: new Adapter() });


it('Wetin they occur',()=>{
    expect(shallow(<Card/>)).toMatchSnapshot() 
})



