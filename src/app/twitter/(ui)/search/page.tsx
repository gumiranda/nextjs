import { GeneralHeader } from "@/shared/ui/atoms/twitter/general-header";
import { redirect } from "next/navigation";
import { SearchInput } from "@/shared/ui/molecules/twitter/search-input";
import { TweetItem } from "@/app/twitter/_components/tweet/tweet-item";
import { tweet } from "@/app/twitter/_data/tweet";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  let q = (await searchParams).q;
  if (Array.isArray(q)) {
    q = q[0];
  }
  if (!q) {
    redirect("/twitter");
  }

  return (
    <div>
      <GeneralHeader backHref="/twitter/">
        <SearchInput defaultValue={q} />
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
