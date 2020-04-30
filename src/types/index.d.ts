export interface IUserProfile {
  name: {
    first: string
    last: string
  }
  photo: string
}

export interface IFeed extends IUserProfile {
  images: string[]
  description: string
}

export type INavigation = {
  [screen: string]: object
}
