import styled from "styled-components";


const HomePageTextTitleContainer = styled.div`    
    background-color: rgba(256, 256, 256, 0);
    margin-top: 30%;
`
const Title = styled.span`
    font-family: Inter;
    font-size: 86px;
    font-weight: 600;
    line-height: 97px;
    letter-spacing: 0.05em;    
    color:white;
    background-color: rgba(256, 256, 256, 0);
`

const HomePageTextSubTitle1Container = styled.div`    
    background: rgba(256, 256, 256, 0);
    text-align: center;
`

const SubTitle = styled.span`
    font-family: Inter;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 50px;
    line-height: 70px;
    letter-spacing: 0.05em;
    color:white;
    background-color: rgba(256, 256, 256, 0);
`

const HomePageTextSubTitle2Container = styled.div`   
    background: rgba(256, 256, 256, 0);
    text-align: center;
`

const BigText = styled.span`
    font-family: Inter;
    font-style: normal;    
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: white;
    background-color: rgba(256, 256, 256, 0);
`

function HomePageText() {
  
    return (
        <>
            <HomePageTextTitleContainer>                
                <Title>Mais Ser</Title>
            </HomePageTextTitleContainer>
            <HomePageTextSubTitle1Container>
                <SubTitle>Menos Ter</SubTitle>
            </HomePageTextSubTitle1Container>
            <HomePageTextSubTitle2Container>
                <BigText>A Proptech que vai transformar a sua experiência de moradia</BigText>
            </HomePageTextSubTitle2Container>
        </>
    )
  }
  
  export default HomePageText