import { GeneralHeader } from "@/shared/ui/atoms/twitter/general-header";
import { redirect } from "next/navigation";
import { SearchInput } from "@/shared/ui/molecules/twitter/search-input";
import { TweetItem } from "@/app/(twitter)/_components/tweet/tweet-item";
import { tweet } from "@/app/(twitter)/_data/tweet";

type Props = {
  searchParams: {
    q: string | undefined;
  };
};
export default function Page({ searchParams }: Props) {
  if (!searchParams.q) {
    redirect("/");
  }

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
