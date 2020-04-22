import * as React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Profile'>
}

const ProfileScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen
