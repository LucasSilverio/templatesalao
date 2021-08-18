import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:none;
    margin-top:60px;
    width:100%;
    height:auto;
    position:relative;
    background-color:#FFF;

    @media (max-width:1100px){
        display:flex;
    }

    @media (max-width:900px){
        margin-top:60px;
        padding:20px;
    }

    @media (max-width:700px){
        padding:10px;
    }
`;

export const ColunaFixa = styled.div`
    display:flex;
    min-width:400px;
    flex-direction:column;
    background-color:#FFF;

    strong {
        font-weight:600;
        margin-top:10px;
    }

    @media (max-width:400px){
        min-width:100%;
    }

`;

export const Dia = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid rgba(5,5,5,0.1);
    padding-top:3px;
    padding-bottom:3px;
    font-size:14px;
`;

export const Horarios = styled.div``;

export const Items = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    max-width:100px;
    align-items:center;
    justify-content:center;
    min-width:100px;
`;

export const Item = styled.p`
    margin:0;
    font-size:12px;
    margin-left:5px;
    margin-right:5px;
`;

export const PageArea = styled.div`
    width:100%;
    margin:auto;
    max-width:1140px;
    display:flex;
    flex-direction:column;

`;

export const Telefone = styled.a`
    height:40px;
    width:100px;
    margin:auto;
    background-color:#63ADF2;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#FFF;
    margin:5px;
    cursor:pointer;
    &:hover{
        opacity:0.8;
    }
`;

export const TelefoneArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;