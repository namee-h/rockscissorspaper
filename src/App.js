import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개(타이틀,사진,결과값)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3번 4번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 박스 테두리 색이 바뀐다 (이기면-초록,지면-빨강,비기면-검정)


const choice = {
  rock:{
    name:"Rock",
    img: require('./img/rock.webp')
  },
  scissors:{
    name:"Scissors",
    img: require('./img/scissors (2).webp')
  },
  paper:{
    name:"Paper",
    img: require('./img/paper.webp')
  },
}
function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const [result,setResult]=useState("")
  // const [resultSwitch,setResultSwitch] =useState("")

  const play =(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    // console.log("선택됨",userChoice)
    setComputerSelect(computerChoice);
    setResult(judgment(choice[userChoice],computerChoice));
    // setResultSwitch(changeResult(choice[userChoice],computerChoice));
  };


  const judgment = (user,computer)=>{
    console.log("user",user,"computer",computer)
    
    // 가위는 보를 이겨, 보는 바위를 이겨 바위는 가위를 이겨
    // if user.name === computer.name ? 비김 tie : user.name==scissors&&computer.name==paper? 이김 : 짐
    // user.name == paper && computer.name== rock ? 이김 : 짐
    // user.name == rock && computer.name == scissors ? 이김 : 짐

    if(user.name === computer.name){
      return "TIE";
    }else if(user.name === "Rock")return computer.name === "Scissors"? "WIN" : "LOSE";
    else if(user.name === "Scissors")return computer.name === "Paper"? "WIN" : "LOSE";
    else if(user.name === "Paper")return computer.name === "Rock"? "WIN" : "LOSE";
  };
  // const changeResult =(user,computer)=>{
  //   if(user.name === computer.name){
  //     return "TIE";
  //   }else if(computer.name === "Rock")return user.name === "Scissors"? "WIN" : "LOSE";
  //   else if(computer.name === "Scissors")return user.name === "Paper"? "WIN" : "LOSE";
  //   else if(computer.name === "Paper")return user.name === "Rock"? "WIN" : "LOSE";
  // };
  


 

  const randomChoice =()=>{
    let itemArray = Object.keys(choice);
    // console.log("item array",itemArray) Object.keys == 객체의 키값만 뽑아서 어레이로 만들어주는 함수
    let randomItem = Math.floor(Math.random()*itemArray.length);
    // console.log("randomValue",randomItem)
    let final = itemArray[randomItem]
    // console.log("final",final)
    return choice[final];
  };
  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect} result={result}/>
        <Box title="COMPUTER" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        {/*클릭이벤트를 넣을때 함수는 무조건 콜백함수로 넣어야 처음에 실행이 안됨  */}
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
