/* eslint-disable @next/next/no-img-element */
"use client";
import type { Tweet } from "@/app/(slices)/(twitter)/_types/tweet";
import { formatRelativeTime } from "@/shared/lib/format-relative";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faHeart as faHeartFilled,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { memo, useState } from "react";

const MemoizedFontAwesomeIcon = memo(FontAwesomeIcon);

type Props = {
  tweet: Tweet;
  hideComments?: boolean;
};
export const TweetItem = ({ tweet, hideComments = false }: Props) => {
  const [liked, setLiked] = useState(false);
  const handleLikeButton = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/${tweet.user.slug}`}>
          <img
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="rounded-full size-10"
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3">
          <div className="text-lg font-bold">
            <Link href={`/${tweet.user.slug}`}>{tweet.user.name}</Link>
          </div>
          <div className="text-md text-gray-500">
            @{tweet.user.slug} - {formatRelativeTime(tweet.dataPost)}
          </div>
        </div>
        <div className="py-4 text-lg">{tweet.body}</div>
        {tweet.image && (
          <div className="w-full">
            <img
              src={tweet.image}
              alt={tweet.user.name}
              className="w-full rounded-2xl"
            />
          </div>
        )}
        <div className="flex mt-6 text-gray-500">
          {!hideComments && (
            <div className="flex-1">
              <Link href={`/tweet/${tweet.id}`}>
                <div className="inline-flex items-center gap-2 cursor-pointer">
                  <MemoizedFontAwesomeIcon
                    icon={faComment}
                    className="size-6"
                  />
                  <div className="text-lg">{tweet.commentCount}</div>
                </div>
              </Link>
            </div>
          )}

          <div className="flex-1">
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <MemoizedFontAwesomeIcon icon={faRetweet} className="size-6" />
              <div className="text-lg">{tweet.retweetCount}</div>
            </div>
          </div>
          <div className="flex-1">
            <div
              onClick={handleLikeButton}
              className={`inline-flex items-center gap-2 cursor-pointer ${
                liked && "text-red-400"
              }`}
            >
              <MemoizedFontAwesomeIcon
                icon={liked ? faHeartFilled : faHeart}
                className="size-6"
              />
              <div className="text-lg">{tweet.likeCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
