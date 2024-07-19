"use client";
import { cn } from "@/lib/utils";
import { MouseEventHandler, ReactNode } from "react";

interface compProps {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick, className }: compProps) => {
  return (
    <div>
      <button onClick={onClick} className={cn("bg-cyan-500/60 text-gray-200 text-lg font-semibold pl-3 pr-3 rounded-lg p-1 active:bg-cyan-500", className)}>
        {children}
      </button>
    </div>
  );
};