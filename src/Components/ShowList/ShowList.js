import React from 'react';
import Nav from '../Nav/Nav.js';
import { Link } from 'react-router-dom';
import './ShowList.css';

export default class ShowList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [
                {
                    day: 'Tuesday',
                    date: '5/20/2020',
                    time: '7:00 PM',
                    title: 'Open Mic'
                },
                {
                    day: 'Tuesday',
                    date: '5/20/2020',
                    time: '9:00 PM',
                    title: 'Auditions'
                },                {
                    day: 'Thursday',
                    date: '5/22/2020',
                    time: '7:00 PM',
                    title: 'Showcase'
                },
            ]
        }
    }
    render() {
        let shows = this.state.shows.map((show, index) => 
            <li key={index}>
                {show.day}
                {show.date}
                {show.time}
                {show.title}
                <button><Link to={`/editShow`} className='editButton' aria-label='edit button'>Edit</Link></button>
                <button className='deleteButton' type='button' aria-label='delete button'>Delete</button>
            </li>
            );
        return (
            <div>
                <Nav />
                <main role="main" className="listMain">
                    <header role="banner">
                        <h1>Shows</h1>
                    </header>
                    <button><Link to='/addShow'>Add Show</Link></button>
                    <ul>
                        {shows}
                    </ul>
                </main>
            </div>
        );
    }
}