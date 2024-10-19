import React from "react";

import logo from "../../assets/logo.png";

type Props = {
  signIn: () => void;
  demo: () => void;
}

const LandingPage: React.FC<Props> = ({ signIn, demo }) => {
  return (
    <main className="grid h-screen place-items-center max-w-screen-xl px-4 py-8 mx-2 sm:mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-red-400">
          Heróis da Marvel
        </h1>
        <p className="max-w-2xl mb-8 text-lg sm:text-xl text-gray-300">
          Sistema de gerenciamento de heróis da Marvel.
        </p>
        <button type="submit" disabled onClick={signIn} className="inline-flex items-center justify-center px-10 sm:px-24 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 cursor-not-allowed opacity-50">
          Vamos lá!
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <button type="button" onClick={demo} className="inline-flex items-center justify-center px-10 sm:px-20 py-3 text-base font-medium text-center text-white rounded-lg border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:ring-gray-800">
          Demo
        </button>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src={logo} alt="Logo" width={200} />
      </div>
    </main>
  );
};

export default LandingPage;