import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const PlayMenu = () => {
  const [playPressed, setPlayPressd] = useState(false)
  const handlePlayButton = () => {
    console.log('Play button pressed', playPressed)

    // setPlayPressd(!playPressed);
  }
  return (
    <View style={styles.playMenuContainer}>
      <Text>Player 1 plays</Text>
      <Pressable style={styles.playButton} onPress={handlePlayButton}>
        <Icon name="play" size={32} color="white" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  playMenuContainer: {
    flex:1,
    margin: windowWidth * 0.050,
    width: windowWidth *2,
    height: windowHeight,
    borderWidth: 2,
    backgroundColor: '#000',
    borderRadius: 30,
    padding: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 110,
    elevation: 10, // Android shadow
    //positioning
    position: 'absolute',
    zIndex: 999,
    top: windowHeight * 0.1,
    right: windowWidth * 0.1,
  },
  playButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
    width: '40%',
    // height: '100%',
    alignItems: 'center',
    backgroundColor: '#5C2DD4',
    borderRadius: 25,
    padding: 5,
    marginHorizontal: 5,

    //shadow
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 100,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 11,
    elevation: 10, // Android shadow
  },
})

export default PlayMenu
