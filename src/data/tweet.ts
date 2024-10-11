import type { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
  id: 1,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib",
  user,
  image:
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
  likeCount: 10,
  retweetCount: 5,
  commentCount: 3,
  liked: true,
  retweeted: true,
  dataPost: new Date(2024, 2, 1, 10, 0, 0),
};
