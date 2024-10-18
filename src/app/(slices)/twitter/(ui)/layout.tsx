import { NavItem } from "@/app/(slices)/twitter/_components/nav/nav-item";
import { NavLogout } from "@/app/(slices)/twitter/_components/nav/nav-logout";
import { NavMyProfile } from "@/app/(slices)/twitter/_components/nav/nav-myprofile";
import { Logo } from "@/shared/ui/atoms/twitter/logo";
import { RecommendationArea } from "@/shared/ui/organisms/twitter/recommendation-area";
import { SearchInput } from "@/shared/ui/molecules/twitter/search-input";
import { TrendingArea } from "@/shared/ui/molecules/twitter/trending-area";
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
            <NavItem
              label="Página inicial"
              icon={faHouse}
              href="/twitter/home"
            />
            <NavItem label="Meu perfil" icon={faUser} href="/twitter/profile" />
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
