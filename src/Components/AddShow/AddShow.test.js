import React from 'react';
import ReactDOM from 'react-dom';
import AddShow from './AddShow.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const show = {
    title: 'Showcase',
    show_date: '07/11/2020',
    show_time: '17:00',
    comics: 5,
    stage: 'patio',
    details: 'test details',
    notes: 'test notes',
    price_general: 15.00,
    price_premium: 20.00,
    capacity: 150,
    comps: 10,
    comic_one: 'comic one',
    comic_two: 'comic two',
    comic_three: 'comic three',
    comic_four: 'comic four',
    comic_five: 'comic five',
    comic_six: 'comic six'
  };
  ReactDOM.render(<AddShow show={show}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});