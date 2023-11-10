import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

function Select({
  options,
  value,
  onChange,
  className = "",
  placeholder = "",
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={twMerge(
        "w-full  border-2 rounded px-3 py-2 mx-auto my-4",
        className
      )}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          placeholder={placeholder}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
