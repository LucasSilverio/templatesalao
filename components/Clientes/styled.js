import styled, { css } from 'styled-components';

export const AreaBotoes = styled.div`
    display:flex;
    flex-direction:row;
`;

export const AlertArea = styled.div`
    display:flex;
    width:400px;
    height:100px;
    margin-top:-150px;
    flex-direction:column;

    @media (max-width:450px){
        width:300px;
    }
`;

export const Avatar = styled.img`
    width:32px;
    height:32px;
    border-radius:16px;
    background-color:#CCC;
    margin-right:10px;
    border:none;
`;

export const BtnAction = styled.button`
    width:120px;
    height:30px;
    background-color:${(props) => props.bgColor};
    border:none;
    color:#FFF;
    border-radius:5px;
    margin-left:10px;
    cursor:pointer;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }
`;

export const BotaoC = styled.a`
    width:100px;
    height:30px;
    background-color:#5C6BF2;
    border-radius:5px;
    color:#FFF;
    border:none;
    text-transform:uppercase;
    margin:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    &:hover{
        background-color:#6775f5;
    }
`;

export const Container = styled.div`
    display:flex;
    width:100%;
    height:100%;
    position:fixed;
    margin-top:40px;
    flex-direction:column;
    overflow:auto;
`;

export const Corpo = styled.div`
    display:flex;
    width:100%;
    height:100%;
    margin-bottom:100px;
    flex-direction:column;
    background-color:#FFF;
    overflow:auto;
`;

export const Item = styled.div`
    display:flex;
    width:100%;
    height:50px;
    padding:5px;
    border-bottom:1px solid rgba(10,10,10,0.1);
    border-top:1px solid rgba(10,10,10,0.1);
    cursor:pointer;

    &:hover{
        background-color:#F0F0F0;
    }
`;

export const IptBusca = styled.input`
    height:30px;
    width:240px;
    margin-left:20px;
    border-radius:5px;
    border:1px solid rgba(5,5,5,0.2);,
    padding-left:5px;

    @media (max-width:799px){
        width:80%;
        margin:auto;
        height:40px;
        margin-left:5px;
        margin-bottom:20px;
    }
`;

export const Opcoes = styled.div`
    width:100%;
    height:60px;
    padding:5px;
    display:flex;
    background-color:#FFF;
    align-items:center;

    @media (max-width:799px){
        display:none;
    }

`;

export const OpcoesMob = styled.div`
    @media (max-width:799px){
        display:flex;
    }
`;

export const PaginacaoArea = styled.div`
    display:flex;
    width:100%;
    height:100px;
    padding-left:10px;
    align-items:center;
    justify-content:center;
    max-width:1000px;
`;

export const Paragrafo = styled.p`
    font-size:14px;
    font-weight:600;
    color:#333;
`;

export const Pg = styled.div`
    min-width:40px;
    height:40px;
    padding:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#5C6BF2;
    color:#FFF;
    border:1px solid #FFF;
    cursor:pointer;
`;

export const Subtitulo = styled.h2`
    color:#333;
    font-size:24px;
    font-weight:700;
`;

export const Topo = styled.div`
    display:flex;
    width:100%;
    height:60px;
    background-color:#FFF;
    padding-left:10px;
`;

