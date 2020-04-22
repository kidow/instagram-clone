export interface IUserProfile {
  name: string
  photo: string
}

export interface IFeed extends IUserProfile {
  images: Array<string>
  description: string
}

export type INavigation = {
  CheckLogin: {}
  Drawer: {}
  FeedListOnly: {}
  Feeds: {}
  Login: {}
  MyFeed: {}
  Notification: {}
  PasswordReset: {}
  Profile: {}
  Signup: {}
  Upload: {}
}
