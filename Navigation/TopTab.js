import React from 'react'
import {View, Text} from 'react-native'
import '../css/Navigation.css'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {TouchableWithoutFeedback} from 'react-native-gesture-handler'
const TopTab = ({navigation}) => {
  return (
    <View styleName='topTab'>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        styleName='ml-1'>
        <Icon name='youtube' size={30} color={'red'} />
        <Text styleName='h2-dark title' style={{fontFamily: 'Gothic'}}>
          YouTube
        </Text>
      </View>
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
        styleName=''>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Stream')}>
          <Icon name='video' size={18} color={'#808080'} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
          <Icon name='search' size={18} color={'#808080'} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Account')}>
          <View
            style={{
              width: 21,
              height: 21,
              backgroundColor: 'red',
              borderRadius: 21 / 2,
            }}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default TopTab
