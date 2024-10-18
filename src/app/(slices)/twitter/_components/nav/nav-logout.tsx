/* eslint-disable react/display-name */
"use client";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { memo } from "react";
const MemoizedFontAwesomeIcon = memo(FontAwesomeIcon);

export const NavLogout = memo(() => {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/signin");
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex items-center gap-6 py-3  
    opacity-50  hover:opacity-100`}
    >
      <MemoizedFontAwesomeIcon
        icon={faArrowRightFromBracket}
        className="size-6"
      />
      <div className="text-lg">Sair</div>
    </div>
  );
});
