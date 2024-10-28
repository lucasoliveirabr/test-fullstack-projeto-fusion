import React, { useState, FormEvent } from "react";
import DeleteHeroModal from "../Shared/DeleteHeroModal";
import { mutate } from "swr";

import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/16/solid";

type HeroItemProps = {
  id: number;
  name: string;
  powersAndAbilities: string;
  origin: string;
}

type HeroDataProps = {
  name: string;
  powersAndAbilities: string;
  origin: string;
}

const HeroItem: React.FC<HeroItemProps> = ({ id, name, powersAndAbilities, origin }) => {
  const [heroData, setHeroData] = useState<HeroDataProps>({
    name,
    powersAndAbilities,
    origin
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleCancelEdit = (): void => {
    setHeroData({
      name,
      powersAndAbilities,
      origin
    });
    setIsEditing(false);
  };

  const handleSubmitEdit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    await fetch(`http://localhost:3000/api/heroes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name: heroData.name,
        powersAndAbilities: heroData.powersAndAbilities,
        origin: heroData.origin
      }),
    });

    mutate(`http://localhost:3000/api/heroes`);

    setIsEditing(false);
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

  return (
    <div className="flex flex-col max-w-md p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
      {isEditing ? (
        <form autoComplete="on" onSubmit={handleSubmitEdit}>
          <input
            type="text"
            name="nameEditHero"
            id="nameEditHero"
            required
            autoComplete="on"
            value={heroData.name}
            onChange={(event) => setHeroData({ ...heroData, name: event.target.value })}
            className="border p-2 mr-2 mb-2 rounded w-full bg-gray-800 text-2xl font-bold tracking-tight text-white text-shadow"
          />

          <label htmlFor="powersAndAbilitiesEditHero" className="text-gray-400 mb-1 font-bold">Poderes e Habilidades:</label>
          <textarea
            name="powersAndAbilitiesEditHero"
            id="powersAndAbilitiesEditHero"
            value={heroData.powersAndAbilities}
            required
            autoComplete="on"
            onChange={(event) => setHeroData({ ...heroData, powersAndAbilities: event.target.value })}
            className="border p-2 mb-4 rounded w-full min-h-36 bg-gray-800 text-gray-400"
          />

          <label htmlFor="originEditHero" className="text-gray-400 mb-1 font-bold">Origem:</label>
          <textarea
            name="originEditHero"
            id="originEditHero"
            value={heroData.origin}
            required
            autoComplete="on"
            onChange={(event) => setHeroData({ ...heroData, origin: event.target.value })}
            className="border p-2 mb-4 rounded w-full bg-gray-800 text-gray-400"
          />

          <div className="flex space-x-1 justify-end">
            <button type="button" onClick={handleCancelEdit} className="bg-transparent rounded-lg px-4 py-2 text-white">
              Cancelar
            </button>
            <button type="submit" className="bg-red-400 hover:bg-red-500 rounded-lg px-4 py-2 text-white">
              Salvar
            </button>
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