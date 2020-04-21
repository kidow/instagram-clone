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
    'CheckLogin'
  >
}

const CheckLoginScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>CheckLoginScreen</Text>
    </View>
  )
}

export default CheckLoginScreen
