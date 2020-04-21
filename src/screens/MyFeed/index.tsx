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
    'MyFeed'
  >
}

const MyFeedScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>MyFeedScreen</Text>
    </View>
  )
}

export default MyFeedScreen
