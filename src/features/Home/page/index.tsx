import { Card } from "@/components/Card";
import { arrowDown, profile, blueMapIcon, buildingIcon, cpuIcon } from "@/assets";
import { useFetch } from "@/hooks/useFetch";
import { Ranking } from "../components/Ranking";

export const HomeComponent = async () => {
  const sendCityHttpRequest = useFetch<[]>({ method: "GET", endpoint: "cities" });
  const sendClientHttpRequest = useFetch<[]>({ method: "GET", endpoint: "clients" });
  const sendSignatureHttpRequest = useFetch<[]>({ method: "GET", endpoint: "signatures" });
  const sendStoreHttpRequest = useFetch<[]>({ method: "GET", endpoint: "stores" });

  const clientResponse = await sendClientHttpRequest();
  const cityResponse = await sendCityHttpRequest();
  const signatureResponse = await sendSignatureHttpRequest();
  const storeResponse = await sendStoreHttpRequest();

  const clientStatuses = clientResponse.length.toString();
  const cityStatuses = cityResponse.length.toString();
  const signatureStatuses = signatureResponse.length.toString();
  const storeStatuses = storeResponse.length.toString();

  return (
    <div className="flex h-full items-center justify-center">
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
      <Ranking />
    </div>
  );
};
