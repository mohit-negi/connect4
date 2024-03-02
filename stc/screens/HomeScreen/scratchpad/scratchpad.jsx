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
import { MainContext } from '../../../context/mainContext'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// Grid
const numRows = 6
const numCols = 7
const defaultColor = '#7A44FE'; 
const initialGrid = Array.from({ length: numRows }, () =>
  Array.from({ length: numCols }, () => defaultColor)
);

const Scratchpad = () => {
  const [scratchPad, setScratchPad] = useState(initialGrid);
  const [isWinner, setIsWinner] = useState(false);
  const [scores, setScores] = useState({ playerOne: 0, playerTwo: 0 });
  const [lastMove, setLastMove] = useState({ row: -1, col: -1 }); // Track the last move for checking win
  function checkforWinner(arr, r, iterR, c, iterC, currPlayer) {
    let cnt = 0;
    while (r < arr.length && r >= 0 && c < arr[0].length && c >= 0 && arr[r][c] === currPlayer) {
        // score tally
            cnt++;
        
        // dynamic iteration
        if (iterR !== 0 && iterC !== 0) {
            r += iterR;
            c += iterC;
        } else if (iterR === 0) {
            c += iterC;
        } else if (iterC === 0) {
            r += iterR;
        }
    }
    // check if won
    (cnt >= 4) ? console.log("Curr player wins"): console.log(false);
    return cnt >= 4;
}

function judge(arr,r,c,currPlayer) {
    const arrLen = arr.length - 1;
    if ((r <= arrLen && r >= 0) && (c <= arrLen && c >= 0)) {
        console.log(`At row : ${r} & col : ${c} with currplayer: ${currPlayer}`);
        // vertically
        if (r - 1 <= arrLen && r - 1 >= 0 && arr[r - 1][c] === currPlayer) {
            console.log("checking for upwards vertical");
            checkforWinner(arr, r, -1, c, 0, currPlayer);
        }
        if (r + 1 <= arrLen && r - 1 >= 0 && arr[r + 1][c] === currPlayer) {
            console.log("checking for downwards vertical");
            checkforWinner(arr, r, +1, c, 0, currPlayer);
        }
        // horizontally
        if (c + 1 <= arrLen && c + 1 >= 0 && arr[r][c + 1] === currPlayer) {
            console.log("check for rightwards horizontal");
            checkforWinner(arr, r, 0, c, +1, currPlayer);
        }
        if (c - 1 <= arrLen && c - 1 >= 0 && arr[r][c - 1] === currPlayer) {
            console.log("check for leftwards horizontal");
            checkforWinner(arr, r, 0, c, -1, currPlayer);
        }
        // skewed as forward slash
        if (r + 1 <= arrLen && r + 1 >= 0 && c + 1 <= arrLen && c + 1 >= 0 && arr[r + 1][c + 1] === currPlayer) {
            console.log("check for incrementing forward slash");
            checkforWinner(arr, r, +1, c, +1, currPlayer);
        }
        if (r - 1 <= arrLen && r - 1 >= 0 && c - 1 <= arrLen && c - 1 >= 0 && arr[r - 1][c - 1] === currPlayer) {
            console.log("check for incrementing forward slash");
            checkforWinner(arr, r, -1, c, -1, currPlayer);
        }
        // skewed as back slash
        if (r - 1 <= arrLen && r - 1 >= 0 && c + 1 <= arrLen && c + 1 >= 0 && arr[r - 1][c + 1] === currPlayer) {
            console.log("check for incrementing back slash");
            checkforWinner(arr, r, -1, c, +1, currPlayer);
        }
        if (r + 1 <= arrLen && r + 1 >= 0 && c - 1 <= arrLen && c - 1 >= 0 && arr[r + 1][c - 1] === currPlayer) {
            console.log("check for decrementing back slash");
            checkforWinner(arr, r, +1, c, -1, currPlayer);
        }
    } else {
        console.log("Invalid play");
    }
}

  // Context
  const {
    currPlayer,
    changeCurrPlayer,
    currPlayerColor,
    updateWinner,
    winner
  } = useContext(MainContext);

  // Event: Handle cell press
  const handleCellPress = (i, j) => {
    if (isWinner) {
      //rewst game
      return;
    }

    changeCurrPlayer();

    // Finding out the last filled row
    let lastFilledRowInCol = numRows - 1;
    while (lastFilledRowInCol >= 0 && scratchPad[lastFilledRowInCol][j] !== defaultColor) {
      lastFilledRowInCol--;
    }

    if (lastFilledRowInCol === -1) {
      // Column is full, do nothing
      return;
    }

    const newGrid = [...scratchPad];
    // Update the grid with the player's color
    newGrid[lastFilledRowInCol][j] = currPlayerColor;
    setScratchPad(newGrid);
    setLastMove({ row: lastFilledRowInCol, col: j });

          //resetting procedure

    if (judge(newGrid,i,j,currPlayerColor)) {
      // let winnerColor = "";
      // if(currPlayerColor == #FB6584){
      //   winnerColor = "player 1"
      // }else if(currPlayerColor == "#F4c768"){
      //   winnerColor = "player 2"
      // }
      console.log('Winner:', currPlayerColor == "#F4c768" ? "player One": "player two");
      updateWinner(currPlayerColor)
      console.log(scores)
      setIsWinner(true);
      const initialGrid = Array.from({ length: numRows }, () =>
        Array.from({ length: numCols }, () => defaultColor)
      );
      setScratchPad(initialGrid)
      setIsWinner(false)
      updateWinner(defaultColor)
    }
  };

  const renderCells = () => {
    const cells = [];
    scratchPad.map((row, i) => {
      const rowCells = [];
      scratchPad[i].map((currColor, j) => {
        rowCells.push(
          <TouchableOpacity
            key={`${i}-${j}`}
            style={styles.cellContainer}
            onPress={() => {
              handleCellPress(i, j);
            }}
          >
            <View style={styles.cell(i, j, currColor)}>
              {/* <Text style={{ color: 'white', fontSize: 20 }}>{`${
                i + ',' + j
              }`}</Text> */}
            </View>
          </TouchableOpacity>
        );
      });
      cells.push(
        <View key={i} style={styles.row}>
          {rowCells}
        </View>
      );
    });
    return cells;
  };

  return (
    <View style={styles.scratchpadContainer}>
      <ScratchpadTop />
      <View style={styles.gridContainer}>{renderCells()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  scratchpadContainer: {
    position:'absolute',
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
