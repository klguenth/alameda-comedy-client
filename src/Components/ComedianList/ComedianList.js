import React from 'react';
import Nav from '../Nav/Nav.js';
import { Link } from 'react-router-dom';
import config from '../../config.js';
import './ComedianList.css';
import TokenService from '../../token-service.js';
import ApiContext from '../../ApiContext.js';

export default class ComedianList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comedians: [],
        }
    }

    static contextType = ApiContext;

//performs initial fetch of comedians
  componentDidMount() {
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/comedian/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
    })
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
        this.context.comedians = data;
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

    render() {
        let comedian = this.state.comedians.map((comedian,index) => 
            <li key={index} className="comedianItem">
                {comedian.first_name}
                {' '}
                {comedian.last_name}<br />
                {comedian.phone}<br />
                {comedian.email}<br />
                <button><Link to={`/comedianDetail/${comedian.id}`} className='detailButtonComedian' aria-label='detail button'>Details</Link></button>
                <button><Link to={`/editComedian/${comedian.id}`} className='editButton' aria-label='edit button'>Edit</Link></button>
            </li>
            );
            return (
                <div className='comedianListMain'>
                  <Nav />
                  <header className='listHeader'>
                      <h1>Comedians</h1>
                  </header>
                  <button className="addComedianButton"><Link to='/addComedian'>Add Comedian</Link></button>
                  <ul className='listContainer'>
                      {comedian}
                  </ul>
                </div>
            );
    }
}