"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import BookingItem from "./booking-item";

export const ListBooking = () => {
  const bookingsContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const scrollRight = () => {
    if (bookingsContainerRef.current) {
      bookingsContainerRef.current.scrollBy({
        left: 400, // Pixels to scroll to the right
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const scrollLeft = () => {
    if (bookingsContainerRef.current) {
      bookingsContainerRef.current.scrollBy({
        left: -400, // Pixels to scroll to the left
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const handleScroll = () => {
    if (bookingsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        bookingsContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const container = bookingsContainerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {confirmedBookings.length > 0 && (
        <div className="mx-5 lg:max-w-lg">
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>

          {/* Booking List */}
          <div className="relative">
            {showLeftArrow && (
              <div
                onClick={scrollLeft}
                className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2 cursor-pointer"
              >
                <ArrowLeft size={24} />
              </div>
            )}

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

            {showRightArrow && (
              <div
                onClick={scrollRight}
                className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2 cursor-pointer"
              >
                <ArrowRight size={24} />
              </div>
            )}
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
