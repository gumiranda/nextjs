/* eslint-disable react/display-name */
"use client";
import type { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, memo } from "react"; // Import useMemo

type Props = {
  label: string;
  icon: IconDefinition;
  href: string;
  active?: boolean;
};

// Memoized FontAwesomeIcon component
const MemoizedFontAwesomeIcon = memo(FontAwesomeIcon);

export const NavItem = memo(({ label, icon, href, active }: Props) => {
  const isMe = usePathname() === href;

  // Memoize the icon prop
  const memoizedIcon = useMemo(() => icon, [icon]);

  return (
    <Link
      href={href}
      className={`flex items-center gap-6 py-3 ${
        active || isMe ? "opacity-100" : "opacity-70"
      } hover:opacity-100`}
    >
      <MemoizedFontAwesomeIcon icon={memoizedIcon} className="size-6" />
      <div className="text-lg">{label}</div>
    </Link>
  );
});
