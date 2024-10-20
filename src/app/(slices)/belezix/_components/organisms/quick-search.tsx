import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/ui/atoms/shadcn/button";

const quickSearchOptions = [
  {
    title: "Corte de Cabelo",
    imageUrl: "/acabamento.svg",
  },
  {
    title: "Barba",
    imageUrl: "/barba.svg",
  },
  {
    title: "Coloração",
    imageUrl: "/hidratacao.svg",
  },
];

export const QuickSearch = () => {
  return (
    <div className="flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {quickSearchOptions.map((option) => (
        <Button
          className="gap-2"
          variant="secondary"
          key={option.title}
          asChild
        >
          <Link href={`/barbershops?service=${option.title}`}>
            <Image
              src={option.imageUrl}
              width={16}
              height={16}
              alt={option.title}
            />
            {option.title}
          </Link>
        </Button>
      ))}
    </div>
  );
};
