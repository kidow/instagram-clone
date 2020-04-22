import * as React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Login'>
}

const LoginScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen
