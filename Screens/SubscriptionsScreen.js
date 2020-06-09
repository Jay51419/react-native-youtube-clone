import React, {useState, useEffect} from 'react'
import {View, Dimensions} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import VideoCard from '../Components/VideoCard'
import VideoCardHorizontal from '../Components/VideoCardHorizontal'
import SubscribedChannel from '../Components/SubscribedChannel'
import '../css/SubsciptionChannel.css'
const SubscriptionsScreen = () => {
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
    <View>
      <View style={{height: '20%'}}>
        <ScrollView
          style={{borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1}}
          horizontal>
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
          <SubscribedChannel />
        </ScrollView>
      </View>
      <View style={{height: '80%', backgroundColor: 'black'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {orientation === 'portrait' ? (
            <View>
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
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  )
}

export default SubscriptionsScreen
