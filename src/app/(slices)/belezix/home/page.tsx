import BookingItem from "../_components/organisms/booking-item";
import Header from "../_components/organisms/header";
import { SubHeader } from "../_components/organisms/subheader";

export default function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      {confirmedBookings.length > 0 && (
        <div className="mx-5 max-w-lg">
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>

          {/* AGENDAMENTO */}
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {confirmedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
const confirmedBookings = [
  {
    id: "122121212",
    date: new Date(2025, 1, 1, 10, 0),
    service: {
      name: "Corte de Cabelo",
      price: 999,

      barbershop: {
        name: "Barbearia do Zé",
        imageUrl: "/barba.svg",
        address: "Rua das Flores, 123",
        phones: [{ number: "(11) 98765-4321" }, { number: "(11) 91234-5678" }],
      },
    },
  },
  {
    id: "dssdfgfgsfsd",
    date: new Date(2023, 2, 2, 10, 0),
    service: {
      name: "Corte de Cabelo",
      price: 999,
      barbershop: {
        name: "Barbearia do Zé",
        imageUrl: "/barba.svg",
        address: "Rua das Flores, 123",
        phones: [{ number: "(11) 98765-4321" }, { number: "(11) 91234-5678" }],
      },
    },
  },
];
