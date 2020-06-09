import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import Navigation from './Navigation/Navigation'
import BottomTab from './Navigation/BottomTab'
import TopTab from './Navigation/TopTab'
const {height} = Dimensions.get('window')
const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <BottomTab />
    </View>
  )
}

export default App
