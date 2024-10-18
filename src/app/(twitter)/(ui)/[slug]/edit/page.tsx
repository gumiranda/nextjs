/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProfileFeed } from "@/app/(twitter)/_components/profile/profile-feed";
import { Button } from "@/shared/ui/atoms/twitter-clone/button";
import { GeneralHeader } from "@/shared/ui/atoms/twitter-clone/general-header";
import { Input } from "@/shared/ui/atoms/twitter-clone/input";
import { TextArea } from "@/shared/ui/atoms/twitter-clone/textarea";
import { user } from "@/app/(twitter)/_data/user";
import { faCamera, faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { memo } from "react";

const MemoizedFontAwesomeIcon = memo(FontAwesomeIcon);

export default function Page() {
  const isMe = true;
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">Editar perfil</div>
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div
          className="flex justify-center items-center gap-4 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${user.cover})` }}
        >
          <div
            className="cursor-pointer bg-black/80 flex justify-center
           items-center size-12 rounded-full"
          >
            <MemoizedFontAwesomeIcon icon={faCamera} className="size-6" />
          </div>
          <div
            className="cursor-pointer bg-black/80 flex justify-center
           items-center size-12 rounded-full"
          >
            <MemoizedFontAwesomeIcon icon={faXmark} className="size-6" />
          </div>
        </div>
        <div className="-mt-12 px-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />
          <div className="-mt-24 size-24 flex justify-center items-center">
            <div
              className="cursor-pointer bg-black/80 flex justify-center
           items-center size-12 rounded-full"
            >
              <MemoizedFontAwesomeIcon icon={faCamera} className="size-6" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 flex flex-col gap-4">
        <label>
          <p className="text-lg text-gray-500 mb-2">Nome</p>
          <Input placeholder="Digite seu nome" value={user.name} />
        </label>
        <label>
          <p className="text-lg text-gray-500 mb-2">Bio</p>
          <TextArea
            placeholder="Descreva voce mesmo"
            rows={2}
            value={user.bio}
          />
        </label>
        <label>
          <p className="text-lg text-gray-500 mb-2">Link</p>
          <Input placeholder="Digite um link" value={user.link} />
        </label>
        <Button label="Salvar alterações" size={1} />
      </section>
    </div>
  );
}
