"use client";

import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback, type InputHTMLAttributes } from "react";

interface Props {
  placeholder: string;
  password?: boolean;
  filled?: boolean;
  icon?: IconDefinition;
  value?: string;
  onChange?: (newValue: string) => void;
}

export const Input = ({
  placeholder,
  password,
  icon,
  filled,
  value,
  onChange,
}: Props & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">) => {
  const [showPassword, setShowPassword] = useState(false);

  // Memoize the onClick handler to prevent unnecessary re-renders
  const handleTogglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  // Memoize the onChange handler to prevent unnecessary re-renders
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      return onChange && onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <div
      className={`has-[:focus]:border-white flex 
          items-center h-14 rounded-3xl border-2 border-gray-700
         ${filled && "bg-gray-700"}`}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className="ml-4 size-6 text-gray-500" />
      )}

      <input
        type={password && !showPassword ? "password" : "text"}
        className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {password && (
        <FontAwesomeIcon
          onClick={handleTogglePassword}
          icon={showPassword ? faEye : faEyeSlash}
          className="cursor-pointer mr-4 text-gray-500"
          size="lg"
        />
      )}
    </div>
  );
};
