import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id='page-body'>
            <Route path='/' component={Home} exact />
            <Route path='/About' component={About} />
            <Route path='/Article' component={Article} />
            <Route path='/Articles-List' component={ArticlesList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;