import React from 'react';
import ReactDOM from 'react-dom';
import AddComedian from './AddComedian.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddComedian />, div);
  ReactDOM.unmountComponentAtNode(div);
});