import styled, { css } from 'styled-components';

export const Area = styled.div`
    width:100%;
    height:320px;
    background-color:#F1F1F1;
`;

export const ClienteArea = styled.div`
    height:60px;
    width:300px;
    background-color:#FFF;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#333;
    font-size:14px;
`;

export const PageContainer = styled.div`
    width:100%;
    height:320px;
    background-color:#FFF;    
    overflow:hidden;
    position:relative;
    margin-top:170px;
    margin-bottom:100px;
    max-width:1200px;
    margin:auto;

    .carousel .control-next.control-arrow::before{
        border-left: 8px solid #E887B2;
    }

    .carousel .control-prev.control-arrow::before {
        border-right: 8px solid #E887B2;
    }

    @media (max-width:1200px){
        padding-left:20px;
        padding-right:20px;
    }
`;

export const ElementoArea = styled.div`,
    height:320px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#FFF;
`;

export const EstrelasArea = styled.div`
    height:40px;
    width:200px;
`;

export const MensagemArea = styled.div`
    height:100px;
    width:500px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#333;
    font-size:14px;
    font-weight:bold;
    font-style:italic;
`;

export const Title = styled.h2`
    color:#333;
    font-size:18px;
`;