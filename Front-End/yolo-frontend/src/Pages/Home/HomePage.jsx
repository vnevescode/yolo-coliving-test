import styled from "styled-components";

import HomePhoto from '../../Assets/HomePhoto.png';
import HomePageFilter from "./HomePageFilter";

const HomePageContainer = styled.div`
    
    display:flex;
    justify-content: center;  
    background-image: url(${HomePhoto}); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    color: white;
    background-color: #1a1a1a;
    min-height: calc(100vh - 80px);   
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    
`

function HomePage() {
  
    return (
        <HomePageContainer>           
            <HomePageFilter/>
        </HomePageContainer>
    )
  }
  
  export default HomePage