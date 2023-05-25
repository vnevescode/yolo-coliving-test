import styled from "styled-components";
import MyPropertiesMenu from "../MyProperties/MyPropertiesMenu";
import AddNewPropertyForm from "./AddNewPropertyForm";

const AddNewPropertyContainerDiv = styled.div`
    display: flex;    
    justify-content: center;   
    color: black;
    width: 100%;
    flex-direction: column;
    align-items: center;   
    /* background-color: orange;  */
`

const AddNewPropertyContainer = ({handleOpenModal,handleOpenDeletedModal}) => {
  return (
    <>
        <AddNewPropertyContainerDiv>
            <MyPropertiesMenu/>
        </AddNewPropertyContainerDiv> 
        <AddNewPropertyContainerDiv>
            <AddNewPropertyForm 
              titleForm="Adicionar Imóvel"
              handleOpenModal={handleOpenModal}
              handleOpenDeletedModal={handleOpenDeletedModal}
            />
        </AddNewPropertyContainerDiv>   
    </>
   
  )
}

export default AddNewPropertyContainer