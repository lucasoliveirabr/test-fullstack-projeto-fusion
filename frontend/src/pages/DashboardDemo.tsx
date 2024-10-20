import React from "react";
import Header from "../components/Header.tsx";
import HeroList from "../components/HeroList.tsx";

const DashboardDemo: React.FC = () => {
  return (
    <div className="m-10">
      <Header />
      <HeroList />
    </div>
  );
};

export default DashboardDemo;