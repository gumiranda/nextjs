import { Button } from "@/shared/ui/atoms/shadcn/button";
import { Sheet, SheetTrigger } from "@/shared/ui/atoms/shadcn/sheet";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SidebarSheet from "../../_components/molecules/sidebar-sheet";
import { user } from "@/app/(slices)/twitter/_data/user";
import PhoneItem from "../../_components/molecules/phone-item";
import ServiceItem from "../../_components/organisms/service-item";

interface BarbershopPageProps {
  params: {
    id: string;
  };
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // chamar o meu banco de dados
  //   const barbershop = await db.barbershop.findUnique({
  //     where: {
  //       id: params.id,
  //     },
  //     include: {
  //       services: true,
  //     },
  //   });

  //   if (!barbershop) {
  //     return notFound();
  //   }
  const barbershop = {
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
  };
  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet
            data={user}
            quickSearchOptions={[
              {
                title: "Acabamento",
                imageUrl: "/acabamento.svg",
              },
              {
                title: "Cabelo",
                imageUrl: "/cabelo.svg",
              },
              {
                title: "Barba",
                imageUrl: "/barba.svg",
              },
              {
                title: "Massagem",
                imageUrl: "/massagem.svg",
              },
              {
                title: "Sobrancelha",
                imageUrl: "/sobrancelha.svg",
              },
            ]}
          />
        </Sheet>
      </div>

      {/* TÍTULO */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (499 avaliações)</p>
        </div>
      </div>

      {/* DESCRIÇÃO */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/* SERVIÇOS */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem
              key={service.id}
              barbershop={JSON.parse(JSON.stringify(barbershop))}
              service={JSON.parse(JSON.stringify(service))}
            />
          ))}
        </div>
      </div>

      {/* CONTATO */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopPage;
