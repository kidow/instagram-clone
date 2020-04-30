import * as React from 'react'
import { createContext, useState, useEffect } from 'react'
import { ActivityIndicator, Image } from 'react-native'
import Styled from '@emotion/native'
import AsyncStorage from '@react-native-community/async-storage'
import { IFeed, IUserProfile } from '~/types'

const Loading = Styled.View`
  flex: 1;
  background-color: #FEFFFF;
  align-items: center;
  justify-content: center;
`

interface Props {
  cache?: boolean
  children: JSX.Element | JSX.Element[]
}

interface IRnadomUserData {
  getMyFeed: (number?: number) => IFeed[]
}

const RandomUserDataContext = createContext<IRnadomUserData>({
  getMyFeed: (number: number = 10) => []
})

const RandomUserDataProvider = ({ cache, children }: Props) => {
  const [userList, setUserList] = useState<IUserProfile[]>([])
  const [descriptionList, setDescriptionList] = useState<string[]>([])
  const [imageList, setImageList] = useState<string[]>([])

  const getCacheData = async (key: string) => {
    const cacheData = await AsyncStorage.getItem(key)
    if (cache === false || cacheData === null) return
    const cacheList = JSON.parse(cacheData)
    if (cacheList.length !== 25) return
    return cacheList
  }
  const setCachedData = (key: string, data: any[]) =>
    AsyncStorage.setItem(key, JSON.stringify(data))

  const setUsers = async () => {
    const cachedData = await getCacheData('UserList')
    if (cachedData) return setUserList(cachedData)
    try {
      const response = await fetch('https://randomuser.me/api/?results=25')
      const data = await response.json()
      setUserList(data.results)
      setCachedData('UserList', data.results)
    } catch (err) {
      console.log(err)
    }
  }

  const setDescriptions = async () => {
    const cachedData = await getCacheData('DescriptionList')
    if (cachedData) return setDescriptionList(cachedData)
    try {
      const response = await fetch(
        'https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=25'
      )
      const data = await response.json()
      let text = []
      for (const index in data.quotes) text.push(data.quotes[index].quote)
      setDescriptionList(text)
      setCachedData('DescriptionList', text)
    } catch (err) {
      console.log(err)
    }
  }

  const setImages = async () => {
    const cachedData = await getCacheData('ImageList')
    if (cachedData) {
      if (Image.queryCache) {
        Image.queryCache(cachedData)
        cachedData.map((data: string) => Image.prefetch(data))
      }
      setImageList(cachedData)
      return
    }

    setTimeout(async () => {
      try {
        const { url } = await fetch('https://source.unsplash.com/random/')
        if (imageList.indexOf(url) >= 0) return setImages()
        setImageList([...imageList, url])
      } catch (err) {
        console.log(err)
      }
    }, 400)
  }

  useEffect(() => {
    setUsers()
    setDescriptions()
  }, [])

  useEffect(() => {
    if (imageList.length !== 25) setImages()
    else setCachedData('ImageList', imageList)
  }, [imageList])

  const getImages = (): string[] => {
    let images: string[] = []
    const count = Math.floor(Math.random() * 4)

    for (let i = 0; i <= count; i++) {
      images.push(imageList[Math.floor(Math.random() * 24)])
    }

    return images
  }
  const getMyFeed = (number: number = 10): IFeed[] => {
    let feeds: IFeed[] = []
    for (let i = 0; i < number; i++) {
      const user = userList[Math.floor(Math.random() * 24)]
      feeds.push({
        name: user.name,
        photo: user.photo,
        description: descriptionList[Math.floor(Math.random() * 24)],
        images: getImages()
      })
    }
    return feeds
  }
  return (
    <RandomUserDataContext.Provider value={{ getMyFeed }}>
      {userList.length === 25 &&
      descriptionList.length === 25 &&
      imageList.length === 25 ? (
        children
      ) : (
        <Loading>
          <ActivityIndicator color="#D3D3D3" size="large" />
        </Loading>
      )}
    </RandomUserDataContext.Provider>
  )
}

export { RandomUserDataProvider, RandomUserDataContext }
