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
    width:80px;
    height:80px;
    border-radius:40px;
    background-color:#CCC;
    margin-right:10px;
    border:none;
    border:${(props) => props.destaque ? '8px solid #63ADF2' : 'none'};
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

export const Box = styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
    background-color:#FFF;
    padding:10px;
`;

export const BoxTop = styled.div`
    display:flex;
    width:100%;
    height:80px;
    flex-direction:column;
    max-width:1000px;
`;

export const BoxInput = styled.div`
    display:flex;
    flex-direction:column;
    margin:5px;
`;

export const BoxRow = styled.div`
    display:flex;
`;
export const BoxHorarios = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    overflow:auto;
    max-width:1050px;
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

export const Dia = styled.div`
    width:100px;
    height:32px;
    border-radius:5px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:5px;

    cursor:pointer;

    &:hover{
        opacity:0.9;
    }
`;

export const Item = styled.div`
    display:flex;
    width:80px;
    height:80px;
    border-radius:40px;
    cursor:pointer;
    margin:5px;

    &:hover{
        background-color:#F0F0F0;
    }
`;

export const ItemDia = styled.div`
    display:flex;
    width:100%;
    max-width:1000px;
    height:120px;
    padding:5px;
    background-color:#fff;
    border:1px solid rgba(10,10,10,0.2);
    cursor:pointer;
    flex-direction:column;

    &:hover{
        opacity:0.9;
    }
`;

export const Input = styled.input`
    border:1px solid rgba(5,5,5,0.2)
    border-radius:5px;
`;

export const Horario = styled.div`
    width:100px;
    height:50px;
    background-color:#716FF2;
    margin:5px;
    display:flex;
    color:#FFF;
    padding:2px;
    font-weight:700;
    border-radius:5px;
    cursor:pointer;
    flex-direction:column;

    &:hover{
        opacity:0.9;
        background-color:#6E3534;
        content:"Excluir";
    }

`;

export const Label = styled.label`
`;

export const Opcoes = styled.div`
    width:100%;
    height:80px;
    padding:5px;
    display:flex;
    background-color:#FFF;
    align-items:center;
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
    font-size:13px;
    font-weight:600;
    color:#333;
    margin:2px;
`;

export const Pg = styled.div`
    min-width:40px;
    height:40px;
    padding:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#63ADF2;
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

