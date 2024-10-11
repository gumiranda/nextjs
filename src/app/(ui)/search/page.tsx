import { GeneralHeader } from "@/components/ui/general-header";
import { redirect } from "next/navigation";
import { SearchInput } from "@/components/ui/search-input";
import { TweetItem } from "@/components/tweet/tweet-item";
import { tweet } from "@/data/tweet";

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
