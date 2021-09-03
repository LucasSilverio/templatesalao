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

export const Avatar = styled.img`
    width:80px;
    height:80px;
    border-radius:40px;
    margin-right:10px;
`;

export const BackArea = styled.div`
    animation: 0.5s ${fadeInAnimation};
    position:fixed;
    display:${(props) => props.visible ? 'flex' : 'none'};
    width:20000px;
    height:100%;
    background-color:rgba(5,5,5,0.9);
    z-index:10;
    top:0;
    left:-300px;
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

export const BoxTop = styled.div`
    height:auto;
    width:100%;
    display:flex;
    flex-direction:column;
`;

export const BoxLinha = styled.div`
    display:flex;
`;

export const BoxColuna = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    margin-right:5px;
    margin-bottom:10px;
`;

export const BoxEdit = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    font-size:26px;
    align-items:center;
    padding-bottom:10px;
`;

export const BoxOpcoes = styled.div`
    width:100%;
    display:flex;
    height:40px;
    margin-top:30px;
    align-items:center;
    justify-content:center;
`;

export const BtnAction = styled.button`
    width:120px;
    height:40px;
    background-color:${(props) => props.bgColor};
    margin:5px;
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;

    &:hover{
        opacity:0.9;
        transform:scale(1.0.1);
    }
`;

export const Box = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-top:10px;
`;

export const Container = styled.div`
    animation: 0.5s ${fadeInAnimation};
    background-color:#FFF;
    width:700px;
    height:400px;
    position:fixed;
    top:50%;
    margin-top:-225px;
    display:${(props) => props.visible ? 'flex' : 'none'};
    left:50%;
    margin-left:-350px;
    z-index:20;
    border-radius:5px;
    color:#555;
    font-size:12px;
    cursor:pointer;
    padding:20px;
    flex-direction:column;
    overflow:auto;

    form{
        display:flex;
        flex-direction:column;
    }

    @media (max-width:550px){
        width:90%;
        margin-left:-45%;
    }


`;

export const Desativar = styled.div`
    width:100px;
    height:30px;
    background-color:${(props) => props.bgColor};
    font-size:12px;
    display:flex;
    color:#FFF;
    justify-content:center;
    align-items:center;
    margin-top:10px;
    border-radius:5px;

    cursor:pointer;
    &:hover{
        opacity:0.9;
    }
`;

export const Icone = styled.img`
    width:24px;
    height:24px;
`;

export const Input = styled.input`
    width:100%;
    height:30px;
    margin-right:5px;
    border-radius:5px;
    border:1px solid rgba(5,5,5,0.2);
`;

export const Item = styled.div`
    width:200px;
    height:100px;
    background-color:${(props) => props.bgColor};
    margin:5px;
    display:flex;
    flex-direction:column;
    padding:5px;
    color:#FFF;
`;

export const Label = styled.label`
    font-size:12px;
`;

export const Opcoes = styled.div`
    width:100%;
    height:40px;
`;

export const Paragrafo = styled.p`
    margin:0;
`;

export const ParagrafoSm = styled.p`
    margin:0;
    margin-right:10px;
    font-size:16px;
`;

export const Top = styled.div`
    width:100%;
    height:80px;
    display:flex;
    flex-direction:row;
    font-size:26px;
    align-items:center;
    border-bottom:1px solid rgba(10,10,10,0.1);
    padding-bottom:10px;
`;