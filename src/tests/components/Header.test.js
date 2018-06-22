import React from 'react'
// import Reactshallowrenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';
import Header from '../../components/Header'

test("should render correctly",()=>{
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

})
