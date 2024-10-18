/* eslint-disable @next/next/no-img-element */
"use client";
import { user } from "@/data/user";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { Button } from "../twitter/ui/button";
const MemoizedFontAwesomeIcon = memo(FontAwesomeIcon);

export const TweetPost: React.FC = () => {
  const handleImageUpload = () => {};
  const handlePostClick = () => {
    const content = document.querySelector("[role=textbox]")?.textContent;
    console.log("Post clicked", content);
  };
  return (
    <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-800">
      <div>
        <img
          src={user.avatar}
          alt={user.name}
          className="size-12 rounded-full"
        />
      </div>
      <div className="flex-1">
        <div
          className="min-h-14 outline-none 
          text-lg text-white 
          empty:before:text-gray-500
          empty:before:content-[attr(data-placeholder)]"
          contentEditable
          role="textbox"
          data-placeholder="O que está acontecendo?"
        ></div>
        <div className="flex justify-between items-center mt-2">
          <div onClick={handleImageUpload} className="cursor-pointer">
            <MemoizedFontAwesomeIcon icon={faImage} className="size-6" />
          </div>
          <div className="w-28">
            <Button onClick={handlePostClick} label="Postar" size={2} />
          </div>
        </div>
      </div>
    </div>
  );
};
