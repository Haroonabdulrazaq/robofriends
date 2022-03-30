import React from 'react';
import { shallow } from 'enzyme';
import CardList from "./CardList";

import {configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

it('Wetin they occur',()=>{
    const mockRobots = [
        {
            id: 1,
            name: 'meimuna',
            gmail: 'mimi@example.com',
        },{
            id: 2,
            name: 'john',
            gmail: 'john@example.com',
        },
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot() 
})



