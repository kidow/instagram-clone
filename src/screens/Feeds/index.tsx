import * as React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Feeds'>
}

const FeedsScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>FeedsScreen</Text>
    </View>
  )
}

export default FeedsScreen
