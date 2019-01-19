import React from "react";
import ScoreDisplay from "./ScoreDisplay";
import '../index.css'

// By extending the React.Component class, Counter inherits functionality from it
class Header extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    best_score: 0
  };

  // handleIncrement increases this.state.count by 1
  scoreIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  newScore = () => {
    // We always use the setState method to update a component's state
    this.setState({ best_score: this.state.best_score });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
     
        <nav>
        <ul>
            <li>Clicky Game</li>
            <li>Click an image to begin!</li>
        <ScoreDisplay
          score={this.state.score}
          best_score={this.state.best_score}
        />
        </ul>
        
        
        </nav>
       
      
    );
  }
}

export default Header;