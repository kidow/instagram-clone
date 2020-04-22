import * as React from 'react'
import styled from '@emotion/native'
import { StyleProp, ViewStyle } from 'react-native'

const StyleButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: #e796ef;
`

const Label = styled.Text`
  color: #fff;
`

export interface Props {
  label: string
  style?: StyleProp<ViewStyle>
  color?: string
  onPress?: () => void
}

const ReButton = ({ label, style, color, onPress }: Props) => {
  return (
    <StyleButton style={style} onPress={onPress}>
      <Label style={{ color: color || '#fff' }}>{label}</Label>
    </StyleButton>
  )
}

export default ReButton
