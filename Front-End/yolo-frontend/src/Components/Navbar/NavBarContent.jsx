import styled from "styled-components";
import NavBarLogo from "./NavBarLogo";
import NavBarIconProfile from "./NavBarIconProfile";




const NavbarContentContainer = styled.div`
    display:flex;
    justify-content: space-between;
    color: white;
    width: 1728px;
    height: 80px;
    
`

function NavbarContent() {   

    return(
        <div>
            <NavbarContentContainer>                
                <NavBarLogo />
                <NavBarIconProfile />
            </NavbarContentContainer>
        </div>
    )  

}
  
export default NavbarContent