import styled from "styled-components";
import  IconProfile  from '../../Assets/iconProfile.png';

const NavbarIconProfileContainer = styled.div`
    margin-right: 70px;
    margin-top: 25px;
    cursor:pointer;
`



function NavBarIconProfile() {      
    return(
        <NavbarIconProfileContainer>
            <img src={IconProfile}></img>
        </NavbarIconProfileContainer>
    )  

}
  
export default NavBarIconProfile