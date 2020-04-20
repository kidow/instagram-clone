import * as React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

interface Props {}

const CheckLogin = () => (
  <View>
    <Text>CheckLogin</Text>
  </View>
)

const Stack = createStackNavigator()
const App = ({}: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName="CheckLogin">
          <Stack.Screen name="CheckLogin" component={CheckLogin} />
        </Stack.Navigator>
        <Text>asd</Text>
      </NavigationContainer>
    </>
  )
}

export default App
