import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'
import styled from '@emotion/native'
import { ReInput, ReButton } from '~/components'
import AsyncStorage from '@react-native-community/async-storage'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #feffff;
`
const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 32px;
`
const Logo = styled.Text`
  color: #292929;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`
const PasswordReset = styled.Text`
  width: 100%;
  color: #3796ef;
  text-align: right;
  margin-bottom: 24px;
`
const SignupText = styled.Text`
  color: #929292;
  text-align: center;
`
const SignupLink = styled.Text`
  color: #3796ef;
`
const Footer = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
  padding: 8px;
`
const Copyright = styled.Text`
  color: #929292;
  text-align: center;
`

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Login'>
}

const LoginScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <FormContainer>
        <Logo>Instagram</Logo>
        <ReInput style={{ marginBottom: 16 }} placeholder="이메일" />
        <ReInput
          style={{ marginBottom: 16 }}
          placeholder="비밀번호"
          secureTextEntry
        />
        <PasswordReset onPress={() => navigation.navigate('PasswordReset')}>
          비밀번호 재설정
        </PasswordReset>
        <ReButton
          label="로그인"
          style={{ marginBottom: 24 }}
          onPress={() => {
            AsyncStorage.setItem('key', 'JWT_KEY')
            navigation.navigate('MainTabNavigator')
          }}
        />
        <SignupText>
          계정이 없으신가요?{' '}
          <SignupLink onPress={() => navigation.navigate('Signup')}>
            가입하기.
          </SignupLink>
        </SignupText>
      </FormContainer>
      <Footer>
        <Copyright>Instagram from kidow</Copyright>
      </Footer>
    </Container>
  )
}

export default LoginScreen
