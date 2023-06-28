"use client";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  styles?: string;
  color?: string;
  variant?: string;
}

interface IButtonColors {
  primary: string;
}

export const Button: React.FC<IButtonProps> = ({ color, children, styles, ...props }) => {

  const colorVariants: IButtonColors = {
    primary: "bg-primary hover:bg-primary-light",
  };

  const standardSize = "rounded-[5px] h-[3.5rem] lg:w-[24.25rem] lg:h-[3.5rem]"

  return (
    <button className={twMerge(classNames(colorVariants["primary"], "rounded-[5px]", standardSize), styles)}>
      <span className="text-white left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {children}
      </span>
    </button>
  );
}