import * as React from 'react'
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
  Image
} from 'react-native'
import styled from '@emotion/native'
import { FlatList } from 'react-native-gesture-handler'
import { IFeed } from '~/types'

const ImageContainer = styled.TouchableOpacity`
  background: #feffff;
  padding: 1px;
`

export interface Props {
  id?: number
  bounces?: boolean
  scrollEnabled?: boolean
  feedList: Array<IFeed>
  loading?: boolean
  onRefresh?: () => void
  onEndReached?: () => void
  onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void
  onPress?: () => void
}

const ReImageFeedList = ({
  id,
  bounces = true,
  scrollEnabled = true,
  feedList,
  loading,
  onRefresh,
  onPress,
  onEndReached,
  onScroll
}: Props) => {
  const width = Dimensions.get('window').width
  const imageWidth = width / 3
  return (
    <FlatList
      data={feedList}
      style={{ width }}
      keyExtractor={(item, index) => `image-feed-${id}-${index}`}
      showsVerticalScrollIndicator={false}
      scrollEnabled={scrollEnabled}
      bounces={bounces}
      numColumns={3}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      refreshing={loading}
      onScroll={onScroll}
      scrollEventThrottle={400}
      renderItem={({ item, index }) => (
        <ImageContainer
          style={{
            paddingLeft: index % 3 === 0 ? 0 : 1,
            paddingRight: index % 3 === 2 ? 0 : 1
          }}
          onPress={onPress}
        >
          <Image
            source={{ uri: item.images[0] }}
            style={{ width: imageWidth, height: imageWidth }}
          />
        </ImageContainer>
      )}
    />
  )
}

export default ReImageFeedList
