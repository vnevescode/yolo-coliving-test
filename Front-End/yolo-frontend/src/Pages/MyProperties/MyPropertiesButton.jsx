import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonContainerDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    color: black;
    width: 1728px;    
    /* background-color: gray; */
`

const ButtonBt = styled.button`
    background: #FF0397;
    margin-right: 100px;
    border-radius: 30px;
    width: 193px;
    height: 44px;
    cursor: pointer;

    color:white;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    
    border: none;
`

const MyPropertiesButton = () => {
    const navigate = useNavigate();

    const navigateToAddNewProperty = () => {
        // 👇️ navigate to /contacts
        navigate('/add-new-property');
    };

  return (
    <ButtonContainerDiv onClick={navigateToAddNewProperty} >
        <ButtonBt>Adicionar Imóvel</ButtonBt>
    </ButtonContainerDiv>
  )
}

export default MyPropertiesButton