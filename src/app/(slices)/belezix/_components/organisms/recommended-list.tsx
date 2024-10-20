import BarbershopItem from "../molecules/barbershop-item";
import { ScrollWrapper } from "../molecules/scroll-wrapper";

export const RecommendedList = () => {
  return (
    <div className="flex flex-col lg:max-w-xl 2xl:max-w-4xl p-5">
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Recomendados
      </h2>
      <ScrollWrapper itemWidth={200}>
        {mockBarbershops.map((barbershop: any) => (
          <div key={barbershop.id} className="max-w-[200px]">
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          </div>
        ))}
      </ScrollWrapper>
    </div>
  );
};

const mockBarbershops = [
  {
    id: 1,
    name: "Barbearia do Zé",
    address: "Rua das Flores, 123",
    imageUrl: "/map.png",
  },
  {
    id: 2,
    name: "Barbearia do João",
    address: "Avenida Brasil, 456",
    imageUrl: "/map.png",
  },
  {
    id: 3,
    name: "Barbearia do Pedro",
    address: "Praça da Sé, 789",
    imageUrl: "/map.png",
  },
  {
    id: 4,
    name: "Barbearia do Zé",
    address: "Rua das Flores, 123",
    imageUrl: "/map.png",
  },
  {
    id: 5,
    name: "Barbearia do João",
    address: "Avenida Brasil, 456",
    imageUrl: "/map.png",
  },
  {
    id: 6,
    name: "Barbearia do Pedro",
    address: "Praça da Sé, 789",
    imageUrl: "/map.png",
  },
];
