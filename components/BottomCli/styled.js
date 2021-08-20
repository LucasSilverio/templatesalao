import styled, { css } from 'styled-components';

export const Container = styled.div`
    // animation: 0.5s ${fadeInAnimation};
    display:flex;
    width:100%;
    margin-top:40px;
    bottom:0;
    position:relative;
    z-index:8;
    height:80px;
    background-color:${(props) => props.bgcolor};
    box-shadow:${(props) => props.altura < 100 ? '0 0 0 0 rgba(5,5,5,.5)' : '-2px 2px 10px 0 rgba(207,212,214,.5)'};
    color:#FFF;

    @media (max-width:1100px){
        margin-top:${(props) => props.altura < 100 ? '0' : '0'};
    }

    @media (max-width:600px){
        flex-direction:column;
        padding:5px;
    }
`;

export const BoxIcon = styled.div`
    display:flex;
`;

export const EstabelecimentoArea = styled.div`
    display:flex;
    flex:2;
    height:60px;
    padding-left:10px;
    line-height:60px;
    @media (max-width:600px){
        justify-content:center;
        line-height:20px;
        margin-bottom:5px;
    }
`;

export const EstabelecimentoTitulo = styled.p`
    margin:0;
`;

export const Icone = styled.img`
    width:24px;
    height:24px;
    margin:0px 10px 0px 10px;
`;

export const IconeCart = styled.img`
    width:24px;
    height:24px;
    margin:0px 10px 0px 10px;
`;

export const Lk = styled.a`
    cursor:pointer;
    padding:10px;
    cursor:pointer;
    border-radius:5px;
    color:#FFF;
    display:flex;
    flex-direction:column;
    font-size:11px;
    align-items:center;
    justify-content:center;

    &:hover{
        opacity:0.8;
    }
`;

export const Logo = styled.img`
    width:120px;
    height:auto;
`;

export const OpcoesArea = styled.div`
    display:flex;
    flex:1;
    height:60px;
    align-items:center;
    justify-content:flex-end;

    @media (max-width:600px){
        height:40px;
    }

    
`;

export const PageArea = styled.div`
    max-width:1200px;
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media (max-width:600px){
        flex-direction:column;
        align-items:center;
        margin:unset;
    }
`;

export const Titulo = styled.h2`
    color:#333;
    margin:0;
    font-weight:500;
    font-size:16px;
    opacity:0.8;
`;

export const TituloP = styled.h1`
    color:#333;
    margin:0;
    font-weight:500;
    font-size:16px;
    opacity:0.8;
`;