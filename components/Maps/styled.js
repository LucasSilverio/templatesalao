import styled, { css } from 'styled-components';

export const Box = styled.div`
    flex:${(props) => props.f};
`;

export const PageContainer = styled.div`
    width:100%;
    max-height:400px; 
    overflow:hidden;
    position:relative;
    margin-top:200px;

`;

export const Area = styled.div`
    height:auto;
    width:100%;
    border-radius:150px;
    max-width:1000px;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    text-align:right;
`;

export const BoxTitulo = styled.div`
    display:flex;
    margin-bottom:10px;
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
`;

export const SubTitulo = styled.p`
    color:#FFF;
    font-size:24px;
`;