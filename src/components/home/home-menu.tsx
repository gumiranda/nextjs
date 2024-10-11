import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  closeAction: () => void;
};

export const HomeMenu = ({ closeAction }: Props) => {
  return (
    <div className="fixed inset-0 p-6 bg-black">
      <div className="flex justify-between items-center">
        <Logo size={32} />
        <div
          onClick={closeAction}
          className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-gray-900"
        >
          <FontAwesomeIcon icon={faXmark} className="size-6" />
        </div>
      </div>
    </div>
  );
};
