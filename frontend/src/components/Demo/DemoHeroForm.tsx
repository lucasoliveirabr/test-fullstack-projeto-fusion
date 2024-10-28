import React, { useState, FormEvent } from "react";
import Modal from 'react-modal';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useHeroListDemoStore } from "../../store/heroListDemo";

type HeroFormProps = {
  modalVisibleProp: boolean,
  onClose: () => void,
}

type HeroToBeCreated = {
  name: string;
  powersAndAbilities: string;
  origin: string;
}

const DemoHeroForm: React.FC<HeroFormProps> = ({ modalVisibleProp, onClose }) => {
  const { addHero } = useHeroListDemoStore();

  const [heroToBeCreated, setHeroToBeCreated] = useState<HeroToBeCreated>({
    name: "",
    powersAndAbilities: "",
    origin: ""
  });

  const handleClose = () => {
    setHeroToBeCreated({
      name: "",
      powersAndAbilities: "",
      origin: ""
    });

    onClose();
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addHero(
      heroToBeCreated.name,
      heroToBeCreated.powersAndAbilities,
      heroToBeCreated.origin
    );

    setHeroToBeCreated({
      name: "",
      powersAndAbilities: "",
      origin: ""
    });

    onClose();
  };

  return (
    <Modal
      isOpen={modalVisibleProp}
      onRequestClose={handleClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[28rem]"
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
      contentLabel="Modal para criar um herói"
      ariaHideApp={false}
    >
      <div className="relative bg-gray-700 rounded-lg shadow">

        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
          <h3 className="text-lg font-semibold text-white">
            Criar um novo herói
          </h3>
          <button type="button" onClick={handleClose} className="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Fechar modal</span>
          </button>
        </div>

        <form autoComplete="on" onSubmit={handleSubmit} className="p-4 md:p-5">
          <div className="grid gap-4 mb-4 grid-cols-2">

            <div className="col-span-2">
              <Tippy
                content="O nome precisa incluir uma das seguintes opções: Homem-Aranha, Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra, Gavião Arqueiro, Pantera Negra, Doutor Estranho, Feiticeira Escarlate, Visão, Falcão, Soldado Invernal, Senhor das Estrelas, Groot, Shang-Chi, Homem-Formiga, Capitã Marvel, Demolidor, Tempestade, Wolverine, Jean Grey, Ciclope, Noturno, Fera, Professor X, Adam Warlock, Deadpool, Surfista Prateado, Valquíria, Mulher-Hulk, Falcão Noturno, Patriota de Ferro, Máquina de Combate, Ms. Marvel, Dominó, Longshot, Wiccano, Hulkling, América Chávez, Sersi, Gilgamesh, Thena, Phastos, Makkari, Ajak, Serpente da Lua."
                interactive={true}
                placement="bottom"
                allowHTML={true}
              >
                <div className="flex items-center mb-2 underline hover:no-underline text-white">
                  <label htmlFor="nameCreateHero" className="block mr-1 text-sm font-medium text-white">
                    Nome
                  </label>
                  <span className="sr-only">Info</span>
                  <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                </div>
              </Tippy>
              <input
                type="text"
                name="nameCreateHero"
                id="nameCreateHero"
                required
                autoComplete="on"
                value={heroToBeCreated.name}
                onChange={(event) => setHeroToBeCreated({ ...heroToBeCreated, name: event.target.value })}
                placeholder="Digite o nome de um herói"
                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="powersAndAbilitiesCreateHero" className="block mb-2 text-sm font-medium text-white">
                Poderes e Habilidades
              </label>
              <textarea
                id="powersAndAbilitiesCreateHero"
                name="powersAndAbilitiesCreateHero"
                required
                autoComplete="on"
                rows={4}
                value={heroToBeCreated.powersAndAbilities}
                onChange={(event) => setHeroToBeCreated({ ...heroToBeCreated, powersAndAbilities: event.target.value })}
                placeholder="Descreva os poderes e habilidades do herói"
                className="block p-2.5 w-full text-sm text-white bg-gray-600 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="originCreateHero" className="block mb-2 text-sm font-medium text-white">
                Origem
              </label>
              <input
                type="text"
                name="originCreateHero"
                id="originCreateHero"
                required
                autoComplete="on"
                value={heroToBeCreated.origin}
                onChange={(event) => setHeroToBeCreated({ ...heroToBeCreated, origin: event.target.value })}
                placeholder="Digite a origem do herói"
                className="bg-gray-600 border border-gray-500 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400"
              />
            </div>

          </div>
          <button type="submit" className="text-white inline-flex justify-center bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm w-full py-2.5">
            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
            Criar herói
          </button>
        </form>

      </div>
    </Modal>
  );
};

export default DemoHeroForm;