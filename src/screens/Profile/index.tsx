import * as React from 'react'
import { useState, useContext, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation, IFeed } from '~/types'
import styled from '@emotion/native'
import { RandomUserDataContext } from '~/store'
import {
  ReIconButton,
  ReTab,
  ReProfileHeader,
  ReProfileBody
} from '~/components'
import {
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  ImageSourcePropType,
  Image
} from 'react-native'

const ProfileTabContainer = styled.View`
  flex-direction: row;
  background-color: #feffff;
`
const FeedContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
const ImageContainer = styled.TouchableHighlight`
  background: #feffff;
  padding: 1px;
`

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Profile'>
}

const ProfileScreen = ({ navigation }: Props) => {
  const { getMyFeed } = useContext(RandomUserDataContext)
  const [feedList, setFeedList] = useState<IFeed[]>([])
  const imageWidth = Dimensions.get('window').width / 3
  const tabs = [
    require('~/assets/images/ic_grid_image_focus.png'),
    require('~/assets/images/ic_tag_image.png')
  ]
  useEffect(() => {
    setFeedList(getMyFeed(24))
  }, [])
  const isBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize
  }: NativeScrollEvent) =>
    layoutMeasurement.height + contentOffset.y >= contentSize.height
  return (
    <ScrollView
      stickyHeaderIndices={[2]}
      onScroll={(e) => {
        if (isBottom(e.nativeEvent))
          setFeedList([...feedList, ...getMyFeed(24)])
      }}
    >
      <ReProfileHeader
        image="http://api.randomuser.me/portraits/women/68.jpg"
        posts={3431}
        follower={6530}
        following={217}
      />
      <ReProfileBody
        name="Sara Lambert"
        description="On Friday, April 14, being Good-Friday, I repaired to him in the\nmorning, according to my usual custom on that day, and breakfasted\nwith him. I observed that he fasted so very strictly, that he did not\neven taste bread, and took no milk with his tea; I suppose because it\nis a kind of animal food."
      />
      <ProfileTabContainer>
        {tabs.map((image: ImageSourcePropType, index: number) => (
          <ReTab key={`tab-${index}`} selected={!index} imageSource={image} />
        ))}
      </ProfileTabContainer>
      <FeedContainer>
        {feedList.map((feed: IFeed, index: number) => (
          <ImageContainer
            key={`feed-list-${index}`}
            style={{
              paddingLeft: index % 3 === 0 ? 0 : 1,
              paddingRight: index % 3 === 2 ? 0 : 1,
              width: imageWidth
            }}
          >
            <Image
              source={{ uri: feed.images[0] }}
              style={{ width: imageWidth, height: imageWidth }}
            />
          </ImageContainer>
        ))}
      </FeedContainer>
    </ScrollView>
  )
}

// ProfileScreen.navigationOptions = {
//   title: 'Profile',
//   headerRight: <ReIconButton iconName="menu" onPress={navigation.openDrawer} />,
// }

export default ProfileScreen
