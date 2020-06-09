import React from 'react'
import {View, Text} from 'react-native'
import '../css/SearchHistory.css'
import Icon from 'react-native-vector-icons/FontAwesome5'
const LibraryItem = ({title, leftIcon, rightIcon, rightIconColor, length}) => {
  return (
    <View styleName='container row'>
      <View styleName='icon center middle'>
        <Icon name={leftIcon} color={'#808080'} size={20} />
      </View>
      <View styleName='text middle'>
        <Text styleName='title'>{title}</Text>
        <Text styleName='length'>{length}</Text>
      </View>
      <View styleName='go center middle'>
        <Icon name={rightIcon} color={rightIconColor} size={20} />
      </View>
    </View>
  )
}

export default LibraryItem
