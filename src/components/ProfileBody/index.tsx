import * as React from 'react'
import { View, Text } from 'react-native'
import styled from '@emotion/native'

const Container = styled.View`
  padding: 0 16px 8px;
  border-bottom-width: 1px;
  border-color: #d3d3d3;
`
const LabelName = styled.Text`
  font-weight: bold;
  margin-bottom: 8px;
`
const LabelDescription = styled.Text`
  line-height: 20px;
`

export interface Props {
  name: string
  description?: string
}

const ReProfileBody = ({ name, description }: Props) => {
  return (
    <Container>
      <LabelName>{name}</LabelName>
      <LabelDescription numberOfLines={5}>{description}</LabelDescription>
    </Container>
  )
}

export default ReProfileBody
