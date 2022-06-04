import styled, { css } from 'styled-components';

export const Avatar = styled.img`
    width:auto;
    height:100px;
    border-radius:5px;
`;

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

export const BoxParagrafo = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:10px;
`;

export const BoxCalendario = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:5px;
    margin-right:5px;

    @media (max-width:799px){
        max-width:100%;
    }
`;

export const BoxRow = styled.div`
    display:flex;
    flex-direction:row;
`;

export const BtnAction = styled.div`
    width:200px;
    height:40px;
    background-color:#5C6BF2;
    border-radius:5px;
    color:#FFF;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    font-size:13px;
    font-weight:700;
    cursor:pointer;

    &:hover {
        opacity:0.9;
        transform:scale(1.02);
    }

    @media (max-width:799px){
        width:92%;
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
    margin:0;
`;

export const BoxOpcoes = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:10px;

    @media (max-width:799px){
        width:100%;
        flex-wrap:wrap;
    }
`;

export const Botao = styled.div`
    width:80px;
    height:80px;
    border:${(props) => props.destaque ? '3px solid #57F2EB' : '1px solid rgba(5,5,5,0.2)'};
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    margin:5px;
    background-color:#FFF;
    border-radius:5px;

    &:hover{
        opacity:0.9;
        transform:scale(1.03);
    }
`;

export const BoxLancamento = styled.div`
    flex:1;
    height:auto;
    display:flex;
    flex-direction:column;
    margin-top:20px;

    @media (max-width:799px){
        align-items:center;
    }
`;

export const BoxLinha = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    max-width:1050px;

    @media (max-width:1024px){
        flex-direction:column;
    }
`;

export const BoxResultado = styled.div`
    flex:1;
    height:auto;
    display:flex;
    flex-direction:column;
    margin-top:20px;

    @media (max-width:1024px){
        min-height:400px;
        overflow:auto;
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
`;

export const CalendarioArea = styled.div`
    display:flex;
    flex-direction:row;

    @media (max-width:1024px){
        max-width:760px;
    }

    @media (max-width:799px){
        justify-content:center;
    }
`;

export const Calendario = styled.input`
    width:200px;
    border-radius:3px;
    border:1px solid #999;
    height:30px;
`;

export const Erro = styled.p`
    font-size:14px;
    color:#800000;
`;

export const IconeBotao = styled.img`
    width:20px;
    height:20px;
    cursor:pointer;
`;

export const Input = styled.input`
    width:200px;
    border-radius:3px;
    border:1px solid #999;
    height:30px;
    margin-right:20px;

    @media (max-width:799px){
        width:100%;
    }
`;

export const Label = styled.label`
    color:${(props) => props.color || '#444'};
    font-size:12px;
`;

export const Linha = styled.div`
    width:100%;
    height:1px;
    background-color:#FFF;
    opacity:0.4;
    margin-top:10px;
    margin-bottom:10px;
`

export const Paragrafo = styled.p`
    margin:0;
    margin-right:30px;
    color:#FFF;
`;

export const ParagrafoR = styled.p`
    margin:0;
    margin-right:30px;
    color:#333;
`;


export const ParagrafoDestaque = styled.p`
    margin:0;
    margin-right:30px;
    color:${(props) => props.color};
    font-size:28px;
    font-weight:700;
    
`;

export const ProfissionaisArea = styled.div`
    display:flex;
    width:100%;
    height:150px;
`;

export const ProfissionalBox = styled.div`
    display:flex;
    width:150px;
    height:150px;
    background-color:#63ADF2;
    margin:5px;
    cursor:pointer;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:5px;
    color:#FFF;
    border:${(props) => props.destaque ? 'solid 5px #57F2EB' : 'none'};

    &:hover{
        transform:scale(1.03);
        opacity:0.9;
    }
`;

export const ResumoArea = styled.div`
    width:100%;
    max-width:1050px;
    height:140px;
    display:flex;
    flex-direction:column;
    background-color:#5C6BF2;
    padding:10px;
    margin-top:20px;
    border-radius:10px;

    @media (max-width:799px){
        max-width:92%;
        justify-content:center;
        align-items:center;
    }
`;

export const ResultadoBox = styled.div`
    display:flex;
    flex-direction:row;
    background-color:#CCC;
`;

export const Subtitulo = styled.h2`
    color:#333;
    font-size:24px;
    font-weight:700;
`;

export const SubtituloCorpo = styled.h2`
    color:#333;
    font-size:20px;
    font-weight:600;

    @media (max-width:799px){
        text-align:center;
    }
`;

export const Tabela = styled.table`
    width:100%;
    max-width:1000px;
    color:#444;
    border-radius:5px;
    border-collapse: collapse;
    margin:5px;
    background-color:#FFF;

    th, td{        
        border:1px solid #999;
        border-radiu:2px;
        font-size:12px;
    }

    @media (max-width:1024px){
        max-width:760px;
    }

    @media (max-width:799px){
        max-width:100%;
        overflow:auto;
    }
`;

export const TextArea = styled.textarea`
    width:450px;
    height:80px;
    margin-bottom:30px;

    @media (max-width:799px){
        max-width:92%;
    }
`;

export const Topo = styled.div`
    display:flex;
    width:100%;
    height:60px;
    background-color:#FFF;
    padding-left:10px;

    @media (max-width:799px){
        justify-content:center;
        align-items:center;
    }
`;