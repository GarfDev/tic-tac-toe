import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import GameTable from "./components/GameTable";
import InputForm from "./components/InputForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [gameTable, setGameTable] = useState([null, null, null, null, null, null,null, null, null])
  const [gameTableHistory, setGameTableHistory] = useState([])
  const [userName, setUserName] = useState('')
  if(!userName) return <InputForm setUserName={setUserName} />
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
