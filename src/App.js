import React from 'react';
import Nav from './Components/Nav/Nav.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import ShowList from './Components/ShowList/ShowList.js';
import AddShow from './Components/AddShow/AddShow.js';
import EditShow from './Components/EditShow/EditShow.js';
import AddComedian from './Components/AddComedian/AddComedian.js';
import EditComedian from './Components/EditComedian/EditComedian.js';
import ComedianList from './Components/ComedianList/ComedianList.js';
import ComedianDetail from './Components/ComedianDetail/ComedianDetail.js';
import ApiContext from './ApiContext';
import { findComedian, findShow } from './helpers.js';
import config from './config.js';
import { Route } from 'react-router';
import './App.css';


export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true,
      shows: [],
      comedians: [],
      handleDeleteShow: this.handleDeleteShow.bind(this),
      handleEditShow: this.handleEditShow.bind(this),
      handleDeleteComedian: this.handleDeleteComedian.bind(this),
      handleEditComedian: this.handleEditComedian.bind(this)
    };
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

  renderRoutes() {
    return (
      <>
        <Route exact path='/' component={LandingPage} />
        <Route path='/showList' component={ShowList} shows={this.state.shows} />
        <Route path='/addShow' component={AddShow} />
        <Route path='/editShow/:id' render={(props) => <EditShow {...props} />} />
        <Route path='/addComedian' component={AddComedian} />
        <Route path='/editComedian/:id' render={(props) => <EditComedian {...props} />} />
        <Route path='/comedianList' component={ComedianList} comedians={this.state.comedians} />
        <Route path='/comedianDetail/:id' render={(props) => <ComedianDetail {...props} />} />
      </>
    );
  }

  //sets state for comedian edits
  handleEditComedian = (comedian) => {
    const index = findComedian(this.state.comedians, comedian.id);
    const comedians = [...this.state.comedians];
    this.setState ({
      comedians: comedians.splice(index, 1, comedian)
    })
  }

//sets state for comedian delete
  handleDeleteComedian = (comedian) => {
    const index = findComedian(this.state.comedians, comedian);
    const comedians = [...this.state.comedians];
    this.setState ({
      comedians: comedians.splice(index, 1)
    })
  }

//sets state for show edits
  handleEditShow = (show) => {
    const index = findShow(this.state.shows, show.id);
    const shows = [...this.state.shows];
    console.log('shows', shows);
    shows[index] = show
    this.setState ({
      shows: shows
    })
    console.log('after setState', this.state.shows)
  }
  
//sets state for show delete
  handleDeleteShow = (show) => {
    const index = findShow(this.state.shows, show);
    const shows = this.state.shows;
    this.setState ({
      shows: shows.splice(index, 1)
    })
  }
  
  render() {
    const value = {
      shows: this.state.shows,
      comedians: this.state.comedians,
      deleteComedian: this.handleDeleteComedian,
      editComedian: this.handleEditComedian,
      deleteShow: this.handleDeleteShow,
      editShow: this.handleEditShow
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