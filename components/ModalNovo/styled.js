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

    p{
        margin:2px;
    }

    @media (max-width:450px){
        width:300px;
    }
`;

export const AreaResult = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    height:auto;
    max-height:250px;
    border:1px solid rgba(5,5,5,0.1);
    overflow:auto;
`;

export const Avatar = styled.img`
    width:24px;
    height:auto;
    border-radius:12px;
    border:1px solid rgba(5,5,5,0.1);
    margin-right:5px;
`;

export const AvatarPro = styled.img`
    width:80px;
    height:80px;
    border-radius:40px;
    border:1px solid rgba(5,5,5,0.1);
    margin-right:5px;
`;

export const AvatarServico = styled.img`
    width:50px;
    height:50px;
    border-radius:25px;
    border:1px solid rgba(5,5,5,0.1);
    margin-right:5px;
`;

export const AlertMsg = styled.p`
    color:#800000;
    font-size:16px;
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

export const BodyModal = styled.div`
    width:100%;
    height:auto;
`;

export const BoxCliente = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    @media (max-width:600px){
        justify-content:center;
    }
`;

export const BoxClienteMob = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;

    @media (max-width:600px){
        justify-content:center;
    }
`;

export const Box = styled.div`
    flex:1;
    height:auto;
    display:flex;
    flex-direction:column;
    padding:5px;

    @media (max-width:600px){
        justify-content:center;
    }
`;

export const Container = styled.div`
    animation: 0.5s ${fadeInAnimation};
    background-color:#FFF;
    width:1100px;
    height:500px;
    position:fixed;
    top:50%;
    margin-top:-240px;
    display:${(props) => props.visible ? 'flex' : 'none'};
    left:50%;
    margin-left:-550px;
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

    @media (max-width:1024px){
        max-width:1000px;
        margin-left:-500px;
    }

    @media (max-width:550px){
        width:90%;
        margin-left:-45%;
    }


`;

export const IptBusca = styled.input`
    height:40px;
    border-radius:5px;
    border:1px solid rgba(5,5,5,0.4);
    padding-left:5px;
`;

export const Item = styled.div`
    width:100px;
    height:110px;
    border-radius:5px;
    color:#FFF;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:5px;
    background-color:#444248;
    padding:3px;
    border:${(props) => props.destaque ? '5px solid #709BFF' : 'none'};

    &:hover {
        transform:scale(1.01);
    }
`;

export const ItemHorario = styled.div`
    width:60px;
    height:60px;
    border-radius:30px;
    color:#FFF;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:5px;
    background-color:#2B5277;
    text-align:center;
    font-weight:700;
    padding:3px;
    border:${(props) => props.destaque ? '5px solid #709BFF' : 'none'};

    &:hover {
        opacity:0.9;
        transform:scale(1.02);
    }
`;

export const LoaderArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
`;

export const ItemServico = styled.div`
    width:100px;
    height:100px;
    border-radius:5px;
    color:#FFF;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:5px;
    background-color:#373E4F;
    text-align:center;
    font-weight:700;
    padding:3px;
    border:${(props) => props.destaque ? '5px solid #709BFF' : 'none'};

    &:hover {
        transform:scale(1.01);
    }
`;

export const Label = styled.label`
    text-align:center;
`;

export const Paragrafo = styled.p`
    font-size:24px;
    color:#333;
    margin:0;

    @media (max-width:600px){
        font-size:16px;
        text-align:center;
    }
`;

export const ResultItem = styled.div`
    width:100%;
    display:flex;
    height:40px;
    min-height:40px;
    border-bottom:1px solid rgba(5,5,5,0.1);
    align-items:center;
    padding:3px;
    font-size:16px;
`;

export const Result = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:auto;
    flex-wrap:wrap;

    @media (max-width:600px){
        justify-content:center;
    }
    
    
`;

export const TopModal = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:40px;
    border-bottom:1px solid rgba(5,5,5,0.1);

    @media (max-width:600px){
        justify-content:center;
    }
`;

