import React from 'react';
import ReactDOM from 'react-dom';
import ShowList from './ShowList.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowList />, div);
  ReactDOM.unmountComponentAtNode(div);
});