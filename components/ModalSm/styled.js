import { fadeIn } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

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

export const BackArea = styled.div`
    animation: 0.5s ${fadeInAnimation};
    position:fixed;
    display:${(props) => props.visible ? 'flex' : 'none'};
    width:20000px;
    height:100%;
    background-color:rgba(5,5,5,0.5);
    z-index:10;
    top:0;
    left:-300px;
`;

export const BoxLinha = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    border-bottom:1px solid rgba(10,10,10,0.2);
`;

export const BoxOpcoes = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:10px;
`;

export const BtnAction = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:150px;
    height:40px;
    border-radius:5px;
    font-weight:700;
    font-size:14px;
    color:#FFF;
    background-color:#6E3534;
    cursor:pointer;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }

`;

export const BtnDisabled = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:150px;
    height:40px;
    border-radius:5px;
    font-weight:700;
    font-size:14px;
    color:#FFF;
    background-color:#999;
    cursor:pointer; 
`;

export const Botao = styled.div`
    width:100px;
    height:100px;
    border:1px solid rgba(5,5,5,0.2);
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin:5px;

    &:hover{
        opacity:0.9;
        transform:scale(1.03);
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

export const BotaoTexto = styled.p`
    font-size:13px;
    color:#333;
`;

export const Container = styled.div`
    animation: 0.5s ${fadeInAnimation};
    background-color:#F1F1F1;
    width:400px;
    height:200px;
    position:fixed;
    top:50%;
    margin-top:-200px;
    display:${(props) => props.visible ? 'flex' : 'none'};
    left:50%;
    margin-left:-200px;
    z-index:20;
    border-radius:5px;
    color:#555;
    font-size:12px;
    cursor:pointer;
    padding:20px;
    flex-direction:column;

    form{
        display:flex;
        flex-direction:column;
    }

    @media (max-width:550px){
        width:90%;
        margin-left:-45%;
    }


`;

export const Icone = styled.img`
    width:30px;
    height:auto;
    bottom:10px;
    right:20px;
    cursor:pointer;
`;

export const IconeBotao = styled.img`
    width:40px;
    height:40px;
    cursor:pointer;
`;

export const Paragrafo = styled.p`
    font-size:18px;
    font-weight:700;
`;

export const ParagrafoSm = styled.p`
    font-size:16px;
    font-weight:600;
`;

export const Selector = styled.select`
    margin-left:10px;
    margin-right:10px;
`;

export const Texto = styled.p`
    font-size:24px;
    font-weight:600;
    margin-right:25px;
    color:${(props) => props.color};
`;

export const TextoStatus = styled.p`
    font-size:24px;
    font-weight:600;
    margin-right:25px;
    margin:0;
    color:${(props) => props.color};
`;