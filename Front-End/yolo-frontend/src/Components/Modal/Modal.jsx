import styled from "styled-components";
import OkIcon from '../../Assets/OkIcon.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalBackgroudContainer = styled.div`
    display: flex;
    justify-content: center;    
    position:fixed;
    color: black;
    width: 100vw;
    height: 100%;
    background-color: rgba(256, 256, 256, 0);
    top: 500px;
`
const ModalContainer = styled.div`
    width: 1000px;
    height: 420px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding:25;
    background-color:#FFF9FC;
    padding: 50px;
    
`

const ModalTitle = styled.div`
    display: inline-block;
    text-align: center;
    margin-top: 20px;  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 44px;
    /* or 122% */
    color: #444444; 
    background-color:#FFF9FC;
`

const  ModalSubTitle = styled.div`
    display: inline-block;
    text-align: center;
    margin-top: 20px; 
    background-color:#FFF9FC; 
    margin-bottom: 10px;
    width: 100%; 

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    /* or 133% */

    text-align: center;

    color: #444444;
`

const ModalIcon = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;  
    background-color:#FFF9FC;
    padding-top: 20px; 
`

const ModalButton = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#FFF9FC; 
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    /* or 133% */

    text-align: center;

    color: #444444;
    border: none;
    cursor: pointer;
`

const ModalButtonBt = styled.div`
    width: 237px;
    height: 44px;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #FF0397;
    border-radius: 30px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px; 

    color: #FFFFFF;

`



const Modal = ({handleCloseModal, standardModal,title}) => {
    
    const navigate = useNavigate();

    const navigateToProperties = () => {
        // 👇️ navigate to /contacts
        navigate('/property');
    };

    const [ addProperty, setAddProperty] = useState(standardModal);

    const closeModelbt = (event) => {
        handleCloseModal();
        navigateToProperties();
    }

    
  return (
    <>
        <ModalBackgroudContainer>
            <ModalContainer>
                <ModalTitle>
                    <h1>{title}</h1>
                </ModalTitle>
                <ModalIcon>                    
                    <img src={OkIcon} style={{ width:'100px', height:'100px'}}></img>
                </ModalIcon>
                {addProperty && 
                    <ModalSubTitle>
                        <h2 style={{ backgroundColor:'#FFF9FC' }}>A nossa equipe irá revisar todas as informações e em até 24h
                            te enviaremos um email confirmando a sua publicação.</h2>
                    </ModalSubTitle>
                }
                <ModalButton>
                    <ModalButtonBt onClick={closeModelbt} >Voltar para minha lista</ModalButtonBt>
                </ModalButton>
            </ModalContainer>
        </ModalBackgroudContainer>
       
    </>
  )
}

export default Modal