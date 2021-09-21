import React from 'react';
import {Switch, Route, BrowserRouter as Router, NavLink} from "react-router-dom";
import './App.css';
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";


function App() {
  return (
    <div className="App">

      <Router>
      <Switch>
        <Route path="/MovieDetail/:id">
          <MovieDetail />
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
        
      </Switch>
    </Router>
    </div>
  );
}

export default App;
