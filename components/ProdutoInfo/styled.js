import styled, { css } from 'styled-components';

export const BtnCart = styled.button`
    padding:10px;
    background-color:#06d755;
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;

    &:hover{
        opacity:0.9;
    }
`;

export const BtnIcon = styled.button`
    background-color:transparent;
    border:none;
`;

export const Container = styled.div`

    display:none;
    
    @media (max-width:600px){
        display:flex;
        flex-direction:column;
        padding:10px;
        width:100%;
    }
    
`;

export const ImagemArea = styled.div`
    width:100%;
    height:300px;
`;

export const Icon  = styled.img`
    width:24px;
    height:24px;
`;

export const Img  = styled.img`
    width:100%;
    height:auto;
`;

export const InfoArea = styled.div`
    width:100%;
    height:100px;
    background-color:#E1E1E1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

export const TopArea = styled.div`
    height:40px;
    display:flex;
    flex:1;
    margin:5px;
`;

export const Texto = styled.p`
    margin:0;
    font-size:16px;
    text-transform:uppercase;
    font-weight:bold;
`;

export const TextoL = styled.p`
    margin:0;
    font-size:16px;
    text-transform:uppercase;
`;

export const ProdArea = styled.div`
    display:flex;
    width:100%;
    height:400px;
    background-color:#CCC;
    flex-direction:column;
`;










