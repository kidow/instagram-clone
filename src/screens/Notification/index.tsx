import * as React from 'react'
import { View, Text } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { INavigation } from '~/types'

export interface Props {
  navigation: BottomTabNavigationProp<INavigation, 'Notification'>
}

const NotificationScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  )
}

export default NotificationScreen
