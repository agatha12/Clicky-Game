import React from "react";
// import blackcat from "./images/blackcat.jpg";
// import blackpanther from "./images/blackpanther.jpg";
// import blade from "./images/blade.jpg";
// import captainamerica from "./images/captainamerica.jpg";
// import deadpool from "./images/deadpool.jpg";
// import hulk from "./images/hulk.jpg";
// import ironman from "./images/ironman.jpg";
// import spiderman from "./images/spiderman.jpg";
// import storm from "./images/storm.jpg";
// import thor from "./images/thor.jpg";
// import venom from "./images/venom.jpg";
// import wolverine from "./images/wolverine.jpg";
import ImageCard from "./components/ImageCard"



function Character() {

    const charactersArr = [ '../images/blackcat.jpg', "../images/blackpanther.jpg", "../images/blade.jpg", "../images/captainamerica.jpg", "../images/deadpool.jpg", "../images/hulk.jpg", "../images/ironman.jpg", "../images/spiderman.jpg", "../images/storm.jpg", "../images/thor.jpg", "../images/venom.jpg", "../images/wolverine.jpg"]

    let characters = charactersArr.map(character =>
      <ImageCard
      image={character}
    />
    )
  
    return (
      <div> <br></br>  {characters}</div>
      
      
    );
  }
  


export default Character