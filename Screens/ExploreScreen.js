import React, {useEffect, useState} from 'react'
import {View, Text, Dimensions} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import VideoCard from '../Components/VideoCard'
import VideoCardHorizontal from '../Components/VideoCardHorizontal'
const ExploreScreen = () => {
  const [orientation, setOrientation] = useState('portrait')
  const isPortrait = () => {
    const dim = Dimensions.get('screen')
    return dim.height >= dim.width
  }
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      isPortrait() ? setOrientation('portrait') : setOrientation('landscape')
    })
  })
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {orientation === 'portrait' ? (
        <View>
          <VideoCard />
          <VideoCard />
        </View>
      ) : (
        <View>
          <VideoCardHorizontal />
          <VideoCardHorizontal />
        </View>
      )}
    </ScrollView>
  )
}

export default ExploreScreen
