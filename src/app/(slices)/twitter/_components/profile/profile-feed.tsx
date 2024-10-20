import { memo } from "react";
import { TweetItem } from "../tweet/tweet-item";
import { tweet } from "@/app/(slices)/twitter/_data/tweet";

export const ProfileFeed = memo(() => {
  return (
    <div>
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
    </div>
  );
});
