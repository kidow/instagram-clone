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
    'Feeds'
  >
}

const FeedsScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>FeedsScreen</Text>
    </View>
  )
}

export default FeedsScreen
