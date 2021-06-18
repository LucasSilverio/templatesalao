import styled, { css } from 'styled-components';

export const Atualizacao = styled.div`
    margin-left:20px;
    cursor:pointer;
    width:150px;
    height:40px;
    display:flex;
    align-items:center;
    border:1px solid rgba(10,10,10,0.2);
    padding:5px;
    border-radius:5px;

    &:hover{
        content:url('/update.png');
        width:24px;
        height:24px;
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

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    max-height:60px;
`;

export const BoxHorarioInter = styled.div`
    display:flex;
    flex-direction:column;
    width:144px;
    min-height:${(props) => props.height+'px'};
    max-height:${(props) => props.height+'px'};
    background-color:${(props) => props.bgColor};
    padding:5px;
    position:${(props) => props.p};
    margin-top:${(props) => props.tp+'px'};
    cursor:pointer;
    border:1px solid #FFF;

    &:hover{
        opacity:0.9;
        border:2px solid #69F0AE;
    }
`;

export const BoxCalendario = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:5px;
    margin-right:5px;
`;

export const BtnAction = styled.button`
    width:150px;
    height:40px;
    border-radius:5px;
    cursor:pointer;
    color:#FFF;
    background-color:${(props) => props.bgColor};
    font-weight:700;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:14px;
    margin-left:40px;
    border:none;

    &:hover{
        opacity:0.9;
        transform:scale(1.02);
    }
`;

export const CalendarioArea = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:10px;
    align-items:center;
`;

export const Calendario = styled.input`
    width:200px;
    border-radius:3px;
    border:1px solid #999;
    height:30px;
`;

export const Corpo = styled.div`
    display:flex;
    width:100%;
    height:100%;
    margin-bottom:100px;
    flex-direction:column;
`;

export const ColunaHorarios = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    background-color:#800000;
`;

export const ColunaProfissional = styled.div`
    display:flex;
    flex-direction:column;
    width:250px;
    height:100%;
    background-color:#800000;
`;

export const Concluido = styled.div`
    position:absolute;
    padding:2px;
    top:-15px;
    font-size:12px;
    border-radius:2px;
    right:0;
    color:#343261;
    background-color:#69F0AE;
`;

export const Horario = styled.div`
    display:flex;
    flex-direction:column;
    max-width:120px;
    flex:1;
    min-height:60px;
    background-color:#FFF;
    border:1px solid rgba(5,5,5,0.1);
    align-items:center;
    padding:5px;
`;

export const HorarioDesc = styled.p`
    color:#333;
    font-size:16px;
    font-weight:700;
    margin:0;
`;

export const Icone = styled.img`
    width:24px;
    height:24px;
`;

export const ParagrafoNm = styled.p`
    color:#fff;
    font-size:13px;
    font-weight:600;
    margin:0;
`;

export const ParagrafoDestaque = styled.p`
    color:#444;
    font-size:19px;
    font-weight:600;
    margin:0;
`;

export const HorarioPro = styled.div`
    display:flex;
    flex-direction:column;
    width:150px;
    min-height:60px;
    height:${(props) => props.height+'px'};
    background-color:#FFF;
    border:1px solid rgba(5,5,5,0.1);
    align-items:center;
    background-color:${(props) => props.bgColor};
    position:${(props) => props.p};
`;

export const HorarioProDesc = styled.p`
    color:#FFF;
    font-size:16px;
    font-weight:700;
    margin:0;
`;

export const Label = styled.label`
    color:#444;
    font-size:12px;
`;

export const Linha = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    min-height:60px;
    background-color:#FFF;
    border:1px solid rgba(5,5,5,0.1);
    align-items:center;
    padding:5px;
`;

export const ProId = styled.div`
    position:absolute;
    top:-12px;
    left:10%;
    font-size:12px;
    z-index:10;
    color:#FFF;
    background-color:#000;
    padding-left:15px;
    padding-right:15px;
    border-radius:5px;
    font-weight:700;
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