import React, { useState, FormEvent } from "react";
import DeleteHeroModal from "../Shared/DeleteHeroModal";
import { useHeroListDemoStore } from "../../store/heroListDemo";
import ensureFindMethod from "../../utils/ensureFindMethod";

import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/16/solid";

type HeroProps = {
  id: number;
  name: string;
  powersAndAbilities: string;
  origin: string;
}

type HeroItemProps = {
  id: number;
  onEdit: (hero: HeroProps) => void;
  onDelete: (id: number) => void;
}

type HeroDataProps = {
  name: string;
  powersAndAbilities: string;
  origin: string;
}

const DemoHeroItem: React.FC<HeroItemProps> = ({ id, onEdit, onDelete }) => {
  const { heroList } = useHeroListDemoStore();

  const thisHero: HeroProps = ensureFindMethod(heroList.find(hero => hero.id === id));

  const [heroData, setHeroData] = useState<HeroDataProps>({
    name: thisHero.name,
    powersAndAbilities: thisHero.powersAndAbilities,
    origin: thisHero.origin
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleCancelEdit = (): void => {
    setHeroData({
      name: thisHero.name,
      powersAndAbilities: thisHero.powersAndAbilities,
      origin: thisHero.origin
    });
    setIsEditing(false);
  };

  const handleSubmitEdit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onEdit({
      id: thisHero.id,
      name: heroData.name,
      origin: heroData.origin,
      powersAndAbilities: heroData.powersAndAbilities,
    });

    setIsEditing(false);
  };

  const handleDelete = (): void => {
    onDelete(thisHero.id);
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
              {thisHero.name}
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
            <p className="break-words">{thisHero.powersAndAbilities}</p>
          </div>
          <div className="text-gray-400">
            <p className="font-bold">Origem:</p>
            <p className="break-words">{thisHero.origin}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default DemoHeroItem;