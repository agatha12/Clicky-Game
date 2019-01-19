import React from "react";
import '../index.css'

const styles ={
  imgStyle: {
    width: "100%",
    height: "300px",
    margin: "0 auto"
  }
}


class Title extends React.Component {

  render() {
    return (
     
        <section id="titleimage">
        <img style={styles.imgStyle} src="../images/marvel.jpg" alt="marvel"></img>
            <div id="title">Clicky Game</div>
            <p>Click on an image to earn points, but dont click on any more than once </p>
        </section>
      
    );
  }
}

export default Title;