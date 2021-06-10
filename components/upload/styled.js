import styled, { css } from 'styled-components';

export const AlertaArea = styled.div`
    display:flex;
    width:100%;
    max-height:30px;
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const BotaoArea = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    flex:1;

    @media (max-width:799px){
        max-width:300px;
        overflow:hidden;
        flex-direction:column;
        height:100px;
    }
    
`;

export const UploadButton = styled.div`
    height:30px;
    color:#FFF;
    width:120px;
    background-color:#716FF2;
    cursor:pointer;
    border-radius:5px;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction:column;
    margin-left:15px;
    font-size:14px;
    &:hover{
        opacity:0.9;
    }

    @media (max-width:799px){
        width:100%;
        margin-left:0;
    }
`;

export const ErrorAlert = styled.p`
    color:#613232;
    margin-left:10px;
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:12px
`;

export const IptArea = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`;

export const DropContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:auto;
    min-height:80px;
    flex:1;
    flex-direction:row;

    @media (max-width:799px){
        max-width:300px;
    }
`;    

export const UploadMessage = styled.p`

`;

export const SuccessAlert = styled.p`
    color:#326145;
    margin-left:10px;
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:12px
`;