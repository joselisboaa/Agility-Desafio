"use client"
import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import Image from "next/image";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement>{
  type: string;
  labelText: string;
  placeholder?: string;
  icon?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ type = "text", labelText, placeholder = "Digite aqui", icon }) => {
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
      <label className="font-medium">{labelText}</label>
      <div className="flex border-[1px] rounded-[4px] w-[388px] h-[56px] border-input-border py-[1rem] px-[1rem]">
        <input onChange={handleOnChange} placeholder={placeholder} type={inputType} value={inputValue} className="outline-none w-full">
        </input>
        {
          type === "password" ?
          <div className="px-[1rem]" onClick={letShowOrHidePassword}>
            <Image src={icon} alt="show password"/>
          </div>
          : null
        }
      </div>
    </div>
  );
}