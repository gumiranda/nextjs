import Header from "../_components/organisms/header";
import { ListBooking } from "../_components/organisms/list-booking";
import { SubHeader } from "../_components/organisms/subheader";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <SubHeader />
        <ListBooking />
      </div>
    </div>
  );
}
