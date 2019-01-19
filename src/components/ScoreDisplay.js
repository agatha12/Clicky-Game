import React from "react";


function ScoreDisplay(props) {
  return (
    <li className="Score">
   Score: {props.score} | Best Score: {props.best_score}
    
    </li>
  );
}

export default ScoreDisplay;