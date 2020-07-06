import React from 'react';
import ReactDOM from 'react-dom';
import ShowList from './ShowList.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><ShowList /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});