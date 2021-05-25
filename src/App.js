import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';

import About from "./Components/About/About";
import Home from "./Components/Home/Home";


import o from './images/1.png'
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";




function App() {

  return (
    <Router>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <Link to="/"> <a class="nav-link" aria-current="page" href="/">Home</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/shop">  <a class="nav-link" aria-current="page" href="/shop">Shop</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/contact">  <a class="nav-link" aria-current="page" href="/contact">Contact</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/blog">  <a class="nav-link" aria-current="page" href="/blog">Blog</a></Link>
              </li>
              <li class="nav-item">
              <Avatar alt="Cindy Baker" src={o} />
              </li>

            </ul>

          </div>
        </div>
      </nav>

      <div>

        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
