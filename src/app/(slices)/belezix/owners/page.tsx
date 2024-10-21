import BarbershopItem from "../_components/molecules/barbershop-item";
import Search from "../_components/molecules/search";
import Header from "../_components/organisms/header";

interface BarbershopsPageProps {
  searchParams: {
    title?: string;
    service?: string;
  };
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  //   const barbershops = await db.barbershop.findMany({
  //     where: {
  //       OR: [
  //         searchParams?.title
  //           ? {
  //               name: {
  //                 contains: searchParams?.title,
  //                 mode: "insensitive",
  //               },
  //             }
  //           : {},
  //         searchParams.service
  //           ? {
  //               services: {
  //                 some: {
  //                   name: {
  //                     contains: searchParams.service,
  //                     mode: "insensitive",
  //                   },
  //                 },
  //               },
  //             }
  //           : {},
  //       ],
  //     },
  //   });

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams?.title || searchParams?.service}
          &quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarbershopsPage;
const barbershops = [
  {
    id: 1,
    name: "Barbearia do Zé",
    imageUrl:
      "https://images.unsplash.com/photo-1619367901998-73b3a70b3898?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "Rua das Flores, 123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, lacus in tincidunt fermentum, nulla enim tincidunt eros, nec ultricies nunc est vel risus. Proin nec mi nec libero tincidunt elementum. Sed nec mauris et quam ultricies lacinia. Nulla facilisi. Donec vitae arc",
    services: [
      {
        id: 1,
        name: "Corte de cabelo",
        price: 30,
        duration: 30,
        imageUrl:
          "https://images.unsplash.com/photo-1619367901998-73b3a70b3898?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        name: "Barba",
        price: 20,
        duration: 20,
        imageUrl:
          "https://images.unsplash.com/photo-1619367901998-73b3a70b3898?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1619367901998-73b3a70b3898?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 3,
        name: "Pacote completo",
        price: 40,
        duration: 50,
      },
    ],
    phones: ["(11) 99999-9999", "(11) 99999-9999"],
  },
  {
    id: 2,
    name: "Barbearia do Zé",
    imageUrl:
      "https://images.unsplash.com/photo-1619367901998-73b3a70b3898?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "Rua das Flores, 123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, lacus in tincidunt fermentum, nulla enim tincidunt eros, nec ultricies nunc est vel risus. Proin nec mi nec libero tincidunt elementum. Sed nec mauris et quam ultricies lacinia. Nulla facilisi. Donec vitae arc",
    services: [
      {
        id: 1,
        name: "Corte de cabelo",
        price: 30,
        duration: 30,
        imageUrl:
          "https://images.unsplash.com/photo-1619367901998-73b3a70b3898?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        name: "Barba",
        price: 20,
        duration: 20,
        imageUrl:
          "https://images.unsplash.com/photo-1619367901998-73b3a70b3898?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1619367901998-73b3a70b3898?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 3,
        name: "Pacote completo",
        price: 40,
        duration: 50,
      },
    ],
    phones: ["(11) 99999-9999", "(11) 99999-9999"],
  },
];
