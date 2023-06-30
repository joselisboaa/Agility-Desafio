"use client";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { UseFormRegister } from "react-hook-form";
import classNames from "classnames";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  labelText: string;
  placeholder?: string;
  icon?: string;
  styles?: string;
  register: UseFormRegister<any>;
  name: string;
  error?: boolean;
  helperText?: string;
  thirdValue?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({
  thirdValue = "",
  helperText,
  error,
  type,
  name,
  register,
  labelText,
  styles,
  placeholder = "Digite aqui",
  icon,
}) => {
  const [inputValue, setInputValue] = useState<string>(thirdValue);
  const [inputType, setInputType] = useState<string>(type);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event?.target as HTMLInputElement).value;
    setInputValue(value);
  };

  const letShowOrHidePassword = () => {
    setInputType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  return (
    <div>
      <div className="flex flex-col">
        <label className="font-medium text-primary-dark">{labelText}</label>
        <div
          className={twMerge(
            classNames(
              "mt-2 flex rounded-[4px] border-[1px] border-input-border px-[1rem] py-[1rem] sm:w-[24.25rem] sm:max-w-[24.25rem]",
              { "border-red-600 focus-within:border-red-800": error },
              styles,
            ),
          )}
        >
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
        {helperText ? (
          <div className="w-full px-4">
            <span
              className={twMerge(
                classNames("w-full text-xs text-secondary-dark", {
                  "text-red-600": error,
                }),
              )}
            >
              {helperText}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
