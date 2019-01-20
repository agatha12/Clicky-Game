import React from "react";
import '../index.css'

const styles = {
  imgStyle: {
    width: "30px",
    height: "30px"
  },
  footerStyle: {
    width: "100%",
    backgroundColor: "navy",
    top: "-1000",
    color: "white",
    height: "100px",
    fontSize: "30px"
  }
}



class Footer extends React.Component {

  render() {
    return (

      <footer style={styles.footerStyle}>
        <br></br>
        Clicky Game <img style={styles.imgStyle} alt="react" src="../images/react-logo.png" ></img>
      </footer>

    );
  }
}

export default Footer;