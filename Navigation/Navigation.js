import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'
import ExploreScreen from '../Screens/ExploreScreen'
import InboxScreen from '../Screens/InboxScreen'
import LibraryScreen from '../Screens/LibraryScreen'
import SubscriptionsScreen from '../Screens/SubscriptionsScreen'
import SearchScreen from '../Screens/SearchScreen'
import {navigationRef} from './RootNavigation'
const Stack = createStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Explore' component={ExploreScreen} />
        <Stack.Screen name='Inbox' component={InboxScreen} />
        <Stack.Screen name='Library' component={LibraryScreen} />
        <Stack.Screen name='Subscriptions' component={SubscriptionsScreen} />
        <Stack.Screen name='Search' component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
