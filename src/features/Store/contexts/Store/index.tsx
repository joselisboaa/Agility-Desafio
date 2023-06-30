"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface IStoreProvider {
  children: React.ReactNode;
}

export interface IStoreContextProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const StoreContext = createContext({} as IStoreContextProps);

export const StoreProvider: React.FC<IStoreProvider> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <StoreContext.Provider
      value={{
        isActive,
        setIsActive,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
