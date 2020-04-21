import * as React from 'react'
import styled from '@emotion/native'

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
  style?: object
  onPress?: () => void
}

const ReIconButton = ({ iconName, style, onPress }: Props) => {
  const imageSource = {
    camera: require('~/assets/image/ic_camera.png'),
    live: require('~/assets/image/ic_live.png'),
    send: require('~/assets/image/ic_send.png'),
    dotMenu: require('~/assets/image/ic_dot_menu.png'),
    favorite: require('~/assets/image/ic_favorite_outline.png'),
    comment: require('~/assets/image/ic_comment.png'),
    bookmark: require('~/assets/image/ic_bookmark.png'),
    menu: require('~/assets/image/ic_menu.png')
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
