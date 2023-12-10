import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
} from 'react-native'
import Scratchpad from '../../components/scratchpad/scratchpad'
import PlayMenu from '../../components/PlayMenu/PlayMenu'
import Icon from 'react-native-vector-icons/Fontisto'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Homescreen = () => {
  const [playPressed, setPlayPressd] = useState(false)
  const handlePlayButton = () => {
    console.log('Play button pressed', playPressed)
    setPlayPressd(true)
  }
  return (
    <View style={styles.container}>
      {/* play button */}
      {/* <PlayMenu /> */}
      {!playPressed && (
        <View style={styles.playMenuContainer}>
          <Text>Player 1 plays</Text>
          <Pressable
            style={styles.playButton}
            onPress={handlePlayButton}
          >
            <Icon name="play" size={32} color="white" />
          </Pressable>
        </View>
      )}
      {/* scratchpad */}
      {playPressed && <Scratchpad />}
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
  playMenuContainer: {
    margin: windowWidth * 0.025,
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
    borderWidth: 2,
    backgroundColor: '#FEFEFF',
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

export default Homescreen
