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

    @media (max-width:600px){
        margin-top:-60px;
    }
`;

export const Title = styled.h1`
    color:#555;
`;

export const Subtitle = styled.h3`
    color:#555;
    font-weight:500;
`;