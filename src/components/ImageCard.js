import React from "react";
import '../index.css'





class ImageCard extends React.Component {

  state = {
    selected: false
  };

  stateChange = () => {
    if(!this.state.selected){
      this.setState({ selected: true })
      // scoreIncrement()
      console.log(this.state.selected)
    }
    else{
      this.setState({ selected: false })
      console.log(this.state.selected)
    }
  }


  render() {
    return (

      <button value={this.props.id} onClick={() => this.props.userChoice(this.props.id)} className="card">
        <br></br>

        <img className="cardimg" src={this.props.image} alt="character"></img>


      </button>







    );
  }
}

export default ImageCard;

