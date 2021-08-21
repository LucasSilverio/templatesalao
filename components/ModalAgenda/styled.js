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
    width:60px;
    height:60px;
    border-radius:30px;
`;

export const BackArea = styled.div`
    animation: 0.5s ${fadeInAnimation};
    position:fixed;
    display:${(props) => props.visible ? 'flex' : 'none'};
    width:20000px;
    height:100%;
    background-color:rgba(5, 5, 5,0.9);
    opacity:0.99;
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

export const CalendarioArea = styled.div`
    width:100%;
    height:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:30px;
`;

export const Container = styled.div`
    animation: 0.5s ${fadeInAnimation};
    background-color:#F8F8F8;
    width:700px;
    height:500px;
    position:fixed;
    top:50%;
    margin-top:-240px;
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

    @media (max-width:700px){
        width:90%;
        margin-left:-45%;
    }


`;

export const LoaderArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
`;

export const Profissional = styled.div`
    width:90px;
    height:90px;
    text-align:center;
    display:flex;
    flex-direction:column;
    color:#000;
    align-items:center;
    justify-content:center;

    border:${(props) => props.destaque ? '1px solid #00f' : 'none'};
    border-radius:5px;

    &:hover{
        opacity:0.7;
        transform:scale(1.01);
    }
`;

export const ProfissionaisArea = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:30px;
`;

export const Horario = styled.div`
    width:50px;
    height:40px;
    text-align:center;
    display:flex;
    flex-direction:column;
    color:#000;
    align-items:center;
    justify-content:center;
    border-radius:20px;
    background-color:${(props) => props.destaque ? '#63ADF2' : '#F8F8F8'};
    border:${(props) => props.destaque ? '#00f' : '1px solid rgba(5,5,5,0.1)'};
    margin:5px;
    color:${(props) => props.destaque ? '#FFF' : '#333'};
    font-weight:650;
    border-radius:5px;

    &:hover{
        opacity:0.7;
        transform:scale(1.01);
    }
`;

export const HorariosArea = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:30px;
`;

export const ResumoArea = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid rgba(5,5,5,0.1);
    padding-bottom:5px;
    margin-bottom:30px;
`;

export const BottomArea = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
`;

export const BtnAction = styled.button`
    width:100%;
    height:40px;
    background-color:#63ADF2;
    border:none;
    border-radius:5px;
    color:#FFF;
    font-weight:600;
    letter-spacing:0.2em;
    cursor:pointer;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }
`;

export const BtnEspera = styled.button`
    width:150px;
    height:40px;
    margin:auto;
    cursor:pointer;
    background-color:#C8FACD;
    border:1px solid rgba(5,5,5,0.2);
    border-radius:5px;
    color:#005249;
    font-weight:600;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }

    @media (max-width:500px){
        width:100%;
        margin-bottom:40px;
        min-height:40px;
    }
`;

export const Titulo = styled.p`
    text-align:center;
    font-size:18px;
`;

export const ServiceInfo = styled.div`
`;

export const ServicePreco = styled.div`
    min-width:150px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    cursor:pointer;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }
    
`;

export const SubTitulo = styled.p`
    font-size:${(props) => props.fontsz};
    margin:0;
    color:${(props) => props.color};
    font-weight:600;
`;

export const Servico = styled.p`
    margin:2px;
    font-size:16px;
    font-weight:600;
`;