import Header from "../_components/organisms/header";
import { ListBooking } from "../_components/organisms/list-booking";
import { RecommendedList } from "../_components/organisms/recommended-list";
import { SubHeader } from "../_components/organisms/subheader";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col xl:flex-row items-center xl:justify-around">
        <div className="w-full">
          <SubHeader />
          <ListBooking />
        </div>
        <div className="w-full">
          <RecommendedList />
          <RecommendedList />
        </div>
      </div>
    </div>
  );
}
