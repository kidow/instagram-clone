import * as React from 'react'
import { View, Text } from 'react-native'
import styled from '@emotion/native'
import { ReButton } from '..'

const Container = styled.View`
  flex-direction: row;
`
const ProfileImageContainer = styled.View`
  padding: 16px;
`
const ProfileImage = styled.Image`
  border-radius: 100px;
`
const ProfileContent = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: space-around;
`
const LabelContainer = styled.View`
  flex-direction: row;
`
const ProfileItem = styled.View`
  flex: 1;
  align-items: center;
`
const LabelCount = styled.Text`
  font-size: 16px;
  font-weight: bold;
`
const LabelTitle = styled.Text`
  font-weight: 300;
`

export interface Props {
  image: string
  posts: number
  follower: number
  following: number
}

const ReProfileHeader = ({ image, posts, follower, following }: Props) => {
  return (
    <Container>
      <ProfileImageContainer>
        <ProfileImage
          source={{ uri: image }}
          style={{ width: 100, height: 100 }}
        />
      </ProfileImageContainer>
      <ProfileContent>
        <LabelContainer>
          <ProfileItem>
            <LabelCount>{posts}</LabelCount>
            <LabelTitle>게시물</LabelTitle>
          </ProfileItem>
          <ProfileItem>
            <LabelCount>{follower}</LabelCount>
            <LabelTitle>팔로워</LabelTitle>
          </ProfileItem>
          <ProfileItem>
            <LabelCount>{following}</LabelCount>
            <LabelTitle>팔로잉</LabelTitle>
          </ProfileItem>
        </LabelContainer>
        <ReButton
          label="프로필 수정"
          style={{
            borderRadius: 4,
            backgroundColor: '#feffff',
            borderWidth: 1,
            borderColor: '#d3d3d3',
            height: 32
          }}
        />
      </ProfileContent>
    </Container>
  )
}

export default ReProfileHeader
