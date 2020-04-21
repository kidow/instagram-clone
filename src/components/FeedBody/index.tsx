import * as React from 'react'
import { Dimensions, Image } from 'react-native'
import styled from '@emotion/native'
import { ReIconButton } from '..'
import { ScrollView } from 'react-native-gesture-handler'

const Container = styled.View``
const ImageContainer = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #d3d3d3;
  width: ${Dimensions.get('window').width}px;
  height: 400px;
`
const FeedImageIndicatorContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const FeedImageIndicator = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin: 2px;
`
const FeedMenuContainer = styled.View`
  flex-direction: row;
`
const MenuContainer = styled.View`
  flex: 1;
  flex-direction: row;
`

export interface Props {
  id: number
  images: Array<String>
}

const ReFeedBody = ({ id, images }: Props) => {
  const [indicatorIndex, setIndicatorIndex] = React.useState<number>(0)
  const imagesLength = images.length
  return (
    <Container>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={imagesLength > 1}
        onScroll={(e) =>
          setIndicatorIndex(
            e.nativeEvent.contentOffset.x / Dimensions.get('window').width
          )
        }
      >
        {images.map((image, index) => (
          <ImageContainer key={`FeedImage-${id}-${index}`}>
            <Image
              source={{ uri: image as string }}
              style={{ width: Dimensions.get('window').width, height: 400 }}
            />
          </ImageContainer>
        ))}
      </ScrollView>
      <FeedMenuContainer>
        <MenuContainer>
          <ReIconButton iconName="favorite" />
          <ReIconButton iconName="comment" />
          <ReIconButton iconName="send" />
        </MenuContainer>
        <MenuContainer>
          <FeedImageIndicatorContainer>
            {imagesLength > 1 &&
              images.map((image, index) => (
                <FeedImageIndicator
                  key={`FeedImageIndicator-${id}-${index}`}
                  style={{
                    backgroundColor:
                      indicatorIndex >= index && indicatorIndex < index + 1
                        ? '#3796EF'
                        : '#d3d3d3'
                  }}
                />
              ))}
          </FeedImageIndicatorContainer>
        </MenuContainer>
        <MenuContainer style={{ justifyContent: 'flex-end' }}>
          <ReIconButton iconName="bookmark" />
        </MenuContainer>
      </FeedMenuContainer>
    </Container>
  )
}

export default ReFeedBody
