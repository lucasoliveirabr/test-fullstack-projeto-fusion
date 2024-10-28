import React from "react";
import Header from "../components/Main/Header.tsx";
import HeroList from "../components/Main/HeroList.tsx";
import DemoHeader from "../components/Demo/DemoHeader.tsx";
import DemoHeroList from "../components/Demo/DemoHeroList.tsx";

const Dashboard: React.FC<{ isAuthenticated: string }> = ({ isAuthenticated }) => {
  return (
    <div className="m-10">
      {isAuthenticated === "true" ? (
        <>
          <Header />
          <HeroList />
        </>
      ) : (
        <>
          <DemoHeader />
          <DemoHeroList />
        </>
      )}
    </div>
  );
};

export default Dashboard;