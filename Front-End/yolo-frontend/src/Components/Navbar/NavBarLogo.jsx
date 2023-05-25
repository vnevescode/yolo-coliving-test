import styled from "styled-components";
import  IconYolo  from '../../Assets/iconYoloRosaPhoto.png';
import { useNavigate } from "react-router-dom";

const NavbarLogoContainer = styled.div`
    margin-left: 70px;        
    width: 138px; 
    cursor:pointer;       
`



function NavBarLogo() { 
    
    const navigate = useNavigate();

    const navigateToHome = () => {
        // 👇️ navigate to /contacts
        navigate('/');
    };

    return(
        <NavbarLogoContainer onClick={navigateToHome}>
            <img src={IconYolo} style={{ marginTop: '10px' }}></img>
        </NavbarLogoContainer>
    )  

}
  
export default NavBarLogo