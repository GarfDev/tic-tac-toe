import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'


export default function GameTable (props){
  const [winner, setWinner] = useState('')
  const [isGameOver, setIsGameOver] = useState(false)
  const [winningButtons, setWinningButtons] = useState([])
  let winningPattern = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [1,4,7],
      [0,3,6],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

const updateGameScope = async () => {
  let data = new URLSearchParams();
  data.append("player", props.userState.currentUser);
  data.append("score", props.gameHighScope[2].score - Date.now());
  const url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: data.toString(),
    json: true
  });
  console.log("I sent new packet to server api")
}

const handleOnChange = (idx) => {
  if(isGameOver) return
  let TempArray = props.gameTable.slice();
  if(!TempArray[idx]) {
    TempArray[idx] = TempArray.filter(value => value===null).length%2 ? "X" : "O";
    props.setGameTableHistory([...props.gameTableHistory, TempArray])
    props.setGameTable(TempArray)
  }
  if(findTheWinner(TempArray, idx)){
    setWinner(TempArray[findTheWinner(TempArray,idx)[0]])
    setWinningButtons(findTheWinner(TempArray, idx))
    setIsGameOver(true)
    updateGameScope()
    props.FetchHistory()
  }
}

const findTheWinner = (arr, idx) => {
  const winner = winningPattern.find(array => arr[array[0]] && (arr[array[0]] === arr[array[1]] && arr[array[1]] === arr[array[2]]))
  return winner
}

const HistoryBar = (props) => {
  return (
    <div className="HistoryBar">
      <h1>Hello</h1>
    </div>
  )
}

  return (
    <div className="container">
    <h1>Hello, {props.userState.currentUser}</h1>
      <div className="GameTable">
        {props.gameTable.map((value, idx) => {
          return (
            <div key={idx} style={winningButtons.includes(idx) ? {border: "3px solid red", color: "red"} : null } className="GameButton" value={value} id={idx} onClick={() => handleOnChange(idx)}>
              {value}
            </div>
          )
        })}
      </div>
      <h1>{ !!winner ? `The game winner is ${winner}` : "Made by Garfield with Love" }</h1>
      <div className="History">
        <button className="stupidButton" onClick={() => {
          props.setGameTable(new Array(9).fill(null))
          setWinner('')
          setIsGameOver(false)
          setWinningButtons([])
          props.setGameTableHistory([])
        }}>{props.gameTableHistory.length < 1 ? "Let's start the fun" : "Restart the game"}</button>
        {props.gameTableHistory.map((history, idx) => {
          return (
            <button className="stupidButton" onClick={() => {
              if(idx===props.gameTableHistory.length-1) return
              props.setGameTable(history)
              setWinner('')
              setIsGameOver(false)
              setWinningButtons([])
              props.setGameTableHistory(props.gameTableHistory.splice(0, idx))
            }
          } >{`return ${props.gameTableHistory.length-idx} steps`}</button>
          )
        })}
      </div>
      <Carousel>
        {props.gameHighScope.map(scope => {
          return (
            <Carousel.Item>
              <h3>{scope.player}</h3>
              <p>{scope.score}</p>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  );
};
