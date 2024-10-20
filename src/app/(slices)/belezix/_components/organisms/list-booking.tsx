"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";
import BookingItem from "./booking-item";

export const ListBooking = () => {
  const bookingsContainerRef = useRef<HTMLDivElement>(null);
  const scrollRight = () => {
    if (bookingsContainerRef.current) {
      bookingsContainerRef.current.scrollBy({
        left: 400, // Quantidade de pixels para rolar à direita
        behavior: "smooth", // Comportamento suave
      });
    }
  };

  const scrollLeft = () => {
    if (bookingsContainerRef.current) {
      bookingsContainerRef.current.scrollBy({
        left: -400, // Quantidade de pixels para rolar à esquerda
        behavior: "smooth", // Comportamento suave
      });
    }
  };
  const showLeftArrow = bookingsContainerRef.current
    ? bookingsContainerRef.current.scrollLeft > 0
    : false;
  return (
    <>
      {confirmedBookings.length > 0 && (
        <div className="mx-5 lg:max-w-lg">
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>

          {/* AGENDAMENTO */}
          <div className="relative">
            {showLeftArrow && (
              <button
                onClick={scrollLeft}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            {/* Ícone de rolagem à esquerda */}

            <div
              ref={bookingsContainerRef}
              className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden"
            >
              {confirmedBookings.map((booking) => (
                <div key={booking.id} className="min-w-[400px]">
                  <BookingItem booking={booking} />
                </div>
              ))}
            </div>

            {/* Ícone de rolagem à direita */}
            <button
              onClick={scrollRight}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2"
            >
              <ArrowRight size={24} />
            </button>
          </div>
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
