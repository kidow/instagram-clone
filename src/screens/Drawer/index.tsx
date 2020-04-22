import * as React from 'react'
import { View, Text } from 'react-native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { INavigation } from '~/types'

export interface Props {
  navigation: DrawerNavigationProp<INavigation, 'Drawer'>
}

const DrawerScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>DrawerScreen</Text>
    </View>
  )
}

export default DrawerScreen
