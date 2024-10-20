import { ProfileFeed } from "@/app/(slices)/twitter/_components/profile/profile-feed";
import { Button } from "@/shared/ui/atoms/twitter/button";
import { GeneralHeader } from "@/shared/ui/atoms/twitter/general-header";
import { user } from "@/app/(slices)/twitter/_data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { memo } from "react";

const MemoizedFontAwesomeIcon = memo(FontAwesomeIcon);

export default function Page() {
  const isMe = true;
  return (
    <div>
      <GeneralHeader backHref="/twitter/">
        <div className="font-bold text-lg">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount} posts</div>
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div
          className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${user.cover})` }}
        ></div>
        <div className="-mt-12 flex justify-between items-end px-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />
          <div className="w-32">
            {isMe && (
              <Link href={`/twitter/${user.slug}/edit`}>
                <Button label="Editar Perfil" size={2} />
              </Link>
            )}
            {!isMe && <Button label="Seguir" size={2} />}
          </div>
        </div>
        <div className="px-6 mt-4">
          <div className="text-xl font-bold">{user.name}</div>
          <div className="text-gray-500">@{user.slug}</div>
          <div className="py-5 text-lg text-gray-500">@{user.bio}</div>
          {user.link && (
            <div className="flex gap-2 items-center">
              <MemoizedFontAwesomeIcon icon={faLink} className="size-5" />
              <Link href={user.link} className="text-blue-300" target="_blank">
                {user.link}
              </Link>
            </div>
          )}
          <div className="my-5 flex gap-6">
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguindo
            </div>
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguidores
            </div>
          </div>
        </div>
      </section>
      <ProfileFeed />
    </div>
  );
}
