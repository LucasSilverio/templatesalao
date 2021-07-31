import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
    width:100%;
    overflow:hidden;
    margin-top:60px;

    @media (max-width:900px){
        margin-top:120px;
    }

`;

export const BannerArea = styled.div`,
    height:320px;
    width:100%;
    overflow:hidden;
    

    img {
        width:100%;
        height:auto;
    }
`;

export const Box = styled.div`
    max-width:1100px;
    margin:auto;
    display:flex;
    flex-direction:column;

    @media (max-width:600px){
        padding:10px;
    }
`;

export const Coluna = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;

    @media (max-width:1100px){
        padding:20px;
    }
`;

export const Container = styled.div`
    max-width:1100px;
    height:400px;
    margin:auto;
    display:flex;

    @media (max-width:900px){
        flex-direction:column;
        height:auto;
    }

`;

export const Image = styled.img`
    width:650px;
    height:auto;
    border-top-right-radius:300px;
    border-bottom-left-radius:300px;

    @media (max-width:600px){
        margin-top:-60px;
    }
`;

export const Lk = styled.a`
    cursor:pointer;
    height:40px;
    width:250px;
    display:flex;
    color:#444;
    background-color:#63ADF2;
    cursor:pointer;
    border-radius:5px;
    color:#FFF;
    align-items:center;
    justify-content:center;
    margin-top:-40px;

    &:hover{
        opacity:0.8;
    }

    @media (max-width:600px){
        width:98%;
        margin:auto;
    }
`;

export const Title = styled.h1`
    color:#555;
`;

export const Subtitle = styled.h3`
    color:#555;
    font-weight:500;
    margin-top:5px;
    margin-bottom:40px;
`;