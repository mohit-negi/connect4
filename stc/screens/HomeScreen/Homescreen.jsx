import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
} from 'react-native'
import Scratchpad from '../../screens/HomeScreen/scratchpad/scratchpad'
import PlayMenu from '../../screens/HomeScreen/scratchpad/scratchpad.timer/scratchpad.timer'
import Icon from 'react-native-vector-icons/Fontisto'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Homescreen = () => {
  const [playPressed, setPlayPressd] = useState(false)
  const handlePlayButton = () => {
    ////console.log('Play button pressed', playPressed)
    setPlayPressd(true);
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
        // <>
        // <PlayMenu /> 
        // </>
      )}
      {/* scratchpad */}
       <Scratchpad />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems:'center',

    backgroundColor: '#7A44FE',
    padding:20,
  },
  playMenuContainer: {
    zIndex:999,
    margin: windowWidth * 0.025,
    // flex:1,
    alignSelf:'center',

    width:windowWidth,
    height:windowHeight,
    borderColor: 'black',
    borderWidth: 4,
    // borderWidth: 2,
    backgroundColor: '#FEFEFF',

    // borderRadius: 30,
    // padding: 2,
    opacity:0.666,
    justifyContent: 'center',
    alignItems: 'center',
    // //shadow
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 20,
    //   height: 5,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 110,
    // elevation: 10, // Android shadow
    // //positioning
    // position: 'absolute',
    // zIndex: 999,
    // top: windowHeight * 0.1,
    // right: windowWidth * 0.1,
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
