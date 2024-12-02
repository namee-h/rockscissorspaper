import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./component/icons";


export default class AppClass extends Component {
  choice = {
    rock: {
      name: "Rock",
      icons: icons.rock,
    },
    scissors: {
      name: "Scissors",
      icons: icons.scissors,
    },
    paper: {
      name: "Paper",
      icons: icons.paper,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      winPoint: 0,
      losePoint: 0,
    };
  }
  replay = () => {
    this.setState({
      userSelect: null,
      computerSelect: null,
      result: "",
      winPoint: 0,
      losePoint: 0,
    });
  };

  play = (userChoice) => {
    const userSelection = this.choice[userChoice];
    const computerSelection = this.randomChoice();
    const resultValue = this.judgment(
      this.choice[userChoice],
      computerSelection
    );
    this.setState((prevState) => ({
      userSelect: userSelection,
      computerSelect: computerSelection,
      result: resultValue,
      winPoint:
        resultValue === "Win" ? prevState.winPoint + 1 : prevState.winPoint,
      losePoint:
        resultValue === "Lose" ? prevState.losePoint + 1 : prevState.losePoint,

    }));
  };

  judgment = (user, computer) => {
    if (user.name === computer.name) return "Tie";
    else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };
  randomChoice = () => {
    let itemArray = Object.keys(this.choice);
    let randomIndex = Math.floor(Math.random() * itemArray.length);
    let randomKey = itemArray[randomIndex];
    return this.choice[randomKey];
  };
  // winIncrease = (userWin) => {
  //   // console.log("이김?",userWin)
  //   // if(userWin==="Win")return this.state.winPoint = this.state.winPoint+1
  //   if (userWin === "Win") {
  //     this.setState((prevState) => ({ winPoint: prevState.winPoint + 1 }));
  //   }
  // };
  // LoseIncrease = (userLose) => {
  //   if (userLose === "Lose")
  //     return (this.state.losePoint = this.state.losePoint + 1);
  // };
  render() {
    return (
      <div className="body">
        <div className={`container ${this.state.result}`}>
          <div className="nav">
            <div>
              <span>{this.state.losePoint}</span> :{" "}
              <span>{this.state.winPoint}</span>
            </div>
            <button onClick={() => this.replay()}>RESET</button>
          </div>
          <div className="main">
            <BoxClass
              user="Computer"
              item={this.state.computerSelect}
              result={this.state.result}
            />
            <span className="line"></span>
            <BoxClass
              user="You"
              item={this.state.userSelect}
              result={this.state.result}
            />
          </div>

          <div className="button-area">
            <button>
              <FontAwesomeIcon
                onClick={() => this.play("scissors")}
                icon={icons.scissors}
                size="3x"
              />
            </button>
            <button>
              <FontAwesomeIcon
                onClick={() => this.play("rock")}
                icon={icons.rock}
                size="3x"
              />
            </button>
            <button>
              <FontAwesomeIcon
                onClick={() => this.play("paper")}
                icon={icons.paper}
                size="3x"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
