import { Component } from "react";
import homeImage from "../../public/img.jpeg";

class Card extends Component {
  // componentWillUnmount() {
  //   console.log("Card component will unmount");
  // }
  render() {
    const { title, description } = this.props;
    console.log(this.props);
    return (
      <div>
        <img src={homeImage} alt="Card Image" width="250" height="250" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default Card;
