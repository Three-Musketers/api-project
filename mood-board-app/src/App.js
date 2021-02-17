import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Advice from './components/Advice';
import Jokes from './components/Jokes';
import axios from 'axios'

function App(props) {
  return (
    <div className="App">

      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/Quotes" render={(props) => <Quotes {...props} />} />
        <Route exact path="/Advice" render={(props) => <Advice {...props} />} />
        <Route exact path="/Jokes" render={(props) => <Jokes {...props} />} />

      </Switch>
    </div>
  );
}

export default App;
