import React from "react";
import Modal from 'react-modal';

type DeleteHeroModalProps = {
  modalVisibility: boolean;
  setModalVisibilityToFalse: () => void;
  onClickContinue: () => void;
}

const DeleteHeroModal: React.FC<DeleteHeroModalProps> = ({ modalVisibility, setModalVisibilityToFalse, onClickContinue }) => {

  return (
    <Modal
      isOpen={modalVisibility}
      onRequestClose={setModalVisibilityToFalse}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
      contentLabel="Modal para deletar um herói"
      ariaHideApp={false}
    >
      <div className="relative text-center p-6 w-64 sm:w-full max-w-md max-h-full rounded-lg shadow bg-gray-700">
        <svg className="mx-auto mb-4 w-12 h-12 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-400">
          Tem certeza que deseja deletar esse herói?
        </h3>
        <button type="submit" onClick={onClickContinue} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center py-2.5 px-10 text-center">
          Continuar
        </button>
        <button type="button" onClick={setModalVisibilityToFalse} className="py-2.5 px-11 sm:px-5 sm:ml-3 mt-1 sm:mt-0 text-sm font-medium text-gray-400 focus:outline-none bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700">
          Cancelar
        </button>
      </div>
    </Modal>
  );
};

export default DeleteHeroModal;