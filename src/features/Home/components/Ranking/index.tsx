import { useFetch } from "@/hooks/useFetch";
import { ICitiesBody } from "@/provider";

export const Ranking = async () => {
  const sendCityHttpRequest = useFetch<ICitiesBody[]>({ method: "GET", endpoint: "cities" });

  const cityResponse = await sendCityHttpRequest();

  //Num contexto mais real o backend seria paginado e no entando isso
  //não seria um problema (renderizar 1000 cidades no ranking por exemplo)
  const sortedCitiesAmmount = cityResponse.sort();

  return (
    <aside className="flex w-[25rem] flex-col gap-8 bg-primary-background p-10 font-semibold text-secondary-dark">
      <h3 className="text-2xl">Ranking das cidades</h3>
      <div className="flex justify-between px-4 py-5">
        <span>Cidade</span>
        <span>Montante</span>
      </div>
      {sortedCitiesAmmount.map((city, index) => (
        <div key={index} className="flex justify-between px-4 py-5">
          <span>{city.name}</span>
          <span>R$ {city.ammount}</span>
        </div>
      ))}
    </aside>
  );
};
