import React, {useEffect, useState} from 'react'
import {View, TextInput} from 'react-native'
import VideoCardHorizontal from '../Components/VideoCardHorizontal'
import '../css/Search.css'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {TouchableWithoutFeedback} from 'react-native-gesture-handler'
import SearchHistory from '../Components/SearchHistory'
const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('')
  const [isSearching, setSearching] = useState(false)
  const [history, setHistory] = useState([
    {id: 0, text: 'My first history'},
    {id: 0, text: 'hello'},
  ])
  useEffect(() => {
    if (navigation.isFocused) {
      navigation.setOptions({
        tabBarVisible: false,
        headerShown: false,
      })
    }
  })
  return (
    <View>
      <View styleName='header'>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Icon
            styleName='ml-1'
            name={'arrow-left'}
            size={20}
            color={'#696969'}
          />
        </TouchableWithoutFeedback>
        <View style={{flex: 1}}>
          <TextInput
            styleName='input'
            placeholder={'Search'}
            placeholderTextColor={'#696969'}
            autoFocus
            onSubmitEditing={() => {
              search !== ''
                ? setHistory([...history, {id: history.length, text: search}])
                : null
              setSearching(true)
            }}
            value={search}
            onChange={e => setSearch(e.nativeEvent.text)}
          />
        </View>
        <Icon
          styleName='ml-1 mr-1'
          name={'microphone'}
          size={18}
          color={'#696969'}
        />
      </View>
      {isSearching ? (
        <View>
          <VideoCardHorizontal />
        </View>
      ) : history[0] !== '' ? (
        history.map(e => <SearchHistory history={e.text} />)
      ) : null}
    </View>
  )
}

export default SearchScreen
