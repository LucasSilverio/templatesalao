import styled, { css } from 'styled-components';


export const Container = styled.div`
    max-width:1100px;
    width:100%;
    margin:auto;
    padding-top:50px;
    display:flex;
    justify-content:center;
    flex-direction:column;

    @media (max-width:999px){
        padding:20px;
    }

    .react-reveal {
        max-width:100%!important;
    }
`;

export const BgDesk = styled.img`
    cursor:pointer;
    display:block;

    @media (max-width:800px){
        display:none;
    }
`;

export const BgMb = styled.img`
    cursor:pointer;
    display:none;

    @media (max-width:800px){
        display:block;
    }

`;

export const PageContainer = styled.div`
    width:100%;
    display:flex;
    margin-bottom:40px;
    background-color:#FFF;
    margin-top:20px;

`;

export const Title = styled.h2`
    color:#444;
    font-size:36px;
    margin-bottom:0;
`;

export const Traco = styled.div`
    width:100px;
    height:5px;
    background-color:#A5EB78;
`;
