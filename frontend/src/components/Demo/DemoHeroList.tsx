import React from "react";
import DemoHeroItem from "./DemoHeroItem";
import { useDemoHeroListDemoStore } from "../../store/heroListDemo";

const DemoHeroList: React.FC = () => {
  const { demoHeroList } = useDemoHeroListDemoStore();

  return (
    <main className="flex justify-center mt-10">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {demoHeroList.map(hero => (
          <DemoHeroItem
            key={hero.id}
            id={hero.id as number}
            name={hero.name}
            powersAndAbilities={hero.powersAndAbilities}
            origin={hero.origin}
          />
        ))}
      </div>
    </main>
  );
};

export default DemoHeroList;