import * as React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import styled from '@emotion/native'
import { NavigationHelpers } from '@react-navigation/native'
import { DrawerNavigationEventMap } from '@react-navigation/drawer/lib/typescript/src/types'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #feffff;
`
const Header = styled.View`
  border-bottom-width: 1px;
  border-color: #d3d3d3;
  padding: 8px 16px;
`
const Title = styled.Text``
const Button = styled.TouchableHighlight`
  padding: 8px 16px;
`
const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
const Icon = styled.Image`
  margin-right: 8px;
`
const Label = styled.Text`
  font-size: 16px;
`
const Footer = styled.View`
  position: absolute;
  bottom: 32px;
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
`

export interface Props {
  // navigation: DrawerNavigationProp<INavigation, 'Drawer'>
  navigation: NavigationHelpers<
    Record<string, object | undefined>,
    DrawerNavigationEventMap
  >
}

const DrawerScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <Header>
        <Title>Sara Lambert</Title>
      </Header>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/assets/images/ic_camera.png')} />
          <Label>사진</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/assets/images/ic_live.png')} />
          <Label>라이브</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/assets/images/ic_favorite_outline.png')} />
          <Label>팔로워</Label>
        </ButtonContainer>
      </Button>
      <Footer>
        <Button
          onPress={() => {
            AsyncStorage.removeItem('key')
            navigation.navigate('CheckLogin')
          }}
        >
          <ButtonContainer>
            <Icon source={require('~/assets/images/ic_profile_outline.png')} />
            <Title>로그아웃</Title>
          </ButtonContainer>
        </Button>
      </Footer>
    </Container>
  )
}

export default DrawerScreen
