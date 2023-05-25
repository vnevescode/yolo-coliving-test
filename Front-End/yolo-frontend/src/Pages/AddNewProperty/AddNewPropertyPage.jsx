import { useState } from "react";
import AddNewPropertyContainer from "./AddNewPropertyContainer"
import Modal from "../../Components/Modal/Modal";


const AddNewPropertyPage = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openDeletedModal, setOpenDeletedModal] = useState(false);

  const titleDelete = 'Sua propriedade foi deletada com sucesso!';
  const titleAdd = 'A sua unidade foi adicionada com sucesso!';

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenDeletedModal(false);
  }

  const handleOpenDeletedModal = () => {
    setOpenDeletedModal(true);
  }


  return (
    <>
      <AddNewPropertyContainer
        handleOpenModal={handleOpenModal}
        handleOpenDeletedModal={handleOpenDeletedModal}
      ></AddNewPropertyContainer>
      {openModal && 
        <Modal 
          handleCloseModal={handleCloseModal}
          title={titleAdd} 
          standardModal={true}
        ></Modal>
      }
      {openDeletedModal && 
        <Modal 
          handleCloseModal={handleCloseModal}
          title={titleDelete}
        ></Modal>
      } 
    </>
    
  )
}

export default AddNewPropertyPage