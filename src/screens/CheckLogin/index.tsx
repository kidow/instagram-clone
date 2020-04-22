import * as React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'CheckLogin'>
}

const CheckLoginScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>CheckLoginScreen</Text>
    </View>
  )
}

export default CheckLoginScreen
