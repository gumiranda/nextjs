import type { User } from "./user";

export type Tweet = {
  id: number;
  body: string;
  image?: string;
  likeCount: number;
  commentCount: number;
  retweetCount: number;
  liked: boolean;
  retweeted: boolean;
  dataPost: Date;
  user: User;
};
