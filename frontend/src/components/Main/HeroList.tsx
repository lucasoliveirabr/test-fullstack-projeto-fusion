import React from "react";
import HeroItem from "./HeroItem";
import useSWR from "swr";

type HeroDataProps = {
  id?: number;
  name: string;
  powersAndAbilities: string;
  origin: string;
}

const url: string = "http://localhost:3000/api/heroes";
const fetcher = (url: string) => fetch(url).then(res => res.json());

const HeroList: React.FC = () => {
  const { data, error, isLoading } = useSWR<HeroDataProps[], Error>(url, fetcher);

  if (error) return <main className="flex justify-center mt-10"><p className="text-white">Falha ao carregar os dados.</p></main>;
  if (isLoading) return <main className="flex justify-center mt-10"><p className="text-white">Carregando...</p></main>;

  return (
    <main className="flex justify-center mt-10">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data?.map(heroData => (
          <HeroItem
            key={heroData.id}
            id={heroData.id as number}
            name={heroData.name}
            powersAndAbilities={heroData.powersAndAbilities}
            origin={heroData.origin}
          />
        ))}
      </div>
    </main>
  );
};

export default HeroList;