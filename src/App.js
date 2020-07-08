import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'
import About from './components/About.js'
import Hobbies from './components/Hobbies.js'
import Books from './components/Books.js'


function App() {
  return (
    <div classname='app'>
      <NavigationBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Profile' component={About} />
        <Route path='/Interests' component={Hobbies} />
        <Route path='/Books' component={Books} />

      </Switch>
    </div>
  );
}




export default App;
