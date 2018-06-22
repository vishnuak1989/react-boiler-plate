import React from 'react'
import  Dashboard  from '../../components/Dashboard'
import { shallow } from 'enzyme'


test("Should render Dashboard Page",()=>{
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
})
