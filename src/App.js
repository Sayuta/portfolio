import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Portfolio from './pages/Portfolio';
import CV from './pages/CV';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/cv" exact component={ CV }/>
          <Route path="/portfolio" component={ Portfolio }/>
          <Route path="*" exact component={ Error404 }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
