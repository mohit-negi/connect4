import React, { createContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'

export const MainContext = createContext()

export const MainProvider = ({ children }) => {
  const [currPlayer, setCurrPlayer] = useState(1)
  const changeName = () => {
    setName('hello')
    console.log(name)
  }
  const changeCurrPlayer = () => {
    const playerOne = 1
    const playerTwo = 2
    if (currPlayer == playerOne) {
      setCurrPlayer(playerTwo)
    } else {
      setCurrPlayer(playerOne)
    }
    console.log('current player updated', currPlayer)
  }
  return (
    <MainContext.Provider value={{ currPlayer, changeCurrPlayer }}>
      {children}
    </MainContext.Provider>
  )
}
