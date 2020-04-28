import React from 'react';
import Nav from './Components/Nav/Nav.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import ShowList from './Components/ShowList/ShowList.js';
import AddShow from './Components/AddShow/AddShow.js';
import EditShow from './Components/EditShow/EditShow.js';
import AddComedian from './Components/AddComedian/AddComedian.js';
import EditComedian from './Components/EditComedian/EditComedian.js';
import { Route } from 'react-router';
import './App.css';


export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true
    }
  }

  renderRoutes() {
    return (
      <>
        <Route exact path='/' component={LandingPage} />
        <Route path='/showList' component={ShowList} />
        <Route path='/addShow' component={AddShow} />
        <Route path='/editShow' component={EditShow} />
        <Route path='/addComedian' component={AddComedian} />
        <Route path='/editComedian' component={EditComedian} />
      </>
    );
  }
  
  render() {
    return (
      <>
        <Nav />
        <main className='app'>
          {this.renderRoutes()}
        </main>
      </>
    );
  }
}