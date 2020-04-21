import * as React from 'react'
import { View, Text } from 'react-native'
import styled from '@emotion/native'
import { ReIconButton } from '..'
import { IFeed } from '~/types'

const StoryContainer = styled.View`
  padding: 8px;
  width: 72px;
`
const Story = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`
const StoryBackground = styled.Image`
  position: absolute;
`
const StoryImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`
const StoryName = styled.Text`
  width: 100%;
  text-align: center;
`

export interface Props {
  storyList: Array<IFeed>
}

const ReStoryList = ({}: Props) => {
  return (
    <View>
      <Text>ReStoryList</Text>
    </View>
  )
}

export default ReStoryList
