import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import GameTable from "./components/GameTable";
import InputForm from "./components/InputForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [gameTable, setGameTable] = useState([null, null, null, null, null, null,null, null, null])
  const [gameTableHistory, setGameTableHistory] = useState([])
  const [userState, setUserState] = useState(new Object({
  currentUser: "",
  winningTimes: 0,
  previousWinList: [{username:"A", windate: Date.now()}]
}))
console.log("app", userState.currentUser)
  if(!userState.currentUser) return <InputForm userState={userState} setUserState={setUserState} />
  return (
    <>
      <GameTable
      gameTableHistory = {gameTableHistory}
      setGameTableHistory = {setGameTableHistory}
      gameTable={gameTable}
      setGameTable={setGameTable} />
    </>
  );
}

export default App;
