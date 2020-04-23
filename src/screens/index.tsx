import * as React from 'react'
import { Image } from 'react-native'
import styled from '@emotion/native'
import { ReIconButton, ReInput } from '~/components'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CheckLoginScreen from './CheckLogin'
import DrawerScreen from './Drawer'
import FeedListOnlyScreen from './FeedListOnly'
import FeedsScreen from './Feeds'
import LoginScreen from './Login'
import MyFeedScreen from './MyFeed'
import NotificationScreen from './Notification'
import PasswordResetScreen from './PasswordReset'
import ProfileScreen from './Profile'
import SignupScreen from './Signup'
import UploadScreen from './Upload'

const DrawerNav = createDrawerNavigator()
const MainTabNavigator = () => {
  return (
    <DrawerNav.Navigator
      drawerType="slide"
      drawerPosition="right"
      drawerContent={() => DrawerScreen}
    >
      <DrawerNav.Screen name="MainTabs" component={TabsScreen} />
    </DrawerNav.Navigator>
  )
}

const MainTabs = createBottomTabNavigator()
const TabsScreen = () => {
  return (
    <MainTabs.Navigator
      initialRouteName="MyFeed"
      tabBarOptions={{ showLabel: false }}
    >
      <MainTabs.Screen
        name="MyFeedScreen"
        component={MyFeedNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('~/assets/images/ic_add.png')
                  : require('~/assets/images/ic_add_outline.png')
              }
            />
          )
        }}
      />
      <MainTabs.Screen
        name="FeedsScreen"
        component={FeedsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('~/assets/images/ic_search.png')
                  : require('~/assets/images/ic_search_outline.png')
              }
            />
          )
        }}
      />
      <MainTabs.Screen
        name="UploadScreen"
        component={UploadNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('~/assets/images/ic_add.png')
                  : require('~/assets/images/ic_add_outline.png')
              }
            />
          )
        }}
      />
      <MainTabs.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('~/assets/images/ic_favorite.png')
                  : require('~/assets/images/ic_favorite_outline.png')
              }
            />
          )
        }}
      />
      <MainTabs.Screen
        name="ProfileScreen"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('~/assets/images/ic_profile.png')
                  : require('~/assets/images/ic_profile_outline.png')
              }
            />
          )
        }}
      />
    </MainTabs.Navigator>
  )
}

const LoginStack = createStackNavigator()
const LoginNavigator = () => {
  return (
    <LoginStack.Navigator initialRouteName="Login" headerMode="none">
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <LoginStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ header: () => null }}
      />
      <LoginStack.Screen
        name="PasswordReset"
        component={PasswordResetScreen}
        options={{ header: () => null }}
      />
    </LoginStack.Navigator>
  )
}

const MyFeedStack = createStackNavigator()
const MyFeedNavigator = () => {
  return (
    <MyFeedStack.Navigator>
      <MyFeedStack.Screen
        name="MyFeed"
        component={MyFeedScreen}
        options={{
          title: 'Instagram',
          headerLeft: () => <ReIconButton iconName="camera" />,
          headerRight: () => (
            <>
              <ReIconButton iconName="live" />
              <ReIconButton iconName="send" />
            </>
          )
        }}
      />
    </MyFeedStack.Navigator>
  )
}

const SearchBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

const FeedsStack = createStackNavigator()
const FeedsNavigator = () => {
  return (
    <FeedsStack.Navigator>
      <FeedsStack.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          headerTitle: () => (
            <SearchBar>
              <ReInput
                style={{ flex: 1, marginLeft: 8, height: 32 }}
                placeholder="검색"
              />
              <ReIconButton iconName="camera" />
            </SearchBar>
          ),
          headerBackTitle: ''
        }}
      />
      <FeedsStack.Screen
        name="FeedListOnly"
        component={FeedListOnlyScreen}
        options={{ title: '둘러보기', headerTintColor: '#292929' }}
      />
    </FeedsStack.Navigator>
  )
}

const UploadStack = createStackNavigator()
const UploadNavigator = () => {
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen name="Upload" component={UploadScreen} />
    </UploadStack.Navigator>
  )
}

const ProfileStack = createStackNavigator()
const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: '내 정보',
          headerRight: () => (
            <ReIconButton iconName="menu" onPress={navigation.openDrawer()} />
          )
        })}
      />
    </ProfileStack.Navigator>
  )
}

const Stack = createStackNavigator()
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CheckLogin">
        <Stack.Screen name="CheckLogin" component={CheckLoginScreen} />
        <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
        <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
