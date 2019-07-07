import React from 'react';
import ReactDOM from 'react-dom';

// Jest
import 'jest-dom/extend-expect';

// Enzyme
import { shallow, mount } from 'enzyme';

// React Testing Library
import { render } from 'react-testing-library';

// React Component
import Distance from '../Distance';

// Utility Component
import Graph from '../../utils/Graph';

describe('distance Component', () => {
  const map = new Graph();
  const wrapper = mount(<Distance map={map} />);

  describe('rendering component', () => {
    it('renders component without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Distance map={map} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    // Snapshot can be useful for tracking changes in UI
    it('snapshot', () => {
      const wrapper = shallow(<Distance map={map} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('contains prop', () => {
    it('accepts map prop', () => {
      expect(wrapper.props().map).toEqual(map)
    });
  });

  describe('contains state', () => {
    it('contains start state key', () => {
      const wrapper = shallow(<Distance map={map} />);
      expect(wrapper.state('start')).toContain('');
    });

    it('contains start end key', () => {
      const wrapper = shallow(<Distance map={map} />);
      expect(wrapper.state('end')).toContain('');
    });

    it('contains start route key', () => {
      const wrapper = shallow(<Distance map={map} />);
      expect(wrapper.state('route')).toContain('');
    });
  });

  describe('rendering elements', () => {
    it('renders start input', async () => {
      const { getByPlaceholderText } = render(<Distance map={map} />)
      expect(getByPlaceholderText('Route Start')).toBeTruthy();
    });

    it('renders end input', async () => {
      const { getByPlaceholderText } = render(<Distance map={map} />)
      expect(getByPlaceholderText('Route End')).toBeTruthy();
    });

    it('renders from h4 element', async () => {
      const { getByTestId } = render(<Distance map={map} />)
      expect(getByTestId('from')).toBeTruthy();
    });

    it('renders end h4 element', async () => {
      const { getByTestId } = render(<Distance map={map} />)
      expect(getByTestId('end')).toBeTruthy();
    });

    it('renders shortestRoute h4 element', async () => {
      const { getByTestId } = render(<Distance map={map} />)
      expect(getByTestId('shortestRoute')).toBeTruthy();
    });

    it('renders button', async () => {
      const { getByPlaceholderText } = render(<Distance map={map} />)
      expect(getByPlaceholderText('Route End')).toBeTruthy();
    });
  });

  describe('input value change', () => {
    it('start input value should change on keypress', () => {
      const component = mount(<Distance map={map} />);
      component.find('.startRouteInput').simulate('keydown', { keyCode: 66 });
      expect(component).toMatchSnapshot();
      component.unmount();
    });

    it('end input value should change on keypress', () => {
      const component = mount(<Distance map={map} />);
      component.find('.endRouteInput').simulate('keydown', { keyCode: 72 });
      expect(component).toMatchSnapshot();
      component.unmount();
    });
  });

  describe('h4 text changes on state change', () => {
    it('h4 from element', () => {
      const wrapper = mount(<Distance map={map} />);
      expect(wrapper.find('.from').text()).toEqual('From: ');
      wrapper.setState({ start: 'B' });
      expect(wrapper.find('.from').text()).toEqual('From: B');
      wrapper.unmount();
    });

    it('h4 end element', () => {
      const wrapper = mount(<Distance map={map} />);
      expect(wrapper.find('.end').text()).toEqual('To: ');
      wrapper.setState({ end: 'H' });
      expect(wrapper.find('.end').text()).toEqual('To: H');
      wrapper.unmount();
    });

    it('h4 route element', () => {
      const wrapper = mount(<Distance map={map} />);
      expect(wrapper.find('.shortestRoute').text()).toEqual('Shortest Route: ');
      wrapper.setState({ route: 'BDGH with a distance of 10' });
      expect(wrapper.find('.shortestRoute').text()).toEqual('Shortest Route: BDGH with a distance of 10');
      wrapper.unmount();
    });
  });
});
