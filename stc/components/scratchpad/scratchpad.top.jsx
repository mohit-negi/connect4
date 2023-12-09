import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import ScratchpadTimer from './scratchpad.timer/scratchpad.timer'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const ScratchpadTop = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.topContainerLeft}>
        <View style={styles.leftContainerBottom}>
          <Icon name="smileo" size={32} color="black" />
        </View>
        <View style={styles.leftScoreContainer}>
          <Text style={styles.leftScore}>12</Text>
        </View>
      </View>
      <View style={styles.topContainerMiddle}>
        <ScratchpadTimer />
      </View>
      <View style={styles.topContainerRight}>
        <View style={styles.rightScoreContainer}>
          <Text style={styles.rightScore}>12</Text>
        </View>
        <View style={styles.rightContainerIcon}>
          <Icon name="smileo" size={32} color="black" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    // borderColor: '#0f0f',
    // borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    height: windowHeight * 0.07,
    width: windowWidth * 0.9,
    marginBottom: windowHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainerLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: 'red',
    // borderWidth: 2,
    width: '40%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#5C2DD4',
    borderRadius: 25,
    padding: 5,
    marginHorizontal: 5,

    //shadow
    borderWidth: 3,
    borderColor: '#F4c768',
    shadowColor: '#000',
    shadowOffset: {
      width: 100,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 110,
    elevation: 10, // Android shadow
  },
  leftScoreContainer: {
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  leftContainerBottom: {
    alignItems: 'center',
    backgroundColor: '#F4c768',
    width: 35,
    borderRadius: 50,
  },
  leftScore: {
    fontSize: 25,
    color: '#fff',
  },
  topContainerRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: 'red',
    // borderWidth: 2,
    width: '40%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#5C2DD4',
    borderRadius: 25,
    padding: 5,
    marginHorizontal: 5,
    //shadow
    borderWidth: 3,
    borderColor: '#FB6584',
    shadowColor: '#000',
    shadowOffset: {
      width: 100,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 110,
    elevation: 10, // Android shadow
  },
  rightScore: {
    fontSize: 25,
    color: '#fff',
  },
  rightScoreContainer: {
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  rightContainerIcon: {
    alignItems: 'center',
    backgroundColor: '#FB6584',
    width: 35,
    borderRadius: 50,
  },
  // Timer
  topContainerMiddle: {
    // borderWidth: 2,
    // borderColor: 'red',
    // marginHorizontal: 5,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '28%',
  },
})

export default ScratchpadTop