import { useState } from "react";
import MyPropertiesContainer from "./MyPropertiesContainer"
import Modal from "../../Components/Modal/Modal";




const MyPropertiesPage = () => {

  

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
        
        <MyPropertiesContainer 
          handleOpenModal={handleOpenModal}
          handleOpenDeletedModal={handleOpenDeletedModal}
        ></MyPropertiesContainer>  
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

export default MyPropertiesPage