import * as React from 'react'
import { useState, useContext, useEffect } from 'react'
import { FlatList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation, IFeed } from '~/types'
import { ReFeed } from '~/components'
import { RandomUserDataContext } from '~/store'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'FeedListOnly'>
}

const FeedListOnlyScreen = ({ navigation }: Props) => {
  const { getMyFeed } = useContext(RandomUserDataContext)
  const [feedList, setFeedList] = useState<IFeed[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setFeedList(getMyFeed())
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
          setLoading(false)
        }, 2000)
      }}
      onEndReached={() => setFeedList([...feedList, ...getMyFeed()])}
      onEndReachedThreshold={0.5}
      refreshing={loading}
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

// FeedListOnlyScreen.navigationOptions = {
//   title: '둘러보기',
//   headerTintColor: '#292929'
// }

export default FeedListOnlyScreen
