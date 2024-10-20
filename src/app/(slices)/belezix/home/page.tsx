import Header from "../_components/organisms/header";
import { HeadingHome } from "../_components/molecules/heading-home";
import Search from "../_components/molecules/search";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mx-1">
        <HeadingHome />
        <div className="p-5 max-w-lg">
          <Search />
        </div>
      </div>
    </div>
  );
}
