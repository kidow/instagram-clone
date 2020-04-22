import * as React from 'react'
import { View, Text } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { INavigation } from '~/types'

export interface Props {
  navigation: BottomTabNavigationProp<INavigation, 'MyFeed'>
}

const MyFeedScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>MyFeedScreen</Text>
    </View>
  )
}

export default MyFeedScreen
