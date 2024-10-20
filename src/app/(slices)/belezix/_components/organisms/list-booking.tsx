import BookingItem from "./booking-item";
import { ScrollWrapper } from "../molecules/scroll-wrapper";

export const ListBooking = () => {
  return (
    <>
      {confirmedBookings.length > 0 && (
        <div className="mx-5 lg:max-w-lg">
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>

          {/* Usando o ScrollWrapper para a lista de agendamentos */}
          <ScrollWrapper itemWidth={342}>
            {confirmedBookings.map((booking) => (
              <div key={booking.id} className="min-w-[342px]">
                <BookingItem booking={booking} />
              </div>
            ))}
          </ScrollWrapper>
        </div>
      )}
    </>
  );
};

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
