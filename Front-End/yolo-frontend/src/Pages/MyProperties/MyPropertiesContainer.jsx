import styled from "styled-components";
import MyPropertiesMenu from "./MyPropertiesMenu";
import MyPropertiesButton from "./MyPropertiesButton";
import MyPropertiesProperty from "./MyPropertiesProperty";
import dataSeed from "../../Components/seeds";
import PropertyFecthData from "../../Components/Hooks/PropertyFecthData";


const MyPropertiesContainerDiv = styled.div`
    display: flex;    
    justify-content: center;   
    color: black;
    width: 100%;
    flex-direction: column;
    align-items: center;   
    margin-top: 10px;
`
//let arr = [1,2];



const MyPropertiesContainer = ({handleOpenModal,handleOpenDeletedModal}) => {

    //fetch data from properties API
    const { data, loading } = PropertyFecthData();

  return (
    <>
        <MyPropertiesContainerDiv>        
            <MyPropertiesMenu/>
        </MyPropertiesContainerDiv>
        <MyPropertiesContainerDiv>        
            <MyPropertiesButton/>
        </MyPropertiesContainerDiv>
        <MyPropertiesContainerDiv>        
            {/* <MyPropertiesProperty 
                editBt='editBt' 
                handleOpenModal={handleOpenModal} 
                handleOpenDeletedModal={handleOpenDeletedModal}               
            /> 
            <MyPropertiesProperty editBt='editBt2'  /> 
             */}
            <div>
                {loading && <h1>Loading...</h1>}
                {console.log("Data fetched", data)}
                {!loading && (
                    data.map((element, key)=>{
                        return(
                            <MyPropertiesProperty 
                                key={key}
                                propertyId={element.propertyId}
                                propertyName={element.propertyName}
                                owner={element.owner}
                                address={element.address}
                                city={element.city}
                                federalState={element.federalState}
                                zip_code={element.zip_code}
                                editBt={`edit-bt-${key}`} 
                                handleOpenModal={handleOpenModal} 
                                handleOpenDeletedModal={handleOpenDeletedModal}               
                            />
                        )
                    })
                )}
            </div>
                    
        </MyPropertiesContainerDiv>
        
            
        
    </>
    
  )
}

export default MyPropertiesContainer