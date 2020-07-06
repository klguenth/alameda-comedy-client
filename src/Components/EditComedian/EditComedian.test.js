import React from 'react';
import ReactDOM from 'react-dom';
import EditComedian from './EditComedian.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditComedian />, div);
  ReactDOM.unmountComponentAtNode(div);
});