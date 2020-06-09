import React, {useEffect, useState} from 'react'
import {View, Text, TouchableWithoutFeedback, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import '../css/Stream.css'
import {TouchableHighlight} from 'react-native-gesture-handler'

const StreamScreen = ({navigation}) => {
  const [orientation, setOrientation] = useState('portrait')
  const isPortrait = () => {
    const dim = Dimensions.get('screen')
    return dim.height >= dim.width
  }
  useEffect(() => {
    if (navigation.isFocused) {
      navigation.setOptions({
        tabBarVisible: false,
        headerShown: false,
      })
    }
    Dimensions.addEventListener('change', () => {
      isPortrait() ? setOrientation('portrait') : setOrientation('landscape')
    })
  })

  return orientation === 'portrait' ? (
    <View styleName='container'>
      <View styleName='header'>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Icon styleName='ml-1' name={'times'} size={20} color={'white'} />
        </TouchableWithoutFeedback>
      </View>
      <View styleName='body middle center'>
        <View styleName='mb-5'>
          <Icon name='video' size={90} color={'rgba(211,211,211,0.5)'} />
        </View>
        <View styleName='text'>
          <Text styleName='h1-light'>Start the show</Text>
          <Text styleName=' mt-1 p'>To create a new video,allow access to</Text>
          <Text styleName='p'>Photos,Camera,and Microphone</Text>
          <TouchableHighlight
            styleName='btn center middle mt-2'
            underlayColor={'rgba(213,213,213,0.1)'}
            onPress={() => null}>
            <Text styleName=''>ALLOW ACCESS</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  ) : (
    <View styleName='container'>
      <View styleName='header'>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Icon styleName='ml-1' name={'times'} size={20} color={'white'} />
        </TouchableWithoutFeedback>
      </View>
      <View styleName='body row even'>
        <View styleName='middle'>
          <Icon name='video' size={90} color={'rgba(211,211,211,0.5)'} />
        </View>
        <View styleName='text'>
          <Text styleName='h1-light'>Start the show</Text>
          <Text styleName='p mt-1'>To create a new video,allow access to</Text>
          <Text styleName='p'>Photos,Camera,and Microphone</Text>
          <TouchableHighlight
            styleName='btn center middle mt-2'
            underlayColor={'rgba(213,213,213,0.1)'}
            onPress={() => null}>
            <Text styleName=''>ALLOW ACCESS</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

export default StreamScreen
