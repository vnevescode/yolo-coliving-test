import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPropertiesMenuContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center;      
    color: black;
    width: 1728px;
    height: 220px;
    
`

const MenuContainerTexts = styled.div`
    display: flex;  
    margin-top: 120px;
    margin-bottom: 120px;
    margin-right:88px;
   
`
const MenuContainerText = styled.span`
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    cursor: pointer;
`


const MyPropertiesMenu = () => {

    const navigate = useNavigate();

    const navigateToProperties = () => {
        // 👇️ navigate to /contacts
        navigate('/property');
    };

  return (
    <>
        <MyPropertiesMenuContainer>
            <MenuContainerTexts>
                <div>
                    <MenuContainerText>Novidades</MenuContainerText>
                </div>                        
            </MenuContainerTexts>
            <MenuContainerTexts>                
                <div>
                    <MenuContainerText>Mensagens</MenuContainerText>
                </div>                            
            </MenuContainerTexts>
            <MenuContainerTexts>                
                <div onClick={navigateToProperties}>
                    <MenuContainerText>Meus Imóveis</MenuContainerText>
                </div>                             
            </MenuContainerTexts>
            <MenuContainerTexts>                
                <div>
                    <MenuContainerText>Configurações</MenuContainerText>
                </div>                
            </MenuContainerTexts>
        </MyPropertiesMenuContainer>
    </>
  )
}

export default MyPropertiesMenu