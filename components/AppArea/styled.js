import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:100%;
    height:200px;
    background-color:#CCC;
    color:#333;
`;

export const EstabelecimentoArea = styled.div`
    display:flex;
    flex:2;
    height:60px;
    padding-left:10px;
    line-height:60px;
`;

export const EstabelecimentoTitulo = styled.p`
    margin:0;
`;

export const Icone = styled.img`
    width:200px;
    height:auto;
    margin:0px 10px 0px 10px;
`;

export const IconesArea = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-top:10px;
`;

export const LabelArea = styled.div`
    display:flex;
    justify-content:center;
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
`;

export const PageArea = styled.div`
    max-width:1200px;
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
`;