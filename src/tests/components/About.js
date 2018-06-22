import React from 'react'
import  About  from '../../components/About'
// import Reactshallowrenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme'


test("Should render About Page",()=>{
  const wrapper = shallow(<About />);
  expect(wrapper).toMatchSnapshot();
})
