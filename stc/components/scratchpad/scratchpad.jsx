import React, { useEffect, useState, useContext } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import ScratchpadTop from './scratchpad.top'
import { MainContext } from '../../context/mainContext'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

//grid
const numRows = 6
const numCols = 7
const defaultColor = '#7A44FE'
const initialGrid = Array.from({ length: numRows }, () =>
  Array.from({ length: numCols }, () => defaultColor)
)
const Scratchpad = () => {
  const [scratchPad, setScratchPad] = useState(initialGrid)
  // const [currPlayer, setCurrPlayer] = useState('#F4c768')
  const [isWinner, setIsWinner] = useState(false)

  const { currPlayer, changeCurrPlayer } = useContext(MainContext)

  const handleCellPress = (i, j) => {
    const playerOne = 1
    console.log(i, j)
    //turn logic
    changeCurrPlayer()
    //finding out the last filled column
    let lastFilledRowInCol = 0
    for (let row = numRows - 1; row > 0; row--) {
      if (initialGrid[row][j] == defaultColor) {
        lastFilledRowInCol = row
        console.log('---', row, j)
        break
      }
    }

    const newGrid = [...initialGrid]
    //color swapped by player turn
    newGrid[lastFilledRowInCol][j] =
      currPlayer == playerOne ? '#F4c768' : '#FB6584'
    console.log('Button', i, j, newGrid)
    setScratchPad(newGrid)
  }
  const renderCells = () => {
    const cells = []
    initialGrid.map((row, i) => {
      const rowCells = []
      initialGrid[i].map((currColor, j) => {
        rowCells.push(
          <TouchableOpacity
            key={`${i}-${j}`}
            style={styles.cellContainer}
            onPress={() => {
              handleCellPress(i, j)
              console.log(currColor)
            }}
          >
            <View style={styles.cell(i, j, currColor)}>
              <Text style={{ color: 'white', fontSize: 20 }}>{`${
                i + ',' + j
              }`}</Text>
            </View>
          </TouchableOpacity>
        )
      })
      cells.push(
        <View key={i} style={styles.row}>
          {rowCells}
        </View>
      )
    })
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
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
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
  cell: (i, j, currColor) => ({
    width: windowWidth * 0.1228,
    aspectRatio: 1, // Maintain a square aspect ratio for each cell
    borderWidth: 1,
    borderColor: '#000',
    borderTopWidth: 7,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    shadowRadius: 3,
    borderRadius: 50,
    backgroundColor: `${currColor}`,
  }),
})

export default Scratchpad
