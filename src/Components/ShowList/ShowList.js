import React from 'react';
import Nav from '../Nav/Nav.js';
import config from '../../config.js';
import { Link } from 'react-router-dom';
import './ShowList.css';

export default class ShowList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
        }
    }
    
//performs initial fetch of shows
  componentDidMount() {
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/show/`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong.');
        }
        return res;

      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          shows: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

    render() {
        let shows = this.state.shows.map((show, index) => 
            <li key={index}>
              {show.title}<br />
              {show.show_date.slice(0, 10)}<br />
              {show.show_time}<br />
              <button><Link to={`/editShow/${show.id}`} className='editButton' aria-label='edit button'>Edit</Link></button>
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