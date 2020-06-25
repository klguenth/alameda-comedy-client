import React from 'react';
import Nav from '../Nav/Nav.js';
import config from '../../config.js';
import { Link } from 'react-router-dom';
import './ShowList.css';
import ApiContext from '../../ApiContext.js';

export default class ShowList extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         shows: [],
    //     }
    // }

  static defaultProps = {
    editShow: () => {},
    match: {
        params: {}
    },
  }
  static contextType = ApiContext;
    
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
  findById(id) {
    for (let i = 0; i<this.context.shows.length; i++) {
        if (parseInt(id) === this.context.shows[i].id) {
            return i;
        }
    }
}

    render() {
      let shows = this.context.shows.map((show, index) => 
          <li key={index}>
            {show.title}<br />
            {show.show_date.slice(0, 10)}<br />
            {show.show_time}<br />
            <button><Link to={`/editShow/${show.id}`} className='editButton' aria-label='edit button'>Edit</Link></button>
          </li>
          );
          console.log(this.context.shows, 'this.context.shows');
        return (
          <ApiContext.Consumer>
            {defaultValue => (
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
            )}
          </ApiContext.Consumer>
        );
    }
}