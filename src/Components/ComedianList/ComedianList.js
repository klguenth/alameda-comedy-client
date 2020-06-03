import React from 'react';
import { Link } from 'react-router-dom';
import './ComedianList.css';

export default class ComedianList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comedians: [
                {
                    firstname: 'John',
                    lastname: 'Smith',
                    phone: '123-456-7890',
                    email: 'johnsmith@email.com'
                },
                {
                    firstname: 'John',
                    lastname: 'Doe',
                    phone: '987-654-3210',
                    email: 'johndoe@email.com'
                },                {
                    firstname: 'Jane',
                    lastname: 'Doe',
                    phone: '123-987-4567',
                    email: 'janedoe@email.com'
                },
            ]
        }
    }
    render() {
        let comedian = this.state.comedians.map((comedian => 
            <li>
                {comedian.firstname}
                {comedian.lastname}
                {comedian.phone}
                {comedian.email}
                <button><Link to={`/comedianDetail`} className='editButton' aria-label='edit button'>Edit</Link></button>
                <button className='deleteButton' type='button' aria-label='delete button'>Delete</button>
            </li>
            ))
            return (
                <div className='comedianListMain'>
                    <header className='listHeader'>
                        <h1>Comedians</h1>
                    </header>
                    <button><Link to='/addComedian'>Add Comedian</Link></button>
                    <ul className='listContainer'>
                        {comedian}
                    </ul>
                </div>
            );
    }
}