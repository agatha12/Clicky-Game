import React from "react";
import '../index.css'

function Header (props) {


    return (
     
        <nav>
        <ul>
            <li>Clicky Game</li>
            <li>Click an image to begin!</li>
            <li className="Score">
   Score: {props.score} | Best Score: {props.best_score}
    
    </li>
        </ul>
        
        
        </nav>
       
      
    );
  
}

export default Header;