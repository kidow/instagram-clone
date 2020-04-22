import * as React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'FeedListOnly'>
}

const FeedListOnlyScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>FeedListOnlyScreen</Text>
    </View>
  )
}

export default FeedListOnlyScreen
