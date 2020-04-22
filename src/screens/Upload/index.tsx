import * as React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Upload'>
}

const UploadScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>UploadScreen</Text>
    </View>
  )
}

export default UploadScreen
