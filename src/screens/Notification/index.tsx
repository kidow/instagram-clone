import * as React from 'react'
import { useState, useContext, useEffect, createRef } from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { INavigation, IFeed } from '~/types'
import styled from '@emotion/native'
import { ReTab, ReNotificationList } from '~/components'
import { RandomUserDataContext } from '~/store'

const ProfileTabContainer = styled.View`
  flex-direction: row;
  background-color: #feffff;
`
const Label = styled.Text`
  color: #929292;
  text-align: center;
`
const TabContainer = styled.SafeAreaView`
  width: 100%:
  height: ${Dimensions.get('window').height}px;
`

export interface Props {
  navigation: BottomTabNavigationProp<INavigation, 'Notification'>
}

const NotificationScreen = ({ navigation }: Props) => {
  const { getMyFeed } = useContext(RandomUserDataContext)
  const [followingList, setFollowingList] = useState<IFeed[]>([])
  const [myNotifications, setMyNotifications] = useState<IFeed[]>([])
  const [tabIndex, setTabIndex] = useState<number>(1)
  const { width } = Dimensions.get('window')
  const tabs = ['팔로잉', '내 소식']
  const refScrollView = createRef<ScrollView>()
  useEffect(() => {
    setFollowingList(getMyFeed(24))
    setMyNotifications(getMyFeed(24))
  }, [])
  return (
    <TabContainer>
      <ProfileTabContainer>
        {tabs.map((label, index) => (
          <ReTab
            key={`tab-${index}`}
            selected={tabIndex === index}
            label={label}
            onPress={() => {
              setTabIndex(index)
              if (refScrollView.current)
                refScrollView.current.scrollTo({
                  x: width + index,
                  y: 0,
                  animated: true
                })
            }}
          />
        ))}
      </ProfileTabContainer>
      <ScrollView
        ref={refScrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        stickyHeaderIndices={[0]}
        onScroll={(e) => setTabIndex(e.nativeEvent.contentOffset.x / width)}
        contentOffset={{ x: width, y: 0 }}
      >
        <ReNotificationList
          id={0}
          width={width}
          data={followingList}
          onEndReached={() =>
            setFollowingList([...followingList, ...getMyFeed(24)])
          }
        />
        <ReNotificationList
          id={1}
          width={width}
          data={myNotifications}
          onEndReached={() =>
            setMyNotifications([...myNotifications, ...getMyFeed(24)])
          }
        />
      </ScrollView>
    </TabContainer>
  )
}

export default NotificationScreen
