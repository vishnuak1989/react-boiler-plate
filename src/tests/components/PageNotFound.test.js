import React from 'react'
import  PageNotFound  from '../../components/PageNotFound'
// import Reactshallowrenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme'

test("Should render  Expense Dashboard Page",()=>{
  const wrapper = shallow(<PageNotFound />);
  expect(wrapper).toMatchSnapshot();
})
