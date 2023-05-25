import styled from "styled-components";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import axios from "axios";


const FormTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    width: 1728px;        
    
`
const FormTextTitle = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 48px;
`

const FormTextSubTitle = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
`

const FormInput = styled.input`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 48px;

    width: 1367px;
    padding: 10px;
    background: #FFFFFF;
    border: 1.70073px solid #717171;
    border-radius: 17.0073px;
`

const FormInputDivFinal = styled.div`
    display: flex;
    flex-direction: row;
    gap: 34px;
`

const FormInputSelect = styled.select`
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 5px;
    width: 250px;
    height: 42px;
    font-size: 20px;
`
const FormSaveButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    color: black;    
    height: 100px;
    /* background-color: #eeeeee; */
    align-items: center;
    gap:20px;
    
`

const FormSaveButtonDiv = styled.div`
    width: 153px;
    height: 44px;
    background-color: red;
    background: #FF0397;
    color: white;
    border: 1px solid #FF0397;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormSaveButtonText = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;    

    color: white;
    background:#FF0397;
    cursor: pointer;
`

const FormDeleteButtonDiv = styled.div`
    width: 153px;
    height: 44px;
    background-color: red;
    background: white;
    color: #FF0397
    color: white;
    border: 1px solid #FF0397;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormDeleteButtonText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;    

    color: #FF0397;
    background: white;
    cursor: pointer;
`
const LoadingContainer = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 20px;    

    color: #FF0397;
    background: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 600px;
    
`


const MyPropertiesForm = ({ 
    titleForm, 
    handleOpenModal,
    handleClickEdit,
    handleOpenDeletedModal,
    propertyId,
    propertyName,
    owner,
    address,
    city,
    federalState,
    zip_code,

}) => {

    const[loading,setLoading] = useState(false);
    const [propertyIdState,setPropertyIdState] = useState(propertyId);
    const[propertyNameState,setPropertyNameState] = useState(propertyName);    
    const[addressState,setAddressState] = useState(address);
    const[cityState,setCityState] = useState(city);
    const[federalStateState,setFederalStateState] = useState(federalState);
    const[zipCodeState,setZipCodeState] = useState(zip_code); 


    

    const options = [
        {value: '', text: '--Choose an option--'},
        {value: 'apartment', text: 'Apartamento inteiro 🏬'},
        {value: 'house', text: 'Casa 🏠'},
        {value: 'room', text: 'Quarto 🛌'},
    ];

    const roomNumberOptions = [
        {value: 0, text: '--Choose an option--'},
        {value: 1, text: '1'},
        {value: 2, text: '2'},
        {value: 3, text: '3'},
        {value: 4, text: '4'},
    ]

    const [selected, setSelected] = useState(options[0].value);
    const [numberRoomSelected, setNumberRoomSelected] = useState(roomNumberOptions[0].value);

    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
    };

    const updateProperty = async () => {
        const payload = {            
            propertyName: propertyNameState,
            address: addressState,
            city: cityState,
            federalState: federalStateState,
            zip_code: zipCodeState
        }
        
        try {
            const response = await axios.put(`https://6f80xdhs4f.execute-api.us-east-1.amazonaws.com/dev/api/v1/property/${propertyIdState}`, payload);
            console.log(response);
        } catch (error) {
            console.log(error);
        } 
   
    }

    const deleteProperty = async () =>{
               
        try {
            const response = await axios.delete(`https://6f80xdhs4f.execute-api.us-east-1.amazonaws.com/dev/api/v1/property/${propertyIdState}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        } 
    }

    const handleChangeNumberRoom = event =>{
        console.log(event.target.value);
        setNumberRoomSelected(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateProperty();
        handleOpenModal();
        handleClickEdit();
        
        //alert(`The name you entered was: ${selected}`)        
    }

    const handleDeleteButton = (event) =>{
        event.preventDefault();
        deleteProperty();
        handleOpenDeletedModal();
        handleClickEdit();
    }

  return (
    <>    
        { loading && <LoadingContainer>Loading...</LoadingContainer>} 
        { !loading && 
            <FormTextContainer>
            
            <form onSubmit={handleSubmit}>
                <fieldset style={{ marginBottom: '100px', border: 'none'}}>
                    { titleForm && <FormTextTitle style={{ marginTop: '30px', fontSize: '30px', fontWeight: '600'}}>{titleForm}</FormTextTitle>}
                    <div style={{ marginBottom: '60px', marginTop: '30px'}}>
                        <label>                        
                            <FormTextTitle>Nome da Propriedade</FormTextTitle>
                            <FormInput 
                                name="propertyName" 
                                value={propertyNameState}
                                onChange={e => setPropertyNameState(e.target.value)}
                            ></FormInput>
                        </label> 
                    </div>        
                    <FormTextTitle style={{ marginBottom: '20px'}}>Endereço</FormTextTitle>
                    <label>                    
                        <FormTextSubTitle>Rua/Avenida</FormTextSubTitle>
                        <FormInput 
                            name="address" 
                            value={addressState}
                            onChange={e => setAddressState(e.target.value)}
                        ></FormInput>                    
                    </label>
                    <FormInputDivFinal>
                        <label>                    
                            <FormTextSubTitle>Cidade</FormTextSubTitle>
                            <FormInput 
                                name="city" 
                                value={cityState}
                                onChange={e => setCityState(e.target.value)}
                                style={{ width: '421px'}}
                            ></FormInput>                    
                        </label>
                        <label>                    
                            <FormTextSubTitle>Estado</FormTextSubTitle>
                            <FormInput 
                                name="state" 
                                value={federalStateState} 
                                onChange={e => setFederalStateState(e.target.value)}
                                style={{ width: '194px'}}
                            ></FormInput>                    
                        </label>
                        <label>                    
                            <FormTextSubTitle>CEP</FormTextSubTitle>
                            <FormInput 
                                name="zip_code" 
                                value={zipCodeState}
                                onChange={e => setZipCodeState(e.target.value)}
                                style={{ width: '684px'}}
                            ></FormInput>                    
                        </label>
                    </FormInputDivFinal>
                    <FormInputDivFinal style={{ marginTop: '80px'}}>
                        { selected == 'apartment' ?
                            <>
                                <div>
                                    <FormTextSubTitle style={{ fontWeight: '500', fontSize: '22px'}}>Tipo de aluguel</FormTextSubTitle>
                                    <div style={{ marginTop: '5px'}}>
                                        <label>
                                            <FormInputSelect value={selected} onChange={handleChange} >                                    
                                                { options.map( option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.text}
                                                    </option>
                                                ))}
                                            </FormInputSelect>                 
                                        </label>
                                    </div> 
                                </div>
                                <div style={{ marginLeft: '170px'}}>
                                    <FormTextSubTitle style={{ fontWeight: '500', fontSize: '22px'}}>Quartos</FormTextSubTitle>
                                    <div style={{ marginTop: '5px'}}>
                                        <label>
                                            <FormInputSelect value={numberRoomSelected} onChange={handleChangeNumberRoom} >                                    
                                                { roomNumberOptions.map( option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.text}
                                                    </option>
                                                ))}
                                            </FormInputSelect>                 
                                        </label>
                                    </div> 
                                </div>
                            </>
                            :
                            <div>
                                <FormTextSubTitle style={{ fontWeight: '500', fontSize: '22px'}}>Tipo de aluguel</FormTextSubTitle>
                                <div style={{ marginTop: '5px'}}>
                                    <label>
                                        <FormInputSelect value={selected} onChange={handleChange} >                                    
                                            { options.map( option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.text}
                                                </option>
                                            ))}
                                        </FormInputSelect>                 
                                    </label>
                                </div> 
                            </div>
                        }                                                             
                    </FormInputDivFinal>  
                    <FormSaveButtonContainer>
                        <FormDeleteButtonDiv>
                            <FormDeleteButtonText onClick={handleDeleteButton}>Excluir</FormDeleteButtonText>
                        </FormDeleteButtonDiv>
                        <FormSaveButtonDiv onClick={handleSubmit}>
                            <FormSaveButtonText >Salvar</FormSaveButtonText>
                        </FormSaveButtonDiv >
                    </FormSaveButtonContainer>   
                </fieldset>
                
            </form>

        </FormTextContainer> 
        }
        
    </>
  )
}

export default MyPropertiesForm