import React from 'react';
import ReactDOM from 'react-dom';
import AddShow from './AddShow.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddShow />, div);
  ReactDOM.unmountComponentAtNode(div);
});