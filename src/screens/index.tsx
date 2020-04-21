import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CheckLoginScreen from './CheckLogin'
import DrawerScreen from './Drawer'
import FeedListOnlyScreen from './FeedListOnly'
import FeedsScreen from './Feeds'
import LoginScreen from './Login'
import MyFeedScreen from './MyFeed'
import NotificationScreen from './Notification'
import PasswordResetScreen from './PasswordReset'
import ProfileScreen from './Profile'
import SignupScreen from './Signup'
import UploadScreen from './Upload'

const Navigator = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
    </>
  )
}

export default Navigator
