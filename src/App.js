import './App.css';
import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router';
// import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import FavList from './components/FavList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavList />} />
        {/* <Route path="/list" element={<MovieDetails/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
