import * as React from 'react'
import { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation } from '~/types'
import styled from '@emotion/native'
import { ReInput, ReButton, ReTab } from '~/components'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #feffff;
`
const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px;
`
const LockImageContainer = styled.View`
  padding: 24px;
  border-width: 2px;
  border-color: #292929;
  border-radius: 80px;
  margin-bottom: 24px;
`
const LockImage = styled.Image``
const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 16px;
`
const Description = styled.Text`
  text-align: center;
  margin-bottom: 16px;
  color: #292929;
`
const TabContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`
const HelpLabel = styled.Text`
  color: #3796ef;
`
const Footer = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
  padding: 8px;
`
const GoBack = styled.Text`
  color: #379bef;
  text-align: center;
`

export interface Props {
  navigation: StackNavigationProp<INavigation, 'PasswordReset'>
}

const PasswordResetScreen = ({ navigation }: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const tabs = ['사용자 이름', '전화번호']
  const tabDescriptions = [
    '사용자 이름 또는 이메일을 입력하면 다시 계정에 로그인할 수 있는 링크를 보내드립니다.',
    '전화번호를 입력하면 계정에 다시 액세스할 수 있는 코드를 보내드립니다.'
  ]
  const placeholders = ['사용자 이름 또는 이메일', '전화번호']

  return (
    <Container>
      <FormContainer>
        <LockImageContainer>
          <LockImage source={require('~/assets/images/lock.png')} />
        </LockImageContainer>
        <Title>로그인에 문제가 있나요?</Title>
        <Description>{tabDescriptions[tabIndex]}</Description>
        <TabContainer>
          {tabs.map((label, index) => (
            <ReTab
              key={`tab-${index}`}
              selected={tabIndex === index}
              label={label}
              onPress={() => setTabIndex(index)}
            />
          ))}
        </TabContainer>
        <ReInput
          style={{ marginBottom: 16 }}
          placeholder={placeholders[tabIndex]}
        />
        <ReButton label="다음" style={{ marginBottom: 24 }} />
        <HelpLabel>도움이 더 필요한가요?</HelpLabel>
      </FormContainer>
      <Footer>
        <GoBack onPress={() => navigation.goBack()}>로그인으로 돌아가기</GoBack>
      </Footer>
    </Container>
  )
}

// PasswordResetScreen.navigationOptions = {
//   header: null
// }

export default PasswordResetScreen
