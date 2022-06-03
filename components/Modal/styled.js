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
    background-color:rgba(5,5,5,0.9);
    z-index:10;
    top:0;
    left:-300px;
`;

export const BoxLinha = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    border-bottom:1px solid rgba(10,10,10,0.2);

    @media (max-width:600px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const BoxOpcoes = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:10px;

    @media (max-width:600px){
        flex-wrap:wrap;
        justify-content:center;
    }
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
    background-color:${(props) => props.bgColor};
    cursor:pointer;
    margin:5px;

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

export const LoaderArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
`;

export const Container = styled.div`
    animation: 0.5s ${fadeInAnimation};
    background-color:#FFF;
    width:800px;
    height:480px;
    position:fixed;
    top:50%;
    margin-top:-225px;
    display:${(props) => props.visible ? 'flex' : 'none'};
    left:50%;
    margin-left:-400px;
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

export const Icone = styled.img`
    width:30px;
    height:auto;
    bottom:10px;
    right:20px;
    cursor:pointer;
`;

export const Preco = styled.input`
    border-radius:5px;
    border:1px solid rgba(5,5,5,0.3);
    padding-left:5px;
`;

export const IconeBotao = styled.img`
    width:40px;
    height:40px;
    cursor:pointer;
`;

export const Texto = styled.p`
    font-size:24px;
    font-weight:600;
    margin-right:25px;
    color:${(props) => props.color};

    @media (max-width:600px){
        font-size:16px;
    }
`;

export const TextoSm = styled.p`
    font-size:16px;
    font-weight:600;
    margin-right:25px;
    margin-top:5px;
    margin-bottom:5px;
    color:${(props) => props.color};

    @media (max-width:600px){
        text-align:center;
    }
`;

export const TextoStatus = styled.p`
    font-size:24px;
    font-weight:600;
    margin-right:25px;
    margin:0;
    color:${(props) => props.color};
`;