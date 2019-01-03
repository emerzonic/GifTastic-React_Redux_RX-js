import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Gifs from './components/Gifs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
         <Header/>
         <Gifs/>
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
