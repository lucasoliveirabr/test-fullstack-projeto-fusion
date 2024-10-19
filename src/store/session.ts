import { create } from "zustand";

type SessionStore = {
  isAuthenticated: string | null;
  setSession: (session: string | null) => void;
}

export const useSessionStore = create<SessionStore>()((set) => ({
  isAuthenticated: localStorage.getItem("session") ? localStorage.getItem("session") : null,
  setSession: (session) => {
    session !== null && localStorage.setItem("session", session);
    set(() => ({
      isAuthenticated: session
    }))
  },
}));