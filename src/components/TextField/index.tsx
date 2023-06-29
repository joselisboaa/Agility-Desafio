"use client";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { UseFormRegister } from "react-hook-form";
import { ILoginProps } from "@/features/Login/components/page";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  labelText: string;
  placeholder?: string;
  icon?: string;
  styles?: string;
  register: UseFormRegister<ILoginProps>;
  name: "password" | "login";
}

export const TextField: React.FC<ITextFieldProps> = ({ type, name, register, labelText, styles, placeholder = "Digite aqui", icon }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputType, setInputType] = useState<string>(type);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event?.target as HTMLInputElement).value;
    setInputValue(value);
  };

  const letShowOrHidePassword = () => {
    setInputType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-primary-dark">{labelText}</label>
      <div className={twMerge("flex rounded-[4px] border-[1px] border-input-border px-[1rem] py-[1rem] sm:w-[24.25rem] sm:max-w-[24.25rem]", styles)}>
        <input
          {...register(name)}
          onChange={handleOnChange}
          placeholder={placeholder}
          type={inputType}
          value={inputValue}
          className="w-full outline-none"
        ></input>
        {type === "password" && icon ? (
          <div className="flex items-center justify-center pl-[1rem]" onClick={letShowOrHidePassword}>
            <Image src={icon} alt="show password" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
