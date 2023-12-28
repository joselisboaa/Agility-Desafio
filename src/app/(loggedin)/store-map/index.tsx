"use client";
import { addIcon } from "@/assets";
import Map from "@/components/Map";
import { StoreForm } from "@/features/Store/components/StoreForm";
import Image from "next/image";
import { useContext } from "react";
import { StoreContext } from "@/features/Store/contexts/Store";

export default function StoreComponent() {
  const { setIsActive } = useContext(StoreContext);

  return (
    <div className="flex flex-col gap-4 bg-primary-background p-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-secondary-dark">Mapa de lojas</h2>
        <div
          id="add-store-btn"
          onClick={() => setIsActive((prevState) => !prevState)}
          className="flex h-fit w-fit cursor-pointer gap-2 bg-primary-background p-2 text-secondary-dark hover:bg-gray-color-40"
        >
          <Image src={addIcon} alt="ícone de adicionar loja" />
          <span className="font-medium text-secondary-dark">Cadastrar loja</span>
        </div>
      </div>
      <div>
        <StoreForm />
      </div>
      <Map />
    </div>
  );
}
