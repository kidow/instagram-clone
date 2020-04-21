import * as React from 'react'
import { ImageSourcePropType } from 'react-native'
import styled from '@emotion/native'

const Container = styled.TouchableOpacity`
  flex: 1;
  border-bottom-width: 1px;
  border-color: #929292;
  padding-bottom: 8px;
  align-items: center;
  justify-content: center;
`
const Label = styled.Text`
  font-size: 16px;
  color: #929292;
  text-align: center;
`
const TabImage = styled.Image`
  margin-top: 8px;
`

export interface Props {
  selected: boolean
  label?: string
  imageSource?: ImageSourcePropType
  onPress?: () => void
}

const ReTab = ({ selected, label, imageSource, onPress }: Props) => {
  const color: string = selected ? '#292929' : '#929292'
  return (
    <Container
      activeOpacity={1}
      style={{ borderColor: color }}
      onPress={onPress}
    >
      {!!label && <Label style={{ color }}>{label}</Label>}
      {!!imageSource && <TabImage source={imageSource} />}
    </Container>
  )
}

export default ReTab
