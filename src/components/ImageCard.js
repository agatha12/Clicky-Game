import React from "react";
import '../index.css'


class ImageCard extends React.Component {

  state = {
    selected: false
  };


  render() {
    return (

      <button value={this.props.id} onClick={() => this.props.userChoice(this.props.id)} className="hvr-grow">
        <br></br>

        <img className="cardimg" src={this.props.image} alt="character"></img>

      </button>

    );
  }
}

export default ImageCard;

