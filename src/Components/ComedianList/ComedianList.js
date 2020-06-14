import React from 'react';
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
                {comedian.firstname}
                {comedian.lastname}
                {comedian.phone}
                {comedian.email}
                <button><Link to={`/comedianDetail`} className='editButton' aria-label='edit button'>Edit</Link></button>
            </li>
            );
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