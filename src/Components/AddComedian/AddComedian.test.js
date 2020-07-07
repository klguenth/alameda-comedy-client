import React from 'react';
import ReactDOM from 'react-dom';
import AddComedian from './AddComedian.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let comedian = {
    id: 1,
    first_name: 'John',
    last_name: 'Smith',
    phone: 123-456-7890,
    email: 'johnsmith@gmail.com',
    bio: 'Test bio',
    notes: 'Test notes',
    category: '',
    age: 25,
    race: 'white',
    passed: '',
    clean: '',
    ssn: '123-45-6789',
    street: '123 Main Street',
    city: 'Alameda',
    st: 'CA',
    zip: '12345',
    website: 'www.johnsmithcomedy.com',
    facebook: 'johnsmithcomedy',
    twitter: 'johnsmithcomedy',
    instagram: 'johnsmithcomedy'
  }
  ReactDOM.render(<AddComedian comedian={comedian} />, div);
  ReactDOM.unmountComponentAtNode(div);
});