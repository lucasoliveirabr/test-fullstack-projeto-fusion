import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from 'react-modal';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { mutate } from "swr";
import { Hero } from "../../types";

type HeroFormProps = {
  modalVisibleProp: boolean,
  onClose: () => void,
}

const allowedHeroes = [
  'Homem-Aranha', 'Homem de Ferro', 'Capitão América', 'Thor', 'Hulk', 'Viúva Negra', 'Gavião Arqueiro', 'Pantera Negra', 'Doutor Estranho', 'Feiticeira Escarlate', 'Visão', 'Falcão', 'Soldado Invernal', 'Senhor das Estrelas', 'Groot', 'Shang-Chi', 'Homem-Formiga', 'Capitã Marvel', 'Demolidor', 'Tempestade', 'Wolverine', 'Jean Grey', 'Ciclope', 'Noturno', 'Fera', 'Professor X', 'Adam Warlock', 'Deadpool', 'Surfista Prateado', 'Valquíria', 'Mulher-Hulk', 'Falcão Noturno', 'Patriota de Ferro', 'Máquina de Combate', 'Ms. Marvel', 'Dominó', 'Longshot', 'Wiccano', 'Hulkling', 'América Chávez', 'Sersi', 'Gilgamesh', 'Thena', 'Phastos', 'Makkari', 'Ajak', 'Serpente da Lua'];

const HeroForm: React.FC<HeroFormProps> = ({ modalVisibleProp, onClose }) => {
  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Hero>();

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<Hero> = async ({ name, powersAndAbilities, origin }): Promise<void> => {
    try {
      const url: string = import.meta.env.MODE === "production"
        ? import.meta.env.VITE_API_URL_PROD
        : import.meta.env.VITE_API_URL_DEV;

      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          powersAndAbilities,
          origin
        }),
      }).then(async response => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(JSON.stringify(errorData));
        }
      });

      mutate(url);

      onClose();
    } catch (error) {
      if (error instanceof Error) {
        const errorData = JSON.parse(error.message);
        const errorMessage = errorData.response || "Erro não identificado.";

        setError("root", {
          message: `Erro ao criar um herói: ${errorMessage}`,
        });
      } else {
        setError("root", {
          message: `Erro inesperado: ${error}`,
        });
      }
    }
  };

  const normalizeString = (str: string): string => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const nameIsContainedInAllowedHeroes = (value: string): boolean => {
    const normalizedValue = normalizeString(value);
    return allowedHeroes.some(item => normalizedValue.includes(normalizeString(item)));
  };

  return (
    <Modal
      isOpen={modalVisibleProp}
      onRequestClose={onClose}
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
          <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Fechar modal</span>
          </button>
        </div>

        <form autoComplete="on" onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
          <div className="grid gap-4 mb-4 grid-cols-2">

            <div className="col-span-2">
              <div> {/* div required by Tippy to work as expected. */}
                <Tippy
                  content="O nome precisa incluir uma das seguintes opções: Homem-Aranha, Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra, Gavião Arqueiro, Pantera Negra, Doutor Estranho, Feiticeira Escarlate, Visão, Falcão, Soldado Invernal, Senhor das Estrelas, Groot, Shang-Chi, Homem-Formiga, Capitã Marvel, Demolidor, Tempestade, Wolverine, Jean Grey, Ciclope, Noturno, Fera, Professor X, Adam Warlock, Deadpool, Surfista Prateado, Valquíria, Mulher-Hulk, Falcão Noturno, Patriota de Ferro, Máquina de Combate, Ms. Marvel, Dominó, Longshot, Wiccano, Hulkling, América Chávez, Sersi, Gilgamesh, Thena, Phastos, Makkari, Ajak, Serpente da Lua."
                  interactive={true}
                  placement="bottom"
                  allowHTML={true}
                >
                  <div className="flex items-center mb-2 underline hover:no-underline text-white">
                    <label htmlFor="nameCreateHero" className="block mr-[6px] text-sm font-medium text-white">
                      Nome
                    </label>
                    <span className="sr-only">Info</span>
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                  </div>
                </Tippy>
              </div>
              <input
                {...register("name", {
                  required: "Insira um nome.",
                  maxLength: {
                    value: 30,
                    message: "Limite de 30 caracteres atingido.",
                  },
                  validate: (value) => {
                    if (!nameIsContainedInAllowedHeroes(value)) {
                      return "O nome precisa incluir uma das opções acima, no ícone de informação.";
                    }
                    return true;
                  },
                })}
                type="text"
                id="nameCreateHero"
                autoComplete="on"
                placeholder="Digite o nome de um herói"
                className={`block outline-none p-2.5 w-full text-sm text-white bg-gray-600 rounded-lg border border-gray-500 placeholder-gray-400 ${errors.name ? "focus:ring-red-400 focus:border-red-400" : "focus:ring-blue-500 focus:border-blue-500"}`}
              />
              {errors.name && (<p className="mt-1 text-sm text-red-400">{errors.name.message}</p>)}
            </div>

            <div className="col-span-2">
              <label htmlFor="powersAndAbilitiesCreateHero" className="block mb-2 text-sm font-medium text-white">
                Poderes e Habilidades
              </label>
              <textarea
                {...register("powersAndAbilities", {
                  required: "Insira poderes e habilidades.",
                  maxLength: {
                    value: 750,
                    message: "Limite de 750 caracteres atingido.",
                  },
                })}
                id="powersAndAbilitiesCreateHero"
                autoComplete="on"
                rows={4}
                placeholder="Descreva os poderes e habilidades do herói"
                className={`block outline-none p-2.5 w-full text-sm text-white bg-gray-600 rounded-lg border border-gray-500 placeholder-gray-400 ${errors.powersAndAbilities ? "focus:ring-red-400 focus:border-red-400" : "focus:ring-blue-500 focus:border-blue-500"}`}
              />
              {errors.powersAndAbilities && (<p className="mt-1 text-sm text-red-400">{errors.powersAndAbilities.message}</p>)}
            </div>

            <div className="col-span-2">
              <label htmlFor="originCreateHero" className="block mb-2 text-sm font-medium text-white">
                Origem
              </label>
              <input
                {...register("origin", {
                  required: "Insira uma origem.",
                  maxLength: {
                    value: 100,
                    message: "Limite de 100 caracteres atingido.",
                  },
                })}
                type="text"
                id="originCreateHero"
                autoComplete="on"
                placeholder="Digite a origem do herói"
                className={`block outline-none p-2.5 w-full text-sm text-white bg-gray-600 rounded-lg border border-gray-500 placeholder-gray-400 ${errors.origin ? "focus:ring-red-400 focus:border-red-400" : "focus:ring-blue-500 focus:border-blue-500"}`}
              />
              {errors.origin && (<p className="mt-1 text-sm text-red-400">{errors.origin.message}</p>)}
            </div>

          </div>
          <button disabled={isSubmitting} type="submit" className="text-white inline-flex justify-center bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm w-full py-2.5">
            {isSubmitting ? (
              <>
                Criando...
              </>
            ) : (
              <>
                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                Criar herói
              </>
            )}
          </button>

          {errors.root && (<p className="mt-1 text-sm text-red-400">{errors.root.message}</p>)}
        </form>

      </div>
    </Modal>
  );
};

export default HeroForm;