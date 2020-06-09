import React from 'react'
import {View, Text, Image} from 'react-native'
import '../css/InboxMessage.css'
import Icon from 'react-native-vector-icons/FontAwesome5'
const InboxMessage = () => {
  return (
    <View styleName='container row center '>
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
      <View styleName='video-info row'>
        <View styleName='video-title middle ml-1'>
          <View>
            <Text styleName='title'>
              My first Video My first Video My first Video My first Video My
              first VideoMy
            </Text>
          </View>
          <View styleName=' video-time row'>
            {/* <Text styleName='channel-info'>lol Valley</Text>
            <Text styleName='channel-info'> . 203k views</Text> */}
            <Text styleName='channel-info'>3 years ago</Text>
          </View>
        </View>
        <View styleName='thumbnail ml-1 '>
          <Image
            resizeMode={'cover'}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/7/77/Big_Nature_%28155420955%29.jpeg',
            }}
            style={{height: 50, width: '100%'}}
          />
        </View>
        <View styleName='option ml-1 mr-1 center mt-1'>
          <Icon name='ellipsis-v' color={'#808080'} size={15} />
        </View>
      </View>
    </View>
  )
}

export default InboxMessage
