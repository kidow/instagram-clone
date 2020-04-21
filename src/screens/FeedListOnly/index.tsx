import * as React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface Props {
  navigation: StackNavigationProp<
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
    'FeedListOnly'
  >
}

const FeedListOnlyScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>FeedListOnlyScreen</Text>
    </View>
  )
}

export default FeedListOnlyScreen
