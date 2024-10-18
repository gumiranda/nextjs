import { HomeFeed } from "@/app/(slices)/twitter/_components/home/home-feed";
import { HomeHeader } from "@/app/(slices)/twitter/_components/home/home-header";
import { TweetPost } from "@/app/(slices)/twitter/_components/tweet/tweet-post";

export default function Page() {
  return (
    <>
      <HomeHeader />
      <TweetPost />
      <HomeFeed />
    </>
  );
}
