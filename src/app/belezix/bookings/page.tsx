import { notFound } from "next/navigation";
import Header from "../_components/organisms/header";
import BookingItem from "../_components/organisms/booking-item";

const Bookings = async () => {
  const session = {
    user: {
      id: 1,
      name: "John Doe",
      email: "sasasasa@ssasaas.com",
      phone: "999999999",
      avatar: "https://randomuser.me/api/port",
    },
  };
  if (!session?.user) {
    // TODO: mostrar pop-up de login
    return notFound();
  }
  const confirmedBookings = [
    {
      id: 1,
      date: "2022-12-12",
      time: "10:00",
      service: {
        barbershop: {
          id: 1,
          name: "Barbearia do Zé",
          imageUrl: "https://randomuser.me/api/portraits",
          phones: [
            {
              id: 1,
              number: "999999999",
              type: "Celular",
            },
          ],
        },
        duration: 30,
        name: "Corte de Cabelo",
        price: 30.0,
      },
      professional: {
        id: 1,
        name: "Maria",
      },
    },
    {
      id: 2,
      date: "2022-12-12",
      time: "11:00",
      service: {
        barbershop: {
          id: 1,
          name: "Barbearia do Zé",
          imageUrl: "https://randomuser.me/api/portraits",
          phones: [
            {
              id: 1,
              number: "999999999",
              type: "Celular",
            },
          ],
        },
        duration: 30,
        name: "Corte de Cabelo",
        price: 30.0,
      },
      professional: {
        id: 2,
        name: "Joana",
      },
    },
  ];
  //await getConfirmedBookings();
  const concludedBookings = [
    {
      id: 3,
      date: "2022-12-12",
      time: "12:00",
      service: {
        barbershop: {
          id: 1,
          name: "Barbearia do Zé",
          imageUrl: "https://randomuser.me/api/portraits",
          phones: [
            {
              id: 1,
              number: "999999999",
              type: "Celular",
            },
          ],
        },
        duration: 30,
        name: "Corte de Cabelo",
        price: 30.0,
      },
      professional: {
        id: 3,
        name: "Ana",
      },
    },
    {
      id: 4,
      date: "2022-12-12",
      time: "13:00",
      service: {
        barbershop: {
          id: 1,
          name: "Barbearia do Zé",
          imageUrl: "https://randomuser.me/api/portraits",
          phones: [
            {
              id: 1,
              number: "999999999",
              type: "Celular",
            },
          ],
        },
        duration: 30,
        name: "Corte de Cabelo",
        price: 30.0,
      },
      professional: {
        id: 4,
        name: "Mariana",
      },
    },
  ]; //await getConcludedBookings();

  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
          <p className="text-gray-400">Você não tem agendamentos.</p>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Confirmados
            </h2>
            {confirmedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}
        {concludedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Finalizados
            </h2>
            {concludedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                booking={JSON.parse(JSON.stringify(booking))}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Bookings;
