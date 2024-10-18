import { HomeFeed } from "@/app/(twitter)/_components/home/home-feed";
import { HomeHeader } from "@/app/(twitter)/_components/home/home-header";
import { TweetPost } from "@/app/(twitter)/_components/tweet/tweet-post";

export default function Page() {
  return (
    <>
      <HomeHeader />
      <TweetPost />
      <HomeFeed />
    </>
  );
}
