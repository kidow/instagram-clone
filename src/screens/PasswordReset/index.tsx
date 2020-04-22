import * as React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'PasswordReset'>
}

const PasswordResetScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>PasswordResetScreen</Text>
    </View>
  )
}

export default PasswordResetScreen
