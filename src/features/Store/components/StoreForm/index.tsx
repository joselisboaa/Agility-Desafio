"use client";
import { Button, TextField } from "@/components";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { arrowOut } from "@/assets";
import { useMutation } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { z } from "zod";
import { messageRequired } from "@/provider";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import { notifyError, notifySucess } from "@/utils";

interface IAddStore {
  name: string;
  city: string;
  latitude: string;
  longitude: string;
}

export const StoreForm = () => {
  const sendHttpRequest = useFetch({ method: "POST", endpoint: "stores" });
  const { isActive, setIsActive } = useContext(StoreContext);

  const mutation = useMutation({
    mutationFn: sendHttpRequest<IAddStore>,
    onSuccess: () => {
      notifySucess("Loja criada com sucesso!");
    },
    onError: () => {
      notifyError("Erro ao criar a loja!");
    },
  });

  const schema = z.object({
    name: z.string().nonempty({ message: messageRequired }),
    city: z.string().nonempty({ message: messageRequired }),
    latitude: z.string().nonempty({ message: messageRequired }),
    longitude: z.string().nonempty({ message: messageRequired }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddStore>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<IAddStore> = (data) => {
    mutation.mutate(data);
  };

  const resetAllFields = () => {
    reset({
      name: "",
      city: "",
      latitude: "",
      longitude: "",
    });
  };

  return (
    <div
      className={twMerge(
        classNames("fixed right-0 top-0 z-[50] flex flex-col items-center gap-5 overflow-y-hidden bg-primary-background p-5", {
          "hidden bg-none": !isActive,
        }),
      )}
    >
      <div className="flex w-full gap-[8rem]">
        <Image src={arrowOut} alt="Sair" className="cursor-pointer" onClick={() => setIsActive((prevState) => !prevState)} />
        <h3>Cadastrar loja</h3>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField error={!!errors.name} helperText={errors?.name?.message} labelText="Nome da loja" name="name" type="text" register={register} />
        <TextField error={!!errors.city} helperText={errors?.city?.message} labelText="Cidade" name="city" type="text" register={register} />
        <TextField error={!!errors.latitude} helperText={errors?.latitude?.message} labelText="Latitude" name="latitude" type="text" register={register} />
        <TextField error={!!errors.longitude} helperText={errors?.longitude?.message} labelText="Longitude" name="longitude" type="text" register={register} />
        <Button id="register-btn" type="submit">
          Cadastrar
        </Button>
        <Button id="clean-btn" textColor="text-primary-dark" styles="bg-primary-background hover:bg-gray-color-40" onClick={resetAllFields}>
          Limpar campos
        </Button>
      </form>
    </div>
  );
};
