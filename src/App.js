// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import Contacts from './Contacts.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import RestaurantList from './RestaurantList.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Food Delivery App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/about" component={AboutUs} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/" exact component={Home} />
            <Route path="/restaurant" component={RestaurantList} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2024 Food Delivery App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
