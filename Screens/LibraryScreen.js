import React from 'react'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler'
import RecentCard from '../Components/RecentCard'
import LibraryItem from '../Components/LibraryItem'
import '../css/Library.css'
const LibraryScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View styleName='recent'>
        <Text styleName='recent-title'>Recent</Text>
        <ScrollView horizontal>
          <View styleName='recent-card mt-1 mb-1'>
            <RecentCard />
          </View>
          <View styleName='recent-card mt-1 mb-1'>
            <RecentCard />
          </View>
          <View styleName='recent-card mt-1 mb-1'>
            <RecentCard />
          </View>
          <View styleName='recent-card mt-1 mb-1'>
            <RecentCard />
          </View>
        </ScrollView>
      </View>
      <View styleName='listItem'>
        <TouchableHighlight onPress={() => navigation.navigate('History')}>
          <LibraryItem title={'History'} leftIcon={'history'} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Downloads')}>
          <LibraryItem
            title={'Downloads'}
            leftIcon={'download'}
            length={'24 videos'}
          />
        </TouchableHighlight>
      </View>
      <View styleName='playlist'></View>
    </ScrollView>
  )
}

export default LibraryScreen
