import React, { createContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'

export const MainContext = createContext()

export const MainProvider = ({ children }) => {
  var [name, setName] = useState('gell')
  const changeName = () => {
    setName('hello')
    console.log(name)
  }
  return (
    <MainContext.Provider value={{ changeName, name }}>
      {children}
    </MainContext.Provider>
  )
}
