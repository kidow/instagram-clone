import * as React from 'react'
import { View, Text, FlatList } from 'react-native'
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
  width: 52px;
  height: 52px;
  border-radius: 50px;
`
const StoryName = styled.Text`
  width: 100%;
  text-align: center;
`

export interface Props {
  storyList: IFeed[]
}

const ReStoryList = ({ storyList }: Props) => {
  return (
    <FlatList
      data={storyList}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `story-${index}`}
      renderItem={({ item, index }) => (
        <StoryContainer>
          <Story>
            <StoryBackground
              source={require('~/assets/images/story_background.png')}
            />
            <StoryImage source={{ uri: item.photo }} />
          </Story>
          <StoryName
            numberOfLines={1}
          >{`${item.name.first} ${item.name.last}`}</StoryName>
        </StoryContainer>
      )}
    />
  )
}

export default ReStoryList
