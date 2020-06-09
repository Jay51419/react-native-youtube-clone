import React from 'react'
import {View, Text} from 'react-native'
import InboxMessage from '../Components/InboxMessage'
import {ScrollView} from 'react-native-gesture-handler'
const InboxScreen = () => {
  return (
    <View>
      <ScrollView>
        <InboxMessage />
        <InboxMessage />
        <InboxMessage />
        <InboxMessage />
        <InboxMessage />
        <InboxMessage />
      </ScrollView>
    </View>
  )
}

export default InboxScreen
