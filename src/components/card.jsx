import { Component } from "react";
import homeImage from "../../public/img.jpeg";

class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={homeImage} alt="Card Image" width="250" height="250" />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
