import React, { useState, useEffect } from "react";
import DeleteHeroModal from "../Shared/DeleteHeroModal";
import { mutate } from "swr";
import { SubmitHandler, useForm } from "react-hook-form";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/16/solid";

type HeroProps = {
  id?: number;
  name: string;
  powersAndAbilities: string;
  origin: string;
}

const allowedHeroes = ['Homem-Aranha', 'Homem de Ferro', 'Capitão América', 'Thor', 'Hulk', 'Viúva Negra', 'Gavião Arqueiro', 'Pantera Negra', 'Doutor Estranho', 'Feiticeira Escarlate', 'Visão', 'Falcão', 'Soldado Invernal', 'Senhor das Estrelas', 'Groot', 'Shang-Chi', 'Homem-Formiga', 'Capitã Marvel', 'Demolidor', 'Tempestade', 'Wolverine', 'Jean Grey', 'Ciclope', 'Noturno', 'Fera', 'Professor X', 'Adam Warlock', 'Deadpool', 'Surfista Prateado', 'Valquíria', 'Mulher-Hulk', 'Falcão Noturno', 'Patriota de Ferro', 'Máquina de Combate', 'Ms. Marvel', 'Dominó', 'Longshot', 'Wiccano', 'Hulkling', 'América Chávez', 'Sersi', 'Gilgamesh', 'Thena', 'Phastos', 'Makkari', 'Ajak', 'Serpente da Lua'];

const HeroItem: React.FC<HeroProps> = ({ id, name, powersAndAbilities, origin }) => {
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm<HeroProps>({
    defaultValues: {
      name,
      powersAndAbilities,
      origin,
    }
  });

  const [formResetState, setFormResetState] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (formResetState) {
      reset({ name, powersAndAbilities, origin });
      setFormResetState(false);
    }
  }, [formResetState, id, name, origin, powersAndAbilities, reset]);

  const handleCancelEdit = (): void => {
    setIsEditing(false);
    setFormResetState(true);
  };

  const onSubmit: SubmitHandler<HeroProps> = async ({ name, origin, powersAndAbilities }): Promise<void> => {
    try {
      await fetch(`http://localhost:3000/api/heroes/${id}`, {
        method: 'PUT',
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

      mutate(`http://localhost:3000/api/heroes`);

      setIsEditing(false);
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

  const handleDelete = async (): Promise<void> => {
    await fetch(`http://localhost:3000/api/heroes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    mutate(`http://localhost:3000/api/heroes`);

    setModalVisible(false);
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
    <div className="flex flex-col max-w-md p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
      {isEditing ? (
        <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-1">
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
              id="nameEditHero"
              autoComplete="on"
              className={`p-2 mr-2 w-full text-2xl text-white text-shadow font-bold tracking-tight bg-gray-800 rounded-md border border-gray-500 outline-none ${errors.name ? "focus:ring-red-400 focus:border-red-400" : "focus:ring-white focus:border-white"}`}
            />
            {errors.name && (<p className="text-sm text-red-400">{errors.name.message}</p>)}

            <label htmlFor="powersAndAbilitiesEditHero" className="mt-1 text-gray-400 font-bold">Poderes e Habilidades:</label>
            <textarea
              {...register("powersAndAbilities", {
                required: "Insira poderes e habilidades.",
                maxLength: {
                  value: 750,
                  message: "Limite de 750 caracteres atingido.",
                },
              })}
              id="powersAndAbilitiesEditHero"
              autoComplete="on"
              rows={4}
              className={`p-2 w-full text-gray-400 bg-gray-800 rounded-md border border-gray-500 outline-none ${errors.name ? "focus:ring-red-400 focus:border-red-400" : "focus:ring-white focus:border-white"}`}
            />
            {errors.powersAndAbilities && (<p className="text-sm text-red-400">{errors.powersAndAbilities.message}</p>)}

            <label htmlFor="originEditHero" className="mt-1 text-gray-400 font-bold">Origem:</label>
            <textarea
              {...register("origin", {
                required: "Insira uma origem.",
                maxLength: {
                  value: 100,
                  message: "Limite de 100 caracteres atingido.",
                },
              })}
              id="originEditHero"
              autoComplete="on"
              className={`p-2 w-full text-gray-400 bg-gray-800 rounded-md border border-gray-500 outline-none ${errors.name ? "focus:ring-red-400 focus:border-red-400" : "focus:ring-white focus:border-white"}`}
            />
            {errors.origin && (<p className="text-sm text-red-400">{errors.origin.message}</p>)}

            <div className="flex space-x-1 justify-end mt-4">
              <button type="button" onClick={handleCancelEdit} className="bg-transparent rounded-lg px-4 py-2 text-white">
                Cancelar
              </button>
              <button type="submit" className="bg-red-400 hover:bg-red-500 rounded-lg px-4 py-2 text-white">
                Salvar
              </button>
            </div>
          </div>
        </form>
      ) : (
        <>
          <DeleteHeroModal
            modalVisibility={modalVisible}
            setModalVisibilityToFalse={() => setModalVisible(false)}
            onClickContinue={handleDelete}
          />

          <div className="mb-2 flex justify-between items-center">
            <h5 className="mr-2 text-2xl font-bold tracking-tight text-white text-shadow">
              {name}
            </h5>
            <div className="flex space-x-1">
              <button type="button" onClick={() => setIsEditing(true)} className="bg-transparent hover:bg-gray-600 rounded-lg p-1">
                <PencilSquareIcon className="size-6 text-white" />
              </button>
              <button type="button" onClick={() => setModalVisible(true)} className="bg-transparent hover:bg-gray-700 rounded-lg p-1">
                <TrashIcon className="cursor-pointer size-6 text-white" />
              </button>
            </div>
          </div>
          <div className="text-gray-400 mb-4">
            <p className="font-bold">Poderes e Habilidades:</p>
            <p className="break-words">{powersAndAbilities}</p>
          </div>
          <div className="text-gray-400">
            <p className="font-bold">Origem:</p>
            <p className="break-words">{origin}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroItem;