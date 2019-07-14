// import React from 'react';
// import { mount, shallow, render } from 'enzyme';

// import StopWatch from '../StopWatch';

// const Component: React.FC = () => {
//   return <div></div>;
// };

// const wrapper = shallow<any>(<Component />);

// describe('MyComponent', () => {
//   it('should render correctly with no props', () => {
//     expect(wrapper.instance().toBe(true);
//     // You can also get the state from the wrapper.
//     expect(wrapper.state().someComponentState).toBeTruthy();
//   });
// });

import { shallow } from 'enzyme'

describe('Hello, Enzyme!', () => {
  it('renders', () => {
    const wrapper = shallow(<div>
      <h1>Hello, Enzyme!</h1>
    </div>)
    expect(wrapper.find('h1').html()).toMatch(/Hello, Enzyme/)
  })

  it('renders snapshots, too', () => {
    const wrapper = shallow(<div>
      <h1>Hello, Enzyme!</h1>
    </div>)
    expect(wrapper).toMatchSnapshot()
  })
})