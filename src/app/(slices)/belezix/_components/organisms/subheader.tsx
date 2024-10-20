import { HeadingHome } from "../molecules/heading-home";
import Search from "../molecules/search";
import { QuickSearch } from "./quick-search";
import Image from "next/image";

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
      <div className="p-5 max-w-lg">
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
