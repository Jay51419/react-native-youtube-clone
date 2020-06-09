import React from 'react'
import {View, Text, Image} from 'react-native'
import '../css/VideoCard.css'
import Icon from 'react-native-vector-icons/FontAwesome5'
const VideoCard = () => {
  return (
    <View styleName='container'>
      <View styleName='thumbnail'>
        <Image
          resizeMode={'cover'}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/77/Big_Nature_%28155420955%29.jpeg',
          }}
          style={{height: 200, width: '100%'}}
        />
        <View styleName='time'>
          <Text styleName='time-text'>2:16</Text>
        </View>
      </View>
      <View styleName='video-info mt-1 row'>
        <View styleName='user-image ml-1'>
          <Image
            resizeMode={'cover'}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/7/77/Big_Nature_%28155420955%29.jpeg',
            }}
            style={{height: '100%', width: '100%', borderRadius: 360}}
          />
        </View>
        <View styleName='video-title ml-1'>
          <Text styleName='title'>
            My first Video My first Video My first Video My first Video My first
            VideoMy
          </Text>
          <View styleName=' row'>
            <Text styleName='channel-info'>lol Valley</Text>
            <Text styleName='channel-info'> . 203k views</Text>
            <Text styleName='channel-info'> . 3 years ago</Text>
          </View>
        </View>
        <View styleName='option ml-2 center '>
          <Icon name='ellipsis-v' color={'#808080'} size={15} />
        </View>
      </View>
    </View>
  )
}

export default VideoCard
