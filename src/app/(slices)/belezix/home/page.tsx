import Header from "../_components/organisms/header";
import { ListBooking } from "../_components/organisms/list-booking";
import { QuickSearch } from "../_components/organisms/quick-search";
import { SubHeader } from "../_components/organisms/subheader";

export default function Home() {
  return (
    <div>
      <Header />
      <SubHeader />

      <ListBooking />
    </div>
  );
}
