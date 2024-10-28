import React from "react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

import { useSessionStore } from "./store/session";

const App: React.FC = () => {
  const { isAuthenticated, setSession } = useSessionStore();

  return (
    isAuthenticated === null ? (
      <LandingPage signIn={() => setSession("true")} demo={() => setSession("demo")} />
    ) : isAuthenticated === "true" ? (
      <Dashboard isAuthenticated="true" />
    ) : (
      <Dashboard isAuthenticated="demo" />
    )
  );
};

export default App;