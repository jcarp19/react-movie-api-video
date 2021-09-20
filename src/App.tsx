import React from 'react';
import './App.css';
import MovieList from "./components/MovieList"
import {Switch, Route, BrowserRouter as Router, NavLink} from "react-router-dom";


function App() {
  return (
    <div className="App">

          <MovieList />
          

    </div>
  );
}

export default App;
