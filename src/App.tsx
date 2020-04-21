import * as React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'

import AsyncStorage from '@react-native-community/async-storage'

import Navigator from './screens'

interface Props {}

const App = ({}: Props) => {
  return (
    <>
      <Header />
      <Navigator />
    </>
  )
}

export default App
