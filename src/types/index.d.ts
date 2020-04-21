export interface IUserProfile {
  name: string
  photo: string
}

export interface IFeed extends IUserProfile {
  images: Array<string>
  description: string
}
