"use client";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  textColor?: string;
  styles?: string;
  color?: string;
  variant?: string;
}

interface IButtonColors {
  primary: string;
}

export const Button: React.FC<IButtonProps> = ({ textColor, children, type = "button", styles }) => {
  const colorVariants: IButtonColors = {
    primary: "bg-primary hover:bg-primary-light",
  };

  const standardSize = "rounded-[5px] h-[3.5rem] lg:w-[24.25rem] lg:h-[3.5rem]";

  return (
    <button type={type} className={twMerge(classNames(colorVariants["primary"], "rounded-[5px]", standardSize), styles)}>
      <span className={twMerge(classNames("left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white", textColor))}>{children}</span>
    </button>
  );
};
