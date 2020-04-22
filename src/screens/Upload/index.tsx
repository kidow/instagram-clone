import * as React from 'react'
import { useState, useContext, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation, IFeed } from '~/types'
import styled from '@emotion/native'
import { RandomUserDataContext } from '~/store'
import { ReImageFeedList } from '~/components'

const SearchBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: cover;
`

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Upload'>
}

const UploadScreen = ({ navigation }: Props) => {
  const { getMyFeed } = useContext(RandomUserDataContext)
  const [feedList, setFeedList] = useState<IFeed[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setFeedList(getMyFeed(24))
  }, [])
  return (
    <ReImageFeedList
      feedList={feedList}
      loading={loading}
      onRefresh={() => {
        setLoading(true)
        setTimeout(() => {
          setFeedList(getMyFeed(24))
          setLoading(false)
        }, 2000)
      }}
      onEndReached={() => setFeedList([...feedList, ...getMyFeed(24)])}
      onPress={() => navigation.navigate('FeedListOnly')}
    />
  )
}

// UploadScreen.navigationOptions = {
//   title: '사진 업로드'
// }

export default UploadScreen
