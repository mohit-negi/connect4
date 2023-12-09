import React from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native'
import ScratchpadTop from './scratchpad.top'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const gridSize = 7
const Scratchpad = () => {
  const renderCells = () => {
    const cells = []
    for (let i = 0; i < 7; i++) {
      const rowCells = []
      for (let j = 0; j < 7; j++) {
        rowCells.push(
          <View key={`${i}-${j}`} style={styles.cellContainer}>
            <View style={styles.cell}>
              <Text style={{ color: 'white' }}>{`${
                i + ',' + j
              }`}</Text>
            </View>
          </View>
        )
      }
      cells.push(
        <View key={i} style={styles.row}>
          {rowCells}
        </View>
      )
    }
    return cells
  }
  return (
    <View style={styles.scratchpadContainer}>
      <ScratchpadTop />
      <View style={styles.gridContainer}>{renderCells()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  scratchpadContainer: {
    margin: windowWidth * 0.025,
    height: windowHeight * 0.65,
    borderWidth: 2,
    backgroundColor: '#FEFEFF',
    borderRadius: 30,
    padding: 2,
    justifyContent: 'center',
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
  },
  gridContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cellContainer: {
    margin: 1,
  },
  cell: {
    width: windowWidth * 0.1228,
    aspectRatio: 1, // Maintain a square aspect ratio for each cell
    borderWidth: 1,
    borderColor: '#000',
    borderTopWidth: 7,
    shadowRadius: 3,
    borderRadius: 50,
    backgroundColor: '#7A44FE',
  },
})

export default Scratchpad
