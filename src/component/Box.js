import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./icons";

const Box = (props) => {
  // console.log("props는",props)
  let result;
  if (
    props.user === "Computer" &&
    props.result !== "Tie" &&
    props.result !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }
  return (
    <div>
      <div className="box">
        <h1>{props.user}</h1>
        <FontAwesomeIcon icon={props.item && icons.rock && props.item.icons} size="4x"/>
        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default Box;
