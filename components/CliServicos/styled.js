import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    z-index:10;
    width:100%;
    height:auto;
    position:relative;
    max-width:820px;
    background-color:#FFF;
    min-height:350px;

    @media (max-width:1320px){
        max-width:760px;
    }

    @media (max-width:1270px){
        max-width:600px;
    }

    @media (max-width:1100px){
        max-width:100%;
        margin-top:30px;
        min-height:unset;
    }

    @media (max-width:900px){
        margin-top:0px;
        padding:10px;
    }
`;

export const Box = styled.div`
    background-color:#FFF;
    border-radius:5px;
    padding:30px;
    display:flex;
    flex-direction:column;

    @media (max-width:700px){
        padding:0;
    }
`;

export const BoxService = styled.div`
    padding:5px;
    border-bottom:1px solid rgba(5,5,5,0.1);
    display:flex;
    justify-content:space-between;

    @media (max-width:380px){
        min-height:55px;
    }
`;

export const Coluna = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    padding:10px;

    @media (max-width:900px){
        margin-top:0px;
    }

    @media (max-width:700px){
        padding:0;
    }
    
`;

export const ColunaFixa = styled.div`
    display:flex;
    min-width:400px;
    flex-direction:column;
    background-color:#FFF;
`;

export const InfosArea = styled.div`
    width:100%;
    height:auto;
    padding:10px;
`;

export const LogoArea = styled.div`
    width:140px;
    height:140px;
    background-color:#888;
    border-radius:5px;
`;

export const Logo = styled.img`
    width:140px;
    height:140px;
    border-radius:5px;
`;

export const PageArea = styled.div`
    width:100%;
    max-width:1140px;
    display:flex;
    flex-direction:row;
    padding-left:100px;

    @media (max-width:1270px){
        padding-left:0;
    }

    @media (max-width:900px){
        flex-direction:column;
    }

`;

export const Preco = styled.p`
    margin:2px;
`;

export const Servico = styled.p`
    margin:2px;
    font-weight:600;
    color:#333;
`;

export const ServiceInfo = styled.div`
`;

export const ServicePreco = styled.div`
    min-width:150px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#63ADF2;
    border-radius:5px;
    cursor:pointer;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }

    @media (max-width:380px){
        width:100px;
        min-width:unset;
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

export const SubTitulo = styled.p`
    font-size:${(props) => props.fontsz};
    margin:0;
    color:${(props) => props.color};
    font-weight:600;
`;