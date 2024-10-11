import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect } from "next/navigation";
import Link from "next/link";
import { memo } from "react";
import { SearchInput } from "@/components/ui/search-input";
import { TweetItem } from "@/components/tweet/tweet-item";
import { tweet } from "@/data/tweet";

const MemoizedFontAwesomeIcon = memo(FontAwesomeIcon);
type Props = {
  searchParams: {
    q: string | undefined;
  };
};
export default function Page({ searchParams }: Props) {
  if (!searchParams.q) {
    redirect("/");
  }

  const isMe = true;
  return (
    <div>
      <GeneralHeader backHref="/">
        <SearchInput defaultValue={searchParams.q} />
      </GeneralHeader>
      <section className="border-t-2 border-gray-900">
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
      </section>
    </div>
  );
}
