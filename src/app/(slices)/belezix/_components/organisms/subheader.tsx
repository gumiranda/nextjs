import { HeadingHome } from "../molecules/heading-home";
import Search from "../molecules/search";
import { QuickSearch } from "./quick-search";

export const SubHeader = () => {
  return (
    <div className="mx-1">
      <HeadingHome />
      <div className="p-5 max-w-lg">
        <Search />
      </div>
      <div className="p-5 max-w-lg">
        <QuickSearch />
      </div>
    </div>
  );
};
