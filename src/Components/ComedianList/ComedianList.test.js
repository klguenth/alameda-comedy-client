import React from 'react';
import ReactDOM from 'react-dom';
import ComedianList from './ComedianList.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComedianList />, div);
  ReactDOM.unmountComponentAtNode(div);
});