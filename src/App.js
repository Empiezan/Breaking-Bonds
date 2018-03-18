import React, { Component } from 'react';
import './App.css';
import GraderContainer from './containers/GraderContainer';
import Scoreboard from "./components/Scoreboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const App = () => (
  <Router>
    <div>

      <Link to="/">
      <Button>
      Grading
      </Button>
      </Link>

      <Link to="/scoreboard">
      <Button>
      Scoreboard
      </Button>
      </Link>




      <hr />
      <Route exact path="/" component={GraderContainer} />
      <Route path="/scoreboard" component={Scoreboard} />
    </div>
  </Router>
);

export default App;
