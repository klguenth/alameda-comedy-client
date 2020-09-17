import React from 'react';
import Nav from '../Nav/Nav.js';
import config from '../../config.js';
import { Link, withRouter } from 'react-router-dom';
import './ShowList.css';
import ApiContext from '../../ApiContext.js';
import TokenService from '../../token-service.js';

class ShowList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shows: []
    }
  }

  static defaultProps = {
    editShow: () => {},
    match: {
        params: {}
    },
  }
  static contextType = ApiContext;
    
//performs initial fetch of shows
  componentDidMount() {
    fetch(`${config.REACT_APP_API_ENDPOINT}/api/show/`, {
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
          shows: data,
          error: null
        });
        this.context.shows = data;
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
      let shows = this.state.shows.map((show, index) => 
          <li key={index} className="showItem">
            <h3 className="showHeader">Show Title: </h3>{show.title}<br />
            <h3 className="showHeader">Show Date: </h3>{show.show_date.slice(0, 10)}<br />
            <h3 className="showHeader">Show Time: </h3>{show.show_time}<br />
            <div className="showListControls">
              <button><Link to={`/showDetail/${show.id}`} className='detailButton' aria-label='detail button'>Details</Link></button>
              <button><Link to={`/editShow/${show.id}`} className='editButton' aria-label='edit button'>Edit</Link></button>
            </div>
          </li>
          );
        return (
          <ApiContext.Consumer>
            {defaultValue => (
              <div>
                <Nav />
                <main role="main" className="showListMain">
                  <header role="banner">
                    <h1>Shows</h1>
                  </header>
                  <button className="addShowButton"><Link to='/addShow'>Add Show</Link></button>
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

export default withRouter(ShowList);