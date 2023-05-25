import styled from "styled-components";
import HomePageContent from "./HomePageContent";


const HomePageFilterContainer = styled.div`    
    display:flex;
    justify-content: center;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 28.03%, rgba(0, 0, 0, 0.94) 100%);
     
`

function HomePageFilter() {
  
    return (
      <HomePageFilterContainer>
        <HomePageContent>
            
        </HomePageContent>
      </HomePageFilterContainer>
    )
  }
  
  export default HomePageFilter