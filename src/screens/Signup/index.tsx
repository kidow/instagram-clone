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
const Description = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #929292;
  margin: 6px 8px;
`
const TabContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`
const Footer = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
  padding: 8px;
`
const FooterDescription = styled.Text`
  color: #929292;
  text-align: center;
`
const GoBack = styled.Text`
  color: #3796ef;
`

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Signup'>
}

const SignupScreen = ({ navigation }: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const tabs = ['전화번호', '이메일']
  return (
    <Container>
      <FormContainer>
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
        <ReInput style={{ marginBottom: 16 }} placeholder={tabs[tabIndex]} />
        <ReButton label="다음" style={{ marginBottom: 24 }} />
        {!tabIndex && (
          <Description>
            Instagram의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을
            취소하실 수 있습니다.
          </Description>
        )}
      </FormContainer>
      <Footer>
        <FooterDescription>
          이미 계정이 있으신가요?{' '}
          <GoBack onPress={() => navigation.goBack()}>로그인</GoBack>
        </FooterDescription>
      </Footer>
    </Container>
  )
}

export default SignupScreen
