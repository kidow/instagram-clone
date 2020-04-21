import * as React from 'react'
import { View, Text } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export interface Props {
  navigation: BottomTabNavigationProp<
    {
      CheckLogin: {}
      Drawer: {}
      FeedListOnly: {}
      Feeds: {}
      Login: {}
      MyFeed: {}
      Notification: {}
      PasswordReset: {}
      Profile: {}
      Signup: {}
      Upload: {}
    },
    'Notification'
  >
}

const NotificationScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  )
}

export default NotificationScreen
