import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer'
// import ImageCard from './components/ImageCard'
import Character from "./characters"

class App extends Component {

  
  render() {
    return (
      <div>
        <Header />
      <Title />
      <div id="characterdiv">
      <Character />
      
      </div>
      <br></br>
      <Footer />
      </div>
      

    );
  }
}

export default App;
