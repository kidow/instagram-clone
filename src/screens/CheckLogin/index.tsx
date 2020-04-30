import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'
import styled from '@emotion/native'
import AsyncStorage from '@react-native-community/async-storage'

const Container = styled.View`
  flex: 1;
  background-color: #efefef;
  justify-content: center;
  align-items: center;
`

export interface Props {
  navigation: StackNavigationProp<INavigation, 'CheckLogin'>
}

const CheckLoginScreen = ({ navigation }: Props) => {
  AsyncStorage.getItem('key').then((value) =>
    value
      ? navigation.navigate('MainTabNavigator')
      : navigation.navigate('LoginNavigator')
  )
  return <Container />
}

export default CheckLoginScreen
