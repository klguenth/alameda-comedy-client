import React from 'react';
import Nav from './Components/Nav/Nav.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import ShowList from './Components/ShowList/ShowList.js';
import ShowDetail from './Components/ShowDetail/ShowDetail.js';
import AddShow from './Components/AddShow/AddShow.js';
import EditShow from './Components/EditShow/EditShow.js';
import AddComedian from './Components/AddComedian/AddComedian.js';
import EditComedian from './Components/EditComedian/EditComedian.js';
import ComedianList from './Components/ComedianList/ComedianList.js';
import ComedianDetail from './Components/ComedianDetail/ComedianDetail.js';
import ApiContext from './ApiContext';
import { findComedian, findShow } from './helpers.js';
import config from './config.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TokenService from './token-service.js';
import './App.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      shows: [],
      comedians: [],
      handleDeleteShow: this.handleDeleteShow.bind(this),
      handleEditShow: this.handleEditShow.bind(this),
      handleDeleteComedian: this.handleDeleteComedian.bind(this),
      handleEditComedian: this.handleEditComedian.bind(this),
      setLoggedIn: this.setLoggedIn.bind(this),
      handleLogout: this.handleLogout.bind(this)
    };
  }

  //performs initial fetch of shows
  componentDidMount() {
    if (this.state.isLoggedIn) {
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
  }



  //sets state for comedian edits
  handleEditComedian = (comedian) => {
    console.log('Editing:', comedian)
    const newComedians = this.state.comedians.map((c) => {
      if (+c.id === +comedian.id) {
        return {
          ...c,
          ...comedian,
        }
      }
      return c;
    })
    this.setState({
      comedians: newComedians
    }, () => {
      console.log('after setState', this.state.comedians)
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
    console.log('Editing:', show)
    const newShows = this.state.shows.map((s) => {
      if (+s.id === +show.id) {
        return {
          ...s,
          ...show,
        }
      }
      return s;
    })
    this.setState({
      shows: newShows
    }, () => {
      console.log('after setState', this.state.shows)
    })
  }
  
//sets state for show delete
  handleDeleteShow = (show) => {
    const index = findShow(this.state.shows, show);
    const shows = this.state.shows;
    this.setState ({
      shows: shows.splice(index, 1)
    })
    console.log('shows after setstate', this.state.shows);
  }

  setLoggedIn = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogout = () => {
    console.log('handleLogout called');
    TokenService.clearAuthToken()
    this.setState({isLoggedIn: false})
}

  renderRoutes() {
    return (
      <>
        <Route exact path='/' render={(props) => <LandingPage setLoggedIn={this.setLoggedIn} {...props} />} />
        <Route path='/showList' component={ShowList} shows={this.state.shows} />
        <Route path='/showDetail/:id' render={(props) => <ShowDetail {...props} />} />
        <Route path='/addShow' component={AddShow} />
        <Route path='/editShow/:id' render={(props) => <EditShow {...props} />} />
        <Route path='/addComedian' component={AddComedian} />
        <Route path='/editComedian/:id' render={(props) => <EditComedian {...props} />} />
        <Route path='/comedianList' component={ComedianList} comedians={this.state.comedians} />
        <Route path='/comedianDetail/:id' render={(props) => <ComedianDetail {...props} />} />
      </>
    );
  }
  
  render() {
    const value = {
      shows: this.state.shows,
      comedians: this.state.comedians,
      isLoggedIn: this.state.isLoggedIn,
      deleteComedian: this.handleDeleteComedian,
      editComedian: this.handleEditComedian,
      deleteShow: this.handleDeleteShow,
      editShow: this.handleEditShow,
      handleLogout: this.handleLogout
    }
    return (
      <ApiContext.Provider value={value}>
        <Nav isLoggedIn={this.state.isLoggedIn}/>
        <main className='app'>
          {this.renderRoutes()}
        </main>
      </ApiContext.Provider>
    );
  }
}