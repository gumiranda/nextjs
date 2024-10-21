import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
export const HeadingHome = () => {
  const session = {
    user: {
      name: "Fulano",
    },
  };
  return (
    <div className="p-5">
      {/* TEXTO */}
      <h2 className="text-xl font-bold">
        Olá, {session?.user ? session.user.name : "bem vindo"}!
      </h2>
      <p>
        <span className="capitalize">
          {format(new Date(), "EEEE, dd", { locale: ptBR })}
        </span>
        <span>&nbsp;de&nbsp;</span>
        <span className="capitalize">
          {format(new Date(), "MMMM", { locale: ptBR })}
        </span>
      </p>
    </div>
  );
};
