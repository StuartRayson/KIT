import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage.jsx';

const mockArticles = [
  {
    id: 0,
    title: 'title1',
    body: 'body1'
  },
  {
    id: 1,
    title: 'title2',
    body: 'body2'
  }
];

jest.mock('../../../shared/services/contentApiSrvc.js', () => ({
  getArticles: jest.fn(() => ({
    then: (cb) => {
      cb(mockArticles);
      return {
        catch: jest.fn()
      };
    }
  }))
}));

describe('<HomePage />', () => {
  it('renders without crashing', () => {
    shallow(<HomePage />);
  });

  it('should render and match snapshot with basic config', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper).toMatchSnapshot();
  });
});
