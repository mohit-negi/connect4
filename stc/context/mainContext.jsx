import React, { createContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'

export const MainContext = createContext()

export const MainProvider = ({ children }) => {
  const [currPlayer, setCurrPlayer] = useState(currPlayer);
  const [playerOneColor, setPlayerOneColor] = useState('#F4c768');
  const [playerTwoColor, setPlayerTwoColor] = useState('#FB6584');
  const [currPlayerColor, setCurrPlayerColor] = useState('#F4c768');
  const [key, setKey] = useState(0);

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
    console.log('current player updated', currPlayer);
  };
  return (
    <MainContext.Provider
      value={{
        currPlayer,
        changeCurrPlayer,
        currPlayerColor,
        key,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
