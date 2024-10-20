import React from "react";
import LandingPage from "./pages/LandingPage";
import DashboardMain from "./pages/DashboardMain";
import DashboardDemo from "./pages/DashboardDemo";

import { useSessionStore } from "./store/session";

const App: React.FC = () => {
  const { isAuthenticated, setSession } = useSessionStore();

  return (
    isAuthenticated === null ? (
      <LandingPage signIn={() => setSession("true")} demo={() => setSession("demo")} />
    ) : isAuthenticated === "demo" ? (
      <DashboardDemo />
    ) : (
      <DashboardMain />
    )
  );
};

export default App;