import React, { useState } from "react";
import DemoHeroForm from "./DemoHeroForm";
import { useSessionStore } from "../../store/session";

const DemoHeader: React.FC = () => {
  const { setSession } = useSessionStore();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleRemoveSession = (): void => {
    localStorage.removeItem("session");
    setSession(null);
  };

  return (
    <header className="flex space-x-4 justify-between items-center">
      <DemoHeroForm modalVisibleProp={modalVisible} onClose={() => setModalVisible(false)} />

      <h1 className="text-red-400 text-4xl md:text-6xl font-extrabold title-shadow">Heróis da Marvel</h1>

      <div className="flex space-x-4">
        <button type="button" onClick={handleRemoveSession} className="sm:inline-flex relative items-center justify-center p-0.5 h-10 sm:h-11 overflow-hidden text-sm font-bold rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 text-white text-shadow">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-800 rounded-md hover:bg-opacity-0">
            Sair
          </span>
        </button>

        <button type="button" onClick={() => setModalVisible(true)} className="hidden sm:inline-flex relative items-center justify-center p-0.5 h-10 sm:h-11 overflow-hidden text-sm font-bold rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 text-white text-shadow">
          <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-gray-800 rounded-md hover:bg-opacity-0">
            Criar
          </span>
        </button>
      </div>

      <button type="button" onClick={() => setModalVisible(true)} className="flex items-center justify-center sm:hidden fixed bottom-5 right-5 bg-red-400 hover:bg-red-500 text-white p-4 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-8 h-8">
          <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"></path>
        </svg>
      </button>
    </header>
  );
};

export default DemoHeader;