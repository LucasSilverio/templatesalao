import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    z-index:10;
    margin-top:60px;
    width:100%;
    height:auto;
    position:relative;
    background-color:#FFF;

    

    @media (max-width:900px){
        margin-top:60px;
        padding:20px;
    }

    @media (max-width:700px){
        padding:10px;
    }
`;

export const Brand = styled.img`
    width:150px;
    height:auto;
    margin:5px;
`;

export const Box = styled.div`
    background-color:#FFF;
    border-radius:5px;
    padding:30px;
    display:flex;

    @media (max-width:700px){
        padding:10px;
    }

    @media (max-width:380px){
        flex-direction:column;
        align-items:center;
    }
`;

export const BrandBox = styled.div`
    display:flex;
`;

export const Coluna = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    padding:10px;
`;

export const ColunaFixa = styled.div`
    display:flex;
    min-width:400px;
    flex-direction:column;
    background-color:#FFF;
    position:absolute;
    right:100px;
    top:60px;

    strong {
        font-weight:600;
        margin-top:10px;
    }

    @media (max-width:1100px){
        display:none;
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

export const InfosArea = styled.div`
    width:100%;
    height:auto;
    padding:10px;

    @media (max-width:380px){
        text-align:center;
    }
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
    margin:auto;
    max-width:1140px;
    display:flex;
    flex-direction:row;

    @media (max-width:900px){
        flex-direction:column;
    }

`;

export const Titulo = styled.h2`
    color:#333;
    font-weight:700;
    font-size:22px;
    margin:0;

    @media (max-width:700px){
        font-size:36px;
    }
`;

export const SubTitulo = styled.p`
    color:#333;
    font-size:18px;
    margin:0;
`;