"use client";

import React from "react";

interface Props {
  placeholder: string;
  rows: number;
  value?: string;
}

// Wrap FontAwesomeIcon with React.memo

export const TextArea = ({ placeholder, value, rows }: Props) => {
  return (
    <div
      className={`has-[:focus]:border-white flex 
          items-center h-14 rounded-3xl border-2 border-gray-700
          `}
    >
      <textarea
        className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
        placeholder={placeholder}
        value={value}
        rows={rows}
      />
    </div>
  );
};
