import styled from "styled-components";
import HomePageText from "./HomePageText";
import HomePageButton from "./HomePageButton";


const HomePageContentContainer = styled.div`
    display: flex;
    flex-direction: column;   
    color: white;
    width: 1085px;
    background-color: rgba(256, 256, 256, 0);
`

function HomePageContent() {
  
    return (
      <HomePageContentContainer>
            <HomePageText></HomePageText>
            <HomePageButton></HomePageButton>
      </HomePageContentContainer>
    )
  }
  
  export default HomePageContent