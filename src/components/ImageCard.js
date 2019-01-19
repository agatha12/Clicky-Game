import React from "react";
import '../index.css'



// By extending the React.Component class, Counter inherits functionality from it


class ImageCard extends React.Component {

  state = {
    selected: false
  };

  

  render() {
    return (

      <button class="card">
        <br></br>
          
          <img  className="cardimg" src={this.props.image} alt="character"></img>
          
         
              </button>
              






              );
            }
          }
          
export default ImageCard;

