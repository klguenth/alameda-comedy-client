import React from 'react';
import ReactDOM from 'react-dom';
import ComedianDetail from './ComedianDetail.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComedianDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});