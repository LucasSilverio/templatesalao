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

    @media (max-width:900px){
        padding:20px;
    }

    @media (max-width:700px){
        margin-top:240px;
    }

    @media (max-width:500px){
        display:${(props) => props.mob ? 'flex' : 'none'};
        // margin-top:280px;
    }

    // @media (max-width:370px){
    //     margin-top:330px;
    // }

    // @media (max-width:330px){
    //     margin-top:380px;
    // }

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

    @media (max-width:900px){
        text-align:center;
    }
`;

export const BoxTitulo = styled.div`
    display:flex;
    margin-bottom:10px;

    @media (max-width:900px){
        flex-direction:column;
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