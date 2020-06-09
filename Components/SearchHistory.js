import React from 'react'
import {View, Text} from 'react-native'
import '../css/SearchHistory.css'
import Icon from 'react-native-vector-icons/FontAwesome5'
const SearchHistory = ({history}) => {
  return (
    <View styleName='container row'>
      <View styleName='icon center middle'>
        <Icon name='history' color={'#808080'} size={20} />
      </View>
      <View styleName='text middle p l-1'>
        <Text styleName='history'>{history}</Text>
      </View>
      <View styleName='go center middle'>
        <Icon name='share' color={'#808080'} size={20} />
      </View>
    </View>
  )
}

export default SearchHistory
