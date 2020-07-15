import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar.js';
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'; //leave way it is
import Home from './components/Home.js'
import About from './components/About.js'
import Books from './components/Books.js'


function App() {
  return (
    <div classname='app'>
      <NavigationBar/>
        <Switch>
          <Route exact path='/Profile' component={About} />
          <Route exact path='/Books' component={Books} />
          <Route exact path='/Personal-Website' component={Home} />
        </Switch>
    </div>
  );
}




export default App;
