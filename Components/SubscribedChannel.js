import React from 'react'
import {View, Text, Image} from 'react-native'
import '../css/SubsciptionChannel.css'
const SubscribedChannel = () => {
  return (
    <View styleName='container'>
      <View styleName='user-image mt-1 ml-1'>
        <Image
          resizeMode={'cover'}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/77/Big_Nature_%28155420955%29.jpeg',
          }}
          style={{height: '100%', width: '100%', borderRadius: 360}}
        />
      </View>
      <View>
        <Text styleName='channel-info ml-1'>Lol valley</Text>
      </View>
    </View>
  )
}

export default SubscribedChannel
