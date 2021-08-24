import styled, { css } from 'styled-components';

export const BoxDesk = styled.div`

`;

export const Container = styled.div`
    display:flex;
    margin-top:30px;
    width:100%;
    height:auto;
    position:relative;
    background-color:#FFF;
    max-width:820px;

    @media (max-width:1100px){
        display:flex;
        max-width:100%;
    }

    @media (max-width:900px){
        margin-top:30px;
        padding:20px;
    }

    @media (max-width:700px){
        padding:10px;
    }
`;

export const Imagem = styled.img`
    margin:10px;
    border:1px solid rgba(5,5,5,0.5);
    border-radius:5px;
`;

export const PageArea = styled.div`
    width:100%;
    margin:auto;
    max-width:1140px;
    display:flex;
    flex-direction:column;
    margin-bottom:30px;
    padding-left:100px;

    @media (max-width:1270px){
        padding-left:40px;
    }

    @media (max-width:700px){
        padding-left:0;
    }

`;

export const Titulo = styled.h2`
    color:#333;
    font-weight:700;
    font-size:22px;
    margin:0;

    @media (max-width:700px){
        font-size:22px;
        font-weight:600;
    }

    @media (max-width:380px){
        font-size:18px;
        font-weight:600;
        margin-left:8px;
        margin-bottom:15px;
        margin-top:15px;
    }
`;
