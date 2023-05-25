import styled from "styled-components";
import NavbarContent from "./NavBarContent";



const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    width: 100%;
    height: 80px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

function NavBar() {      
    return(
        <div>
            <NavBarContainer>
                <div>
                    <NavbarContent/>  
                </div>
            </NavBarContainer>
        </div>
    )  

}
  
export default NavBar