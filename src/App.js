import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import './App.css';
import Home from './pages/Home/Home';
import Navbar from './utility/NavBar/Navbar'

class App extends Component{

  render() {
    return(
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
      </Router>
    )
  }
}

export default App;