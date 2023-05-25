import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const HomePageButtonContainer = styled.div`    
    display:flex;
    justify-content: center;
    width: 100%;
    background-color: rgba(256, 256, 256, 0);
    margin-top: 80px;
     
`
const HomePageBt = styled.button`
    padding: 12px 32px;
    gap: 8px;   
    background: #FF0397;
    border-radius: 30px;
    border: 0.1px solid black;  
    color:white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height, or 111% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
    cursor:pointer;
`

function HomePageButton() {

    const navigate = useNavigate();

    const navigateToProperties = () => {
        // 👇️ navigate to /contacts
        navigate('/property');
    };
  
    return (
        <HomePageButtonContainer>
            <HomePageBt onClick={navigateToProperties}>Minha lista de propriedades</HomePageBt>
        </HomePageButtonContainer>
    )
  }
  
  export default HomePageButton