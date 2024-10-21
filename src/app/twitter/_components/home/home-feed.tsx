/* eslint-disable react/display-name */
import { memo } from "react";
import { TweetItem } from "../tweet/tweet-item";
import { tweet } from "@/app/twitter/_data/tweet";

export const HomeFeed = memo(() => {
  return (
    <div className="flex flex-col gap-4">
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
    </div>
  );
});
