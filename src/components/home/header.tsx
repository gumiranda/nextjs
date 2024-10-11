import { Logo } from "../ui/logo";

export const HomeHeader = () => {
  return (
    <header className="flex justify-between p-6 border-b-2 border-gray-600">
      <div className="lg:hidden">
        <Logo size={24} />
      </div>
      <div className="hidden lg:block text-2xl">Página inicial</div>
    </header>
  );
};
