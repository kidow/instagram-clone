import * as React from 'react'
import { StatusBar } from 'react-native'
import Navigator from './screens'
import { RandomUserDataProvider } from './store'

interface Props {}

const App = ({}: Props) => {
  return (
    <RandomUserDataProvider cache>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </RandomUserDataProvider>
  )
}

export default App
