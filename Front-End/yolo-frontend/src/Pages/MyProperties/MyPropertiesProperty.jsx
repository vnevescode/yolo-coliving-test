import styled from "styled-components";
import { useState } from "react";
import Property01 from '../../Assets/property-01.png';
import Property02 from '../../Assets/property-02.png';
import Property03 from '../../Assets/property-03.png';
import DeleteIcon from '../../Assets/deleteIcon.png';
import EditIcon from '../../Assets/editIcon.png'
import MyPropertiesForm from "./MyPropertiesForm";
import axios from "axios";

const PropertyContainerDiv = styled.div`
    display: flex;
    color: black;
    width: 1728px;    
    background-color: lightgray; 
    
`

const CheckBoxContainerDiv = styled.div`
    display: flex;
    color: black;
    width: 100px;
    height: 200px;    
    background-color: #eeeeee;
    margin-left: 70px;
`

const CheckBoxDiv = styled.div`
    width: 30px;
    height: 30px;
    border: 0.5px solid black;
    border-radius: 4px;    
    margin: auto 0;
    margin-left: 35px;
    cursor: pointer;
`

const ImageContainerDiv = styled.div`
    display: flex;
    color: black; 
    padding: 25px;
    
`
const InfoContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black; 
    /* background-color: #eeeeaa; */
    text-align: left;
    margin-left: 40px;
    
    

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;  
`
const InfoContainerHr = styled.hr`
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin-left: 40px;
    margin-bottom: 60px;
    margin-top: 60px;
`
const OptionsContainerDiv = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    margin-left: 180px;
    gap: 20px;
`

const OptionsContainerEdit = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius:5px;
    cursor:pointer;
    
`
const OptionsContainerDelete = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius:5px;
    border: 2px solid #000000;
    cursor:pointer;
`

const PropertySeparetorHr = styled.hr`
    border: 1px solid rgba(0, 0, 0, 0.5);
    color: red;
    width: 1196px;
`

const FormDiv = styled.div`
    height: 300px;
    width: 300px;
    
`



 const MyPropertiesProperty = (
    {   editBt, 
        handleOpenModal,
        handleOpenDeletedModal,
        propertyName,
        owner,
        address,
        city,
        federalState,
        zip_code,
        propertyId,
    }) => {

    //Generate random number;
    let randNum =  Math.floor(Math.random() * 2) + 1;
    console.log(randNum);

    const arrImages = [Property01,Property02,Property03];

    const [isClickedEdit, setIsClickedEdit] = useState(false);

    const [propertyNameState,setpropertyNameState] = useState(propertyName);

    
    

    //const backGButton = isClicked ? '#FF0397': 'white';

   /*  const handleCheck = () => {
        setIsClicked((current) => !current);
      }; */

    const handleClickEdit = () => {
        setIsClickedEdit((current) => !current);
    }

    const handleClickDelete = async () => {
        
        handleOpenDeletedModal();
        try {
            const response = await axios.delete(`https://6f80xdhs4f.execute-api.us-east-1.amazonaws.com/dev/api/v1/property/${propertyId}`);            
            console.log(response);
        } catch (error) {
            console.log(error);
        } 
    }

    

    return (
        
        <>
            
            <PropertyContainerDiv >
                <CheckBoxContainerDiv>
                    <CheckBoxDiv />
                </CheckBoxContainerDiv>
                <ImageContainerDiv>
                    <img src={arrImages[randNum]} style={{ borderRadius: '8px'}}></img>
                </ImageContainerDiv>
                <InfoContainerDiv style={{width: '220px'}}>
                    <span style={{ fontWeight: '600', marginBottom: '12px'}}>{propertyName}</span>
                    <span>{address}</span>                                        
                </InfoContainerDiv>
                <InfoContainerHr/>
                <InfoContainerDiv style={{width: '100px'}}>
                    <span style={{ fontWeight: '600', marginBottom: '12px'}}>Quartos</span>
                    <span>4</span>                                        
                </InfoContainerDiv>
                <InfoContainerHr/>
                <InfoContainerDiv style={{width: '200px'}}>
                    <span style={{ fontWeight: '600', marginBottom: '12px'}}>Tipos de aluguel</span>
                    <span>Apartamento inteiro</span>                                        
                </InfoContainerDiv>
                <InfoContainerHr/>
                <InfoContainerDiv style={{width: '100px'}}>
                    <span style={{ fontWeight: '600', marginBottom: '12px'}}>Status</span>
                    <span>Publicado</span>                                        
                </InfoContainerDiv>
                <OptionsContainerDiv id={editBt}>
                    <OptionsContainerEdit onClick={handleClickEdit}>
                        <img src={EditIcon}></img>
                    </OptionsContainerEdit>
                    <OptionsContainerDelete id={editBt} onClick={handleClickDelete}>
                        <img src={DeleteIcon}></img>
                    </OptionsContainerDelete>
                </OptionsContainerDiv>
                
            </PropertyContainerDiv>

            <PropertySeparetorHr></PropertySeparetorHr>
            

            {   isClickedEdit && 
                <MyPropertiesForm 
                handleOpenModal={handleOpenModal}
                handleClickEdit={handleClickEdit}
                handleOpenDeletedModal={handleOpenDeletedModal}
                propertyId={propertyId}
                propertyName={propertyNameState}
                owner={owner}
                address={address}
                city={city}
                federalState={federalState}
                zip_code={zip_code}
                />
            
            }
            

            
        </>
    )
 }
 
 export default MyPropertiesProperty