import { Card } from "@/components/Card";
import { arrowDown, profile, blueMapIcon, buildingIcon, cpuIcon, arrowLeft } from "@/assets";
import { useFetch } from "@/hooks/useFetch";
import { Ranking } from "../components/Ranking";
import { Chart } from "@/components/Chart";
import { ICustomersBody } from "@/provider";
import Image from "next/image";

export const HomeComponent = async () => {
  const sendCityHttpRequest = useFetch<[]>({ method: "GET", endpoint: "cities" });
  const sendClientHttpRequest = useFetch<[]>({ method: "GET", endpoint: "clients" });
  const sendSignatureHttpRequest = useFetch<[]>({ method: "GET", endpoint: "signatures" });
  const sendCustomersStatus = useFetch<ICustomersBody[]>({ method: "GET", endpoint: "customer-entry" });
  const sendStoreHttpRequest = useFetch<[]>({ method: "GET", endpoint: "stores" });

  const clientResponse = await sendClientHttpRequest();
  const cityResponse = await sendCityHttpRequest();
  const signatureResponse = await sendSignatureHttpRequest();
  const customerResponse = await sendCustomersStatus();
  const storeResponse = await sendStoreHttpRequest();

  const clientStatuses = clientResponse.length.toString();
  const cityStatuses = cityResponse.length.toString();
  const signatureStatuses = signatureResponse.length.toString();
  const storeStatuses = storeResponse.length.toString();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 bg-primary-background">
      <section className="flex h-full w-full flex-col flex-wrap items-center gap-2 lg:ml-4 lg:mt-4 lg:flex-row lg:gap-4 xl:ml-6 xl:mt-6 2xl:ml-10 2xl:mt-10 2xl:gap-6">
        <Card countStatus={clientStatuses} icon={profile} status="Crescimento de " statusIcon={arrowDown} statusNumber="100%" title="Total de Clientes" />
        <Card countStatus={cityStatuses} icon={blueMapIcon} status="Crescimento de " statusIcon={arrowDown} statusNumber="100%" title="Total de Cidades" />
        <Card countStatus={signatureStatuses} icon={cpuIcon} status="Crescimento de " statusIcon={arrowDown} statusNumber="100%" title="Total de Assinaturas" />
        <Card
          countStatus={storeStatuses}
          icon={buildingIcon}
          status="Crescimento de "
          statusIcon={arrowDown}
          statusNumber="100%"
          title="Total de Lojas parceiras"
        />
      </section>
      <section className="flex w-full flex-wrap justify-center gap-6 p-4">
        <div className="hidden w-[calc(100%-350px)] flex-col gap-6 lg:flex">
          <div className="flex gap-2">
            <Image src={arrowLeft} alt="ícone sinalizando a entrada de clientes" />
            <h2 className="text-2xl font-semibold text-secondary-dark">Entrada de clientes - {customerResponse[0].month}</h2>
          </div>
          <Chart data={customerResponse} />
        </div>
        <Ranking />
      </section>
    </div>
  );
};
