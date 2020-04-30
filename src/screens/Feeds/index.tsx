import * as React from 'react'
import { useContext, useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation, IFeed } from '~/types'
import { RandomUserDataContext } from '~/store'
import { ReImageFeedList } from '~/components'

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Feeds'>
}

const FeedsScreen = ({ navigation }: Props) => {
  const { getMyFeed } = useContext(RandomUserDataContext)
  const [feedList, setFeedList] = useState<IFeed[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const onRefresh = () => {
    setLoading(true)
    setTimeout(() => {
      setFeedList(getMyFeed(24))
      setLoading(false)
    }, 2000)
  }
  useEffect(() => {
    setFeedList(getMyFeed(24))
  }, [])
  return (
    <ReImageFeedList
      feedList={feedList}
      loading={loading}
      onRefresh={onRefresh}
      onEndReached={() => setFeedList([...feedList, ...getMyFeed(24)])}
      onPress={() => navigation.navigate('FeedListOnly')}
    />
  )
}

export default FeedsScreen
