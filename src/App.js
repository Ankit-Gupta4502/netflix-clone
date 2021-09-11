import React, { useState } from 'react'
import TrendingSection from './components/TrendingSection';
import Banner from './components/Banner';
import Navbar from "./components/Navbar";
import TopRated from "./components/TopRatedMovies";
import Action from './components/ActionMovies';
import ComedyMovies from './components/ComedyMovies';
function App() {
  return (
    <div className='container' style={{backgroundColor:'#000'}}>
    <Navbar/>
    <Banner/>
    <TrendingSection />
    <TopRated/>
    <Action/>
    <ComedyMovies/>
    </div>
  );
}

export default App;
