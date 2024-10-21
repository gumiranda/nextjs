import Image from "next/image";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/shared/ui/atoms/shadcn/card";
import { Sheet, SheetTrigger } from "@/shared/ui/atoms/shadcn/sheet";
import { Button } from "@/shared/ui/atoms/shadcn/button";
import SidebarSheet from "../molecules/sidebar-sheet";
import { user } from "@/app/twitter/_data/user";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/belezix/">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
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
      </CardContent>
    </Card>
  );
};

export default Header;
