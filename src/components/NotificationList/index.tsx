import * as React from 'react'
import { FlatList, Image } from 'react-native'
import styled from '@emotion/native'
import { IFeed } from '~/types'

const NotificationContainer = styled.View`
  flex-direction: row;
  padding: 8px 16px;
  align-items: center;
`
const ProfileImage = styled.Image`
  border-radius: 40px;
  width: 50px;
  height: 50px;
`
const LabelName = styled.Text`
  font-weight: bold;
`
const Message = styled.Text`
  flex: 1;
  padding: 0 16px;
`

export interface Props {
  id: number
  width: number
  data: IFeed[]
  onEndReached: () => void
}

const ReNotificationList = ({ id, width, data, onEndReached }: Props) => {
  return (
    <FlatList
      data={data}
      style={{ width }}
      keyExtractor={(item, index) => `notification-${id}-${index}`}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({ item, index }) => (
        <NotificationContainer>
          <ProfileImage source={{ uri: item.photo }} />
          <Message numberOfLines={2}>
            <LabelName>{`${item.name.first} ${item.name.last}`}</LabelName>님이
            회원님의 게시물을 좋아합니다.
          </Message>
          <Image
            source={{ uri: item.images[0] }}
            style={{ width: 50, height: 50 }}
          />
        </NotificationContainer>
      )}
    ></FlatList>
  )
}

export default ReNotificationList
