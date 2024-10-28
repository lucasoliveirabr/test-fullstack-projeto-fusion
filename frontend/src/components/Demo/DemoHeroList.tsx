import React from "react";
import HeroItem from "./DemoHeroItem";
import { useHeroListDemoStore } from "../../store/heroListDemo";

const DemoHeroList: React.FC = () => {
  const { heroList, editHero, deleteHero } = useHeroListDemoStore();

  return (
    <main className="flex justify-center mt-10">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {heroList.map(heroData => (
          <HeroItem
            key={heroData.id}
            id={heroData.id}
            onEdit={({ id, name, powersAndAbilities, origin }) => editHero({ id, name, powersAndAbilities, origin })}
            onDelete={(key) => deleteHero(key)}
          />
        ))}
      </div>
    </main>
  );
};

export default DemoHeroList;