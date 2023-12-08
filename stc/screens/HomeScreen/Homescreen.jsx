import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Scratchpad from '../../components/scratchpad/scratchpad'

const Homescreen = () => {
  return (
    <View style={styles.container}>
      {/* scratchpad */}
      <Scratchpad />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // borderColor: 'blue',
    // borderWidth: 2,
    // backgroundColor:'red',
    margin: 0.5,
    justifyContent: 'center',

    backgroundColor: '#7A44FE',
  },
})

export default Homescreen
