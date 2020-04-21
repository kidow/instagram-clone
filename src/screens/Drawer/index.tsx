import * as React from 'react'
import { View, Text } from 'react-native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

export interface Props {
  navigation: DrawerNavigationProp<
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
    'Drawer'
  >
}

const DrawerScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>DrawerScreen</Text>
    </View>
  )
}

export default DrawerScreen
