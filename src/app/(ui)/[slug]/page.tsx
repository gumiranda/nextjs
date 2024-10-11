import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount} posts</div>
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div
          className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${user.cover})` }}
        ></div>
        <div className="-mt-12 flex justify-between items-end">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />
          <div className="w-32">
            <Link href={`/${user.slug}/edit`}>
              <Button label="Editar Perfil" size={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
