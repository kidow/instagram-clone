export interface IUserProfile {
  name: string
  photo: string
}

export interface IFeed extends IUserProfile {
  images: string[]
  description: string
}

export type INavigation = {
  [screen: string]: object
}
