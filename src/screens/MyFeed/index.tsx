import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FlatList } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { INavigation, IFeed } from '~/types'
import { ReIconButton, ReFeed, ReStoryList } from '~/components'
import { RandomUserDataContext } from '~/store'

export interface Props {
  navigation: BottomTabNavigationProp<INavigation, 'MyFeed'>
}

const MyFeedScreen = ({ navigation }: Props) => {
  const { getMyFeed } = useContext(RandomUserDataContext)
  const [feedList, setFeedList] = useState<IFeed[]>([])
  const [storyList, setStoryList] = useState<IFeed[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setFeedList(getMyFeed())
    setStoryList(getMyFeed())
  }, [])
  return (
    <FlatList
      data={feedList}
      keyExtractor={(item, index) => `myfeed-${index}`}
      showsVerticalScrollIndicator={false}
      onRefresh={() => {
        setLoading(true)
        setTimeout(() => {
          setFeedList(getMyFeed())
          setStoryList(getMyFeed())
          setLoading(false)
        }, 2000)
      }}
      onEndReached={() => setFeedList([...feedList, ...getMyFeed()])}
      onEndReachedThreshold={0.5}
      refreshing={loading}
      ListHeaderComponent={<ReStoryList storyList={storyList} />}
      renderItem={({ item, index }) => (
        <ReFeed
          id={index}
          name={item.name}
          photo={item.photo}
          description={item.description}
          images={item.images}
        />
      )}
    />
  )
}

// MyFeedScreen.navigationOptions = {
//   title: 'Instagram',
//   headerLeft: <ReIconButton iconName="camera" />,
//   headerRight: (
//     <>
//       <ReIconButton iconName="live" />
//       <ReIconButton iconName="send" />
//     </>
//   )
// }

export default MyFeedScreen
