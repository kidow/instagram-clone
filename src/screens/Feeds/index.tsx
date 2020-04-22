import * as React from 'react'
import { useContext, useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigation, IFeed } from '~/types'
import styled from '@emotion/native'
import { RandomUserDataContext } from '~/store'
import { ReIconButton, ReInput, ReImageFeedList } from '~/components'

const SearchBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export interface Props {
  navigation: StackNavigationProp<INavigation, 'Feeds'>
}

const FeedsScreen = ({ navigation }: Props) => {
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

// FeedsScreen.navigationOptions = {
//   headerTitle: (
//     <SearchBar>
//       <ReInput
//         style={{ flex: 1, marginLeft: 8, height: 32 }}
//         placeholder="검색"
//       />
//       <ReIconButton iconName="camera" />
//     </SearchBar>
//   ),
//   headerBackTitle: null
// }

export default FeedsScreen
