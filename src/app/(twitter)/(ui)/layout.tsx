import { NavItem } from "@/app/(twitter)/_components/nav/nav-item";
import { NavLogout } from "@/app/(twitter)/_components/nav/nav-logout";
import { NavMyProfile } from "@/app/(twitter)/_components/nav/nav-myprofile";
import { Logo } from "@/shared/ui/atoms/twitter-clone/logo";
import { RecommendationArea } from "@/shared/ui/atoms/twitter-clone/recommendation-area";
import { SearchInput } from "@/shared/ui/atoms/twitter-clone/search-input";
import { TrendingArea } from "@/shared/ui/atoms/twitter-clone/trending-area";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
      <section
        className="hidden lg:flex flex-col sticky top-0 h-screen w-72
      px-3 border-r-2 border-gray-900"
      >
        <div className="flex-1 mt-6">
          <Logo size={24} />
          <nav className="mt-11">
            <NavItem label="Página inicial" icon={faHouse} href="/home" />
            <NavItem label="Meu perfil" icon={faUser} href="/profile" />
          </nav>
        </div>
        <div className="mb-6 flex flex-col gap-4">
          <NavLogout />
          <NavMyProfile />
        </div>
      </section>
      <section className="flex-1 max-w-lg">{children}</section>
      <aside
        className="hidden lg:flex flex-col gap-6
       sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900"
      >
        <SearchInput hideOnSearch />
        <TrendingArea />
        <RecommendationArea />
      </aside>
    </main>
  );
}
