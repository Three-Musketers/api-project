import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Advice from './components/Advice';
import Jokes from './components/Jokes';
import MoodHappy from './components/MoodHappy';
import MoodSad from './components/MoodSad';
import MoodAngry from './components/MoodAngry';
import MoodScared from './components/MoodScared';
import axios from 'axios'

function App(props) {
  return (
    <div className="App">

      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/Quotes" render={(props) => <Quotes {...props} />} />
        <Route exact path="/Advice" render={(props) => <Advice {...props} />} />
        <Route exact path="/Jokes" render={(props) => <Jokes {...props} />} />
        <Route exact path="/MoodHappy" render={(props) => <MoodHappy {...props} />} />
        <Route exact path="/MoodSad" render={(props) => <MoodSad {...props} />} />
        <Route exact path="/MoodAngry" render={(props) => <MoodAngry {...props} />} />
        <Route exact path="/MoodScared" render={(props) => <MoodScared {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
