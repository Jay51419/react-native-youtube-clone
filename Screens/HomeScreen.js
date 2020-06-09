import React, {useEffect, useState} from 'react'
import {View, Text, Dimensions} from 'react-native'
import VideoCard from '../Components/VideoCard'
import {ScrollView} from 'react-native-gesture-handler'
import VideoCardHorizontal from '../Components/VideoCardHorizontal'
const HomeScreen = ({navigation}) => {
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
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </View>
      ) : (
        <View>
          <VideoCardHorizontal />
          <VideoCardHorizontal />
          <VideoCardHorizontal />
          <VideoCardHorizontal />
          <VideoCardHorizontal />
        </View>
      )}
    </ScrollView>
  )
}

export default HomeScreen
