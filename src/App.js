import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/pages/Home'
import Products from './component/pages/Products'
import Services from './component/pages/Services'
import SignUp from './component/pages/SignUp'
import About from './component/pages/About'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/About' component={About} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
