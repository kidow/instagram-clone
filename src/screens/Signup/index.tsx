import * as React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Signup'>
}

const SignupScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>SignupScreen</Text>
    </View>
  )
}

export default SignupScreen
