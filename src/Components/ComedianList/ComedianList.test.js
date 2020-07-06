import React from 'react';
import ReactDOM from 'react-dom';
import ComedianList from './ComedianList.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><ComedianList /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});