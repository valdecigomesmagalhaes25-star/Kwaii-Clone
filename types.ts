
export interface User {
  id: string;
  username: string;
  email: string;
  balance: number;
  profilePic?: string;
  videosPublished: number;
}

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  publisherId: string;
  publisherName: string;
  views: number;
  likes: number;
  comments: number;
  timestamp: number;
}

export enum AuthScreen {
  LOGIN,
  SIGNUP,
  FORGOT_PASSWORD
}

export enum AppTab {
  FEED,
  DISCOVER,
  UPLOAD,
  REWARDS,
  PROFILE
}
