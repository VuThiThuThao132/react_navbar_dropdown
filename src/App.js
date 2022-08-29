import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import Consulting from './components/pages/Consulting';
import ContactUs from './components/pages/ContactUs';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/consulting' exact component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
