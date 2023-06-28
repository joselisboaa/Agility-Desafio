"use client"
import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement>{
  type: string;
  labelText: string;
  placeholder?: string;
  icon?: string;
  styles?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ type, labelText, styles, placeholder = "Digite aqui", icon }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputType, setInputType] = useState<string>(type);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event?.target as HTMLInputElement).value;
    setInputValue(value);
  }

  const letShowOrHidePassword = () => {
    setInputType((prevType) => prevType === "text" ? "password" : "text")
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-primary-dark">{labelText}</label>
      <div className={twMerge("flex border-[1px] rounded-[4px] border-input-border py-[1rem] px-[1rem] sm:w-[24.25rem] sm:h-[3.5rem]", styles)}>
        <input onChange={handleOnChange} placeholder={placeholder} type={inputType} value={inputValue} className="outline-none w-full">
        </input>
        {
          type === "password" && icon ?
          <div className="px-[1rem]" onClick={letShowOrHidePassword}>
            <Image src={icon} alt="show password"/>
          </div>
          : null
        }
      </div>
    </div>
  );
}