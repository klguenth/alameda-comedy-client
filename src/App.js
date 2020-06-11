import React from 'react';
import Nav from './Components/Nav/Nav.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import ShowList from './Components/ShowList/ShowList.js';
import AddShow from './Components/AddShow/AddShow.js';
import EditShow from './Components/EditShow/EditShow.js';
import AddComedian from './Components/AddComedian/AddComedian.js';
import EditComedian from './Components/EditComedian/EditComedian.js';
import ComedianList from './Components/ComedianList/ComedianList.js';
import ApiContext from './ApiContext';
import config from './config.js';
import { Route } from 'react-router';
import './App.css';


export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true,
      shows: []
    };
  }

  //performs initial fetch of sightings
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

  renderRoutes() {
    return (
      <>
        <Route exact path='/' component={LandingPage} />
        <Route path='/showList' component={ShowList} shows={this.state.shows} />
        <Route path='/addShow' component={AddShow} />
        <Route path='/editShow' component={EditShow} />
        <Route path='/addComedian' component={AddComedian} />
        <Route path='/editComedian' component={EditComedian} />
        <Route path='/comedianList' component={ComedianList} />
      </>
    );
  }
  
  render() {
    const value = {
      shows: this.state.shows,
    }
    return (
      <ApiContext.Provider value={value}>
        <Nav loggedIn={this.state.loggedIn}/>
        <main className='app'>
          {this.renderRoutes()}
        </main>
      </ApiContext.Provider>
    );
  }
}