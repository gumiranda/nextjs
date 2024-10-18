"use client";
import type { User } from "@/app/(twitter)/_types/user";
import Link from "next/link";
import { Button } from "@/shared/ui/atoms/twitter/button";
import { useState } from "react";

type Props = {
  user: User;
};
export const RecommendationItem = ({ user }: Props) => {
  const [following, setFollowing] = useState(false);
  const handleFollowButton = () => {
    setFollowing(true);
  };
  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`} className="group/item">
          <img src={user.avatar} alt={user.name} className="size-full" />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`/${user.slug}`} className="group/item block truncate">
          <div className="group-hover/item:underline font-bold">
            {user.name}
          </div>
          <div className="truncate text-sm text-gray-400">@{user.slug}</div>
        </Link>
      </div>
      <div className="pl-2 w-20">
        {!following && (
          <Button label="Seguir" onClick={handleFollowButton} size={3} />
        )}
      </div>
    </div>
  );
};
export const RecommendationItemSkeleton = () => {
  return (
    <div className=" animate-pulse flex items-center">
      <div className="size-10 mr-2 rounded-full bg-gray-600"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="w-3/4 bg-gray-600 h-4"></div>
        <div className="w-1/4 bg-gray-600 h-4"></div>
      </div>
    </div>
  );
};
