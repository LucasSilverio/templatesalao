import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    z-index:10;
    margin-top:0px;
    width:100%;
    height:200px;
    position:relative;

    @media (max-width:900px){
        margin-top:60px;
        padding:20px;
    }
`;

export const Brand = styled.img`
    width:150px;
    height:auto;
    margin:5px;
`;

export const BrandBox = styled.div`
    display:flex;
`;

export const Coluna = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
`;

export const PageArea = styled.div`
    width:100%;
    margin:auto;
    max-width:1100px;
    display:flex;
    flex-direction:row;

    @media (max-width:900px){
        flex-direction:column;
    }

    @media (max-width:500px){
        height:600px;
    }

    @media (max-width:350px){
        height:700px;
    }

`;

export const Titulo = styled.h2`
    color:#fff;
    margin:0;
    font-weight:700;
    font-size:46px;
    opacity:1;
    background-color:rgba(0,0,0,0.4);
    padding:10px;
    border-top-right-radius:20px;
    border-top-left-radius:5px;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:5px;

    @media (max-width:700px){
        font-size:36px;
    }
`;

export const SubTitulo = styled.p`
    color:#FFF;
    font-size:24px;
`;