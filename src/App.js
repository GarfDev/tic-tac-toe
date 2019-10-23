import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import GameTable from "./components/GameTable";
import InputForm from "./components/InputForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [gameHighScope, setGameHighscope] = useState([])
  const [gameTable, setGameTable] = useState([null, null, null, null, null, null,null, null, null])
  const [gameTableHistory, setGameTableHistory] = useState([])
  const [userState, setUserState] = useState(new Object({
  currentUser: "",
  winningTimes: 0,
  previousWinList: [{username:"A", windate: Date.now()}]
}))
console.log("app", userState.currentUser)

const FetchHistory = async () => {
  const response = await fetch("https://ftw-highscores.herokuapp.com/tictactoe-dev")
  const data = await response.json()
  console.log(data.items)
  setGameHighscope(data.items)
}

useEffect(() => {FetchHistory()},[userState])

  if(!userState.currentUser) return <InputForm userState={userState} setUserState={setUserState} />
  return (
    <>
      <GameTable
      FetchHistory = {FetchHistory}
      gameHighScope = {gameHighScope}
      setGameHighscope = {setGameHighscope}
      userState = {userState}
      setUserState = {setUserState}
      gameTableHistory = {gameTableHistory}
      setGameTableHistory = {setGameTableHistory}
      gameTable={gameTable}
      setGameTable={setGameTable} />
    </>
  );
}

export default App;
