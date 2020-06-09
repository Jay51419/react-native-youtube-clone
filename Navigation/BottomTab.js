import React from 'react'
import {Text, View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen'
import ExploreScreen from '../Screens/ExploreScreen'
import InboxScreen from '../Screens/InboxScreen'
import LibraryScreen from '../Screens/LibraryScreen'
import SubscriptionsScreen from '../Screens/SubscriptionsScreen'
import SearchScreen from '../Screens/SearchScreen'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AccountScreen from '../Screens/AccountScreen'
import StreamScreen from '../Screens/StreamScreen'
import TopTab from './TopTab'
import {navigate} from './RootNavigation'
import HistoryScreen from '../Screens/HistoryScreen'
import DownloadsScreen from '../Screens/DownloadsScreen'
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const HomeRoot = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'below-icon',
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: active => {
            let iconColor
            active.focused ? (iconColor = 'red') : (iconColor = '#808080')
            console.log()
            return <Icon name='home' size={18} color={iconColor} />
          },
          tabBarLabel: active => {
            let color
            active.focused ? (color = 'red') : (color = '#808080')
            return (
              <Text style={{color: color, fontSize: 10, paddingBottom: 6}}>
                Home
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name='Explore'
        component={ExploreScreen}
        options={{
          tabBarIcon: active => {
            let iconColor
            active.focused ? (iconColor = 'red') : (iconColor = '#808080')
            console.log()
            return <Icon name='compass' size={18} color={iconColor} />
          },
          tabBarLabel: active => {
            let color
            active.focused ? (color = 'red') : (color = '#808080')
            return (
              <Text style={{color: color, fontSize: 10, paddingBottom: 6}}>
                Explore
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name='Subscriptions'
        component={SubscriptionsScreen}
        options={{
          tabBarIcon: active => {
            let iconColor
            active.focused ? (iconColor = 'red') : (iconColor = '#808080')
            console.log()
            return <Icon name='react' size={18} color={iconColor} />
          },
          tabBarLabel: active => {
            let color
            active.focused ? (color = 'red') : (color = '#808080')
            return (
              <Text style={{color: color, fontSize: 10, paddingBottom: 6}}>
                Subscriptions
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name='Inbox'
        component={InboxScreen}
        options={{
          tabBarIcon: active => {
            let iconColor
            active.focused ? (iconColor = 'red') : (iconColor = '#808080')
            console.log()
            return <Icon name='envelope' size={18} color={iconColor} />
          },
          tabBarLabel: active => {
            let color
            active.focused ? (color = 'red') : (color = '#808080')
            return (
              <Text style={{color: color, fontSize: 10, paddingBottom: 6}}>
                Inbox
              </Text>
            )
          },
        }}
      />

      <Tab.Screen
        name='Library'
        component={LibraryScreen}
        options={{
          tabBarIcon: active => {
            let iconColor
            active.focused ? (iconColor = 'red') : (iconColor = '#808080')
            console.log()
            return <Icon name='download' size={18} color={iconColor} />
          },
          tabBarLabel: active => {
            let color
            active.focused ? (color = 'red') : (color = '#808080')
            return (
              <Text style={{color: color, fontSize: 10, paddingBottom: 6}}>
                Library
              </Text>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}
const BottomTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
        }}>
        <Stack.Screen
          name='Home'
          component={HomeRoot}
          options={{
            header: ({navigation}) => <TopTab navigation={navigation} />,
          }}
        />
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='Account' component={AccountScreen} />
        <Stack.Screen name='Stream' component={StreamScreen} />
        <Stack.Screen name='History' component={HistoryScreen} />
        <Stack.Screen
          name='Downloads'
          options={{
            headerRight: ({navigation}) => (
              <View style={{flexDirection: 'row'}}>
                <Icon
                  style={{marginRight: 30}}
                  name='search'
                  size={20}
                  color={'#808080'}
                  onPress={() => (navigate('Search'))}
                />
                <Icon
                  style={{marginRight: 15}}
                  name='ellipsis-v'
                  size={20}
                  color={'#808080'}
                />
              </View>
            ),
          }}
          component={DownloadsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default BottomTab
