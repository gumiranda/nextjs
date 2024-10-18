"use client";
import React, { useState, memo } from "react"; // Import React.memo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../twitter/ui/logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HomeMenu } from "./home-menu";

// Memoize the FontAwesomeIcon component
const MemoizedFontAwesomeIcon = React.memo(FontAwesomeIcon);

// Memoize the Logo component
const MemoizedLogo = memo(Logo);

// Wrap HomeMenu with React.memo
const MemoizedHomeMenu = React.memo(HomeMenu);

export const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex justify-between p-6 border-b-2 border-gray-600">
      <div className="lg:hidden">
        <MemoizedLogo size={24} /> {/* Use MemoizedLogo instead of Logo */}
      </div>
      <div className="hidden lg:block text-2xl">Página inicial</div>
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <MemoizedFontAwesomeIcon icon={faBars} className="size-6" />
      </div>
      {showMenu && <MemoizedHomeMenu closeAction={() => setShowMenu(false)} />}
    </header>
  );
};
