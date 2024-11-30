import { useState } from "react";
import "./App.css";
import Box from "./component/Box.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./component/icons";
let winPoint = 0;
let losePoint = 0;
// 1. 박스 2개(타이틀,사진,결과값)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3번 4번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 박스 테두리 색이 바뀐다 (이기면-초록,지면-빨강,비기면-검정)
const choice = {
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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [userCounter, setUserCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);
  const play = (userChoice) => {
    // console.log("클릭되나?", userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgment(choice[userChoice], computerChoice));
    setUserCounter(userPoint(judgment(choice[userChoice], computerChoice)));
    setComputerCounter(
      computerPoint(judgment(choice[userChoice], computerChoice))
    );
  };
  const reset = () => {
    setUserSelect(null);
    setComputerSelect(null);
    setResult("");
    setUserCounter(0);
    setComputerCounter(0);
    winPoint = 0;
    losePoint = 0;
  };
  const userPoint = (userWin) => {
    // console.log("이겼니", userWin);
    // 1. 이기면 +1 지거나 동점이면 ""
    if (userWin === "Win") return (winPoint += 1);
    else return (winPoint = userCounter);
  };

  const computerPoint = (userLose) => {
    // console.log("졌니?",userLose)
    if (userLose === "Lose") return (losePoint += 1);
    else return (losePoint = computerCounter);
  };
  const judgment = (user, computer) => {
    if (user.name === computer.name) return "Tie";
    else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else return computer.name === "Rock" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log("랜덤번호는", randomItem);

    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div className="body">
      <div className={`container ${result}`}>
        <div className="nav">
          <div>
            <span>{computerCounter}</span> : <span>{userCounter}</span>
          </div>
          <button onClick={() => reset()}>RESET</button>
        </div>
        <div className="main">
          <Box user="Computer" item={computerSelect} result={result} />
          <span className="line"></span>
          <Box user="You" item={userSelect} result={result} />
        </div>

        <div className="button-area">
          <button onClick={() => play("scissors")}>
            <FontAwesomeIcon icon={icons.scissors} size="3x" />
          </button>
          <button onClick={() => play("rock")}>
            <FontAwesomeIcon icon={icons.rock} size="3x" />
          </button>
          <button onClick={() => play("paper")}>
            <FontAwesomeIcon icon={icons.paper} size="3x" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
