import { observable, action } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'

export interface IRoot {}

class RootStore {
  // @observable userList = []
  // @observable descriptionList = []
  // @observable imageList = []
  // constructor() {}
  // @action
  // getCacheData = async (key: string) => {
  //   const cacheData = await AsyncStorage.getItem(key)
  //   if (!cacheData) return
  //   const cacheList = JSON.parse(cacheData)
  //   if (cacheList.length !== 25) return
  //   return cacheList
  // }
  // @action
  // setCachedData = (key: string, data: any[]) =>
  //   AsyncStorage.setItem(key, JSON.stringify(data))
  // @action
  // setUsers = async () => {
  //   const cachedData = await
  // }
}

export default RootStore
