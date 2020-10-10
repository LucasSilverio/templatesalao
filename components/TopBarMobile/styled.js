import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:100%;
    height:60px;
    background-color:${(props) => props.bgcolor};
    color:#FFF;
`;

export const EstabelecimentoArea = styled.div`
    display:flex;
    flex:2;
    height:60px;
    padding-left:10px;
    line-height:60px;
    @media (max-width:600px){
        justify-content:center;
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

export const Lk = styled.a`
    cursor:pointer;
    margin:0px 10px 0px 10px;
`;

export const OpcoesArea = styled.div`
    display:flex;
    flex:1;
    height:60px;
    align-items:center;
    justify-content:flex-end;

    @media (max-width:600px){
        display:none;
    }
`;

export const PageArea = styled.div`
    max-width:1200px;
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:row;
`;