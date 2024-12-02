import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./icons";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
  }
  getResult = () => {
    if (
      this.props.user === "Computer" &&
      this.props.result !== "Tie" &&
      this.props.result !== ""
    ) {
      this.result = this.props.result === "Win" ? "Lose" : "Win";
    } else {
      this.result = this.props.result;
    }
  };

  render() {
    this.getResult();
    return (
      <div>
        <div className="box">
          <h1>{this.props.user}</h1>
          <FontAwesomeIcon
            icon={this.props.item && this.props.item.icons}
            size="4x"
          />
          <h2>{this.result}</h2>
        </div>
      </div>
    );
  }
}
