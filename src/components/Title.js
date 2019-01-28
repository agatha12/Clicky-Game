import React from "react";
import '../index.css'




class Title extends React.Component {

  render() {
    return (
     
        <section id="titleimage">
        <img id="marvelimg" src="../images/marvel.jpg" alt="marvel"></img>
            <div id="title">Clicky Game</div>
            <p>Click on an image to earn points, but dont click on any more than once </p>
        </section>
      
    );
  }
}

export default Title;