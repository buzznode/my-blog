import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id='page-body'>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/about' component={About} />
              <Route path='/article/:name' component={Article} />
              <Route path='/articles-list' component={Articles} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;