import React, { createContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'

export const MainContext = createContext()

export const MainProvider = ({ children }) => {
  const [currPlayer, setCurrPlayer] = useState(currPlayer);
  const [playerOneColor, setPlayerOneColor] = useState('#F4c768');
  const [playerTwoColor, setPlayerTwoColor] = useState('#FB6584');
  const [currPlayerColor, setCurrPlayerColor] = useState('#F4c768');
  const [winner, setWinner] = useState('#7A44FE');
  const [key, setKey] = useState(0);
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  // const 
  const resetTimer = () => {
    setKey((prev) => prev + 1);
  };
  const changeCurrPlayer = () => {
    const playerOne = 1;
    const playerTwo = 2;
    if (currPlayer == playerOne) {
      setCurrPlayer(playerTwo);
    } else {
      setCurrPlayer(playerOne);
    }
    //changing the color of the primary color of the player
    currPlayer === playerOne
      ? setCurrPlayerColor(playerOneColor)
      : setCurrPlayerColor(playerTwoColor);
    //resetting the color of the timer when altering player
    resetTimer();

    ////console.log('current player updated', currPlayer);
  };
  const updateWinner = (winner) => {
    setWinner(winner);
  };
  //tallying
  const tallyScore = () => {
    let defaultColor = '#5C2DD4';
    let playerOne = '#F4c768';
    let playerTwo = '#FB6584';
    if (winner != defaultColor) {
      if (winner == playerOne) {
        setScoreOne(scoreOne + 1);
      } else if (winner == playerTwo) {
        setScoreTwo(scoreTwo + 1);
      }
    }
  };
  return (
    <MainContext.Provider
      value={{
        currPlayer,
        changeCurrPlayer,
        currPlayerColor,
        key,
        updateWinner,
        winner,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
