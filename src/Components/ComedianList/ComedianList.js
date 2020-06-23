import React from 'react';
import Nav from '../Nav/Nav.js';
import { Link } from 'react-router-dom';
import config from '../../config.js';
import './ComedianList.css';

export default class ComedianList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comedians: [],
        }
    }

//performs initial fetch of comedians
  componentDidMount() {
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/comedian/`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong.');
        }
        return res;

      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          comedians: data,
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
        let comedian = this.state.comedians.map((comedian,index) => 
            <li key={index}>
                {comedian.first_name}
                {' '}
                {comedian.last_name}<br />
                {comedian.phone}<br />
                {comedian.email}<br />
                <button><Link to={`/comedianDetail/${comedian.id}`} className='detailButton' aria-label='detail button'>Details</Link></button>
                <button><Link to={`/editComedian/${comedian.id}`} className='editButton' aria-label='edit button'>Edit</Link></button>
            </li>
            );
            return (
                <div className='comedianListMain'>
                  <Nav />
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