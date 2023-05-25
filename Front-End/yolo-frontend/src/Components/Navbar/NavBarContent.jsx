import styled from "styled-components";
import NavBarLogo from "./NavBarLogo";
import NavBarIconProfile from "./NavBarIconProfile";




const NavbarContentContainer = styled.div`
    display:flex;
    justify-content: space-between;
    color: white;
    width: 1728px;
    height: 80px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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