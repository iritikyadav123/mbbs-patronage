"use client"
import { cn } from "@/lib/utils";
import { ChangeEventHandler } from "react";

interface compProps {
  type: string;
  value?: string;
  placeholderValue: string;
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ onChange, className, type, placeholderValue, value }: compProps) => {
  return (
    <div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholderValue}
        value={value}
        className={cn("rounded-xl p-1 mt-3 outline-none", className)}
      />
    </div>
  );
};