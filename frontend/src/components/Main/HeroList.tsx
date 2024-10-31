import React from "react";
import HeroItem from "./HeroItem";
import LoadingSkeletonForm from "./LoadingSkeletonForm";
import useSWR from "swr";
import { Hero } from "../../types";

const url: string = import.meta.env.MODE === "production"
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL_DEV;
const fetcher = (url: string) => fetch(url).then(res => res.json());

const HeroList: React.FC = () => {
  const { data, error, isLoading } = useSWR<Hero[], Error>(url, fetcher);

  if (isLoading) return (
    <main className="flex justify-center mt-10">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <LoadingSkeletonForm />
        <LoadingSkeletonForm />
        <LoadingSkeletonForm />
        <LoadingSkeletonForm />

        <LoadingSkeletonForm />
        <LoadingSkeletonForm />
        <LoadingSkeletonForm />
        <LoadingSkeletonForm />

        <LoadingSkeletonForm />
        <LoadingSkeletonForm />
        <LoadingSkeletonForm />
        <LoadingSkeletonForm />
      </div>
    </main>
  );

  if (error) return (
    <main className="flex justify-center mt-10">
      <p className="text-white">Falha ao carregar os dados.</p>
    </main>
  );

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