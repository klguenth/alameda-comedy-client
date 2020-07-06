import React from 'react';
import ReactDOM from 'react-dom';
import ShowDetail from './ShowDetail.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});