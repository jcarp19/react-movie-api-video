import React from 'react';
import {Switch, Route, BrowserRouter as Router, NavLink, Link} from "react-router-dom";
import './App.css';
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { Watchlist } from './components/Watchlist';
import Logo from "./movie_nite.jpg"
import { WatchlistcontextProvider } from './components/context/WatchlistContext';
import SingleMovieInfo from './components/SingleMovieInfo';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <Link to="/">
          <div className="logo-box">
              <img src={Logo} alt="logo" className="logo" />
          </div>
        </Link>
      <nav>
        <ul>
          <li><NavLink className="nav-link" exact to="/"><i className="fas fa-search"></i> Search</NavLink></li>
          <li><NavLink className="nav-link" exact to="/watchlist"><i className="fas fa-film"></i> Watchlist</NavLink></li>
        </ul>
      </nav>
      </header>
      <Switch>
        
        <Route path="/watchlist/">
          <WatchlistcontextProvider>
            <Watchlist  />
          </WatchlistcontextProvider>
        </Route>
      
        <Route exact path="/:id">
            <SingleMovieInfo />
        </Route>

        <Route exact path="/">
          <MovieList />
        </Route>
        
      </Switch>
    </Router>
    </div>
  );
}

export default App;
