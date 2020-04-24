import * as React from 'react'
import styled from '@emotion/native'
import { StyleProp, ViewStyle } from 'react-native'

const Container = styled.TouchableOpacity`
  padding: 8px;
`
const Icon = styled.Image``

export interface Props {
  iconName:
    | 'camera'
    | 'live'
    | 'send'
    | 'dotMenu'
    | 'favorite'
    | 'comment'
    | 'bookmark'
    | 'menu'
  style?: StyleProp<ViewStyle>
  onPress?: () => void
}

const ReIconButton = ({ iconName, style, onPress }: Props) => {
  const imageSource = {
    camera: require('~/assets/images/ic_camera.png'),
    live: require('~/assets/images/ic_live.png'),
    send: require('~/assets/images/ic_send.png'),
    dotMenu: require('~/assets/images/ic_dot_menu.png'),
    favorite: require('~/assets/images/ic_favorite_outline.png'),
    comment: require('~/assets/images/ic_comment.png'),
    bookmark: require('~/assets/images/ic_bookmark.png'),
    menu: require('~/assets/images/ic_menu.png')
  }
  return (
    <Container
      style={style}
      onPress={() => {
        if (onPress && typeof onPress === 'function') onPress()
      }}
    >
      <Icon source={imageSource[iconName]} />
    </Container>
  )
}

export default ReIconButton
