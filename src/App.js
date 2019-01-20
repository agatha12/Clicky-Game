import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import characters from "./characters";
import ImageCard from "./components/ImageCard"


class App extends Component {
  state = {
    score: 0,
    best_score: 0,
    characters: characters,
    unchoosenchars: characters
  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  userChoice = chosenid => {
    const answer = this.state.unchoosenchars.find(element => element.id === chosenid);
    if( answer === undefined){
      console.log(chosenid)
      if(this.state.score > this.state.best_score){
        this.setState({
          score: 0,
          best_score: this.state.score,
          unchoosenchars:characters
        })
      }
      else{
        this.setState({
          score: 0,
          unchoosenchars:characters
        })
      }
      
    }
    else{
      const newUnchosen = this.state.unchoosenchars.filter(element => element.id !== chosenid)

      
      this.setState({
        score: this.state.score+1,
        unchoosenchars: newUnchosen, 
        characters: this.shuffleArray(this.state.characters)
        
      })
    }
  }

  

 

  
  render() {
    return (
      <div>
        <Header 
        score= {this.state.score}
        best_score= {this.state.best_score} />
      <Title />
      <div id="characterdiv">
    
    {this.state.characters.map(character => (
      <ImageCard
      key={character.id}
      id={character.id}
      image={character.image}
      userChoice={this.userChoice}
    />  ))}    
      </div>
      <br></br>
      <Footer />
      </div>
      

    );
  }
}

export default App;
