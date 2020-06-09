import React from 'react'
import {View, Text, Image} from 'react-native'
import '../css/RecentCard.css'
import Icon from 'react-native-vector-icons/FontAwesome5'
const VideoCard = () => {
  return (
    <View styleName='container'>
      <View styleName='thumbnail center'>
        <Image
          resizeMode={'cover'}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/77/Big_Nature_%28155420955%29.jpeg',
          }}
          style={{height: 70, width: '90%'}}
        />
        <View styleName='time'>
          <Text styleName='time-text'>2:16</Text>
        </View>
      </View>
      <View styleName='video-info mt-1 row'>
        <View styleName='video-title'>
          <Text styleName='title'>My first Video</Text>
          <View styleName=' row'>
            <Text styleName='channel-info'>lol Valley</Text>
          </View>
        </View>
        <View styleName='option center'>
          <Icon name='ellipsis-v' color={'#808080'} size={15} />
        </View>
      </View>
    </View>
  )
}

export default VideoCard
