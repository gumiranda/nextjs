import { GeneralHeader } from "@/shared/ui/atoms/twitter/general-header";

import { TweetItem } from "@/app/(slices)/twitter/_components/tweet/tweet-item";
import { tweet } from "@/app/(slices)/twitter/_data/tweet";
import { TweetPost } from "@/app/(slices)/twitter/_components/tweet/tweet-post";

export default function Page() {
  return (
    <div>
      <GeneralHeader backHref="/twitter/">
        <div className="font-bold text-lg">Voltar</div>
      </GeneralHeader>
      <section className="border-t-2 border-gray-900">
        <TweetItem tweet={tweet} />
        <div className="border-y-8 border-gray-800">
          <TweetPost />
        </div>
        <TweetItem tweet={tweet} hideComments />
        <TweetItem tweet={tweet} hideComments />
        <TweetItem tweet={tweet} hideComments />
      </section>
    </div>
  );
}
