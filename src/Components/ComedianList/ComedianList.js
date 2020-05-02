import React from 'react';
import { Link } from 'react-router-dom';
import './ComedianList.css';

export default class ComedianList extends React.Component {
    render() {
        let comedian;
            comedian = (
                <li className='comedianListItem'>
                    <div className='comedianFirstName'>First Name: </div>
                    <div className='comedianLastName'>Last Name: </div>
                    <div className='comedianPhone'>Phone: </div>
                    <div className='comedianEmail'>Email: </div>
                    <div className='comedianBio'>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <p className='comedianNotes'>Notes: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button><Link to={`/comedianDetail`} className='editButton' aria-label='edit button'>Edit</Link></button>
                    <button className='deleteButton' type='button' aria-label='delete button'>Delete</button>
                </li>
            )
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