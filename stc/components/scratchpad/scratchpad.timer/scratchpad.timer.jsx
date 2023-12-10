import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
// import { createContext } from 'use-context-selector'
import { useContext } from 'use-context-selector'

const ScratchpadTimer = () => {
  const firstName = useContextSelector(context)
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <CountdownCircleTimer
      size={80}
      strokeWidth={8}
      isPlaying={isPlaying}
      duration={30}
      colors={[
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
      ]}
      colorsTime={[10, 6, 3, 0]}
      onComplete={() => ({ shouldRepeat: true, delay: 2 })}
      updateInterval={1}
    >
      {({ remainingTime, color }) => {
        ;<Text style={{ color, fontSize: 20 }}>{remainingTime}</Text>
      }}
    </CountdownCircleTimer>
  )
}

const styles = StyleSheet.create({})

export default ScratchpadTimer
