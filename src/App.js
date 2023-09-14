import React from "react";
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import './css/App.css';
import AppFooter from './components/shared/footer';
import FeaturedMovies from './components/home/featured';
import logo from './assets/Logo.svg'
import imdb from './assets/imdb.svg';
import menu from './assets/Menu.svg'
import tomato from './assets/tomato.svg';
import playBTN from './assets/Play.svg'

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <button className="hero-logo"><img src={logo}/></button>
          <div className="hero-search">
            <input 
              type="text"
              placeholder="What do you want to watch"
              className="search-box"
              style={{ background: 'transparent', color:'#fff', width: '80%', outline: 'none' }}
            />
            <button>
            <FaSearch className="search-icon" />
            </button>
          </div>
          <button style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '10%'}}><p style={{color: '#fff'}}>SignIn</p><img src={menu} /></button>
        </div>
        <div style={{
          width: '35%',
          marginTop: '80px',
          justifyContent: 'space-around'
        }}>
          <h1 style={{fontSize: '55px', fontWeight: '500', color: '#fff', textAlign: 'left', lineHeight: '1.1'}}>John Wick 3: Parabellum</h1>
          <div style={{
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              width: '50%',
              justifyContent: 'space-between',
            }}>
            <div style={{
              color: '#fff',
              display: 'flex',
              alignItems: 'center'
            }}><img src={imdb} style={{width: 40, height: 40}} /><p style={{marginLeft: 8}}>86.0/100</p></div>
            <div style={{
              color: '#fff',
              display: 'flex',
              alignItems: 'center'
            }}><img src={tomato} style={{width: 20, height: 20}} /><p  style={{marginLeft: 8}}>79%</p></div>
          </div>
          <p style={{
            color: '#fff',
            textAlign: 'left'
          }}>Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.</p>
          <button style={{
            background: '#BE123C',
            width: '45%',
            height: '36px',
            display: 'flex',
            borderRadius: '6px',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px'
          }}>
            <img src={playBTN} style={{height: '20px', width: '20px'}}  />
            <p style={{color: "#fff", fontWeight: '500'}}>WATCH TRAILER</p>
          </button>
        </div>
      </div>
      <FeaturedMovies />
      <AppFooter />
    </div>
  );
}

export default App;
