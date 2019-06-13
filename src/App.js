import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Article from './article';
import gameofthrones1 from './articles/gameofthrones1';
import cadenceofhyruleanalassment from './articles/cadenceofhyruleanalassment';

import './App.css';

import Nav from './nav';
import Newsfeed from './newsfeed';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav></Nav>
        <header className="App-header">
        <Route exact path ="/" component={Newsfeed}/>
        
        <Route exact path="/article/Games-of-Thrones-reveals-why-Drogon-really-burned-the-throne" component={gameofthrones1} />
        <Route exact path="/article/cadence-of-hyrule-analassment" component={cadenceofhyruleanalassment} />
        
        </header>
        <p>GamerGanda</p>
      </div>
    </Router>
  );
}

export default App;
