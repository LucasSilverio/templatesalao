import styled, { css } from 'styled-components';

export const Avatar = styled.img`
    width:40px;
    height:40px;
    border-radius:20px;
`;

export const Box = styled.div`
    display:flex;
    width:100%;
    height:auto;
    background-color:#FFF;
    padding:10px;
    flex-direction:column;
`;

export const BoxClientes = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    height:auto;
    background-color:#FFF;
    padding:10px;
    max-height:300px;
    overflow:auto;

`;

// export const BtnAction = styled.button`
//     width:150px;
//     height:40px;
//     background-color:#63ADF2;
//     color:#FFF;
//     display:flex;
//     align-items:center;
//     justify-content:center;
// `;

export const Container = styled.div`
    display:flex;
    width:100%;
    height:100%;
    position:fixed;
    margin-top:40px;
    flex-direction:column;
    overflow:auto;
`;

export const ClienteInfos = styled.div`
    color:#FFF;
    padding-left:10px;
`;

export const BtnAction = styled.button`
    width:200px;
    height:40px;
    border-radius:5px;
    cursor:pointer;
    color:#FFF;
    background-color:#5C6BF2;
    font-weight:700;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:14px;
    border:none;

    &:hover{
        opacity:0.9;
        transform:scale(1.02);
    }
`;

export const BtnOpcao = styled.button`
    width:110px;
    height:60px;
    background-color:${(props) => props.bgColor};
    color:#FFF;
    border-radius:5px;
    border:none;
    cursor:pointer;
    font-weight:700;
    margin:10px;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }
`;

export const CalendarioArea = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:10px;
    align-items:center;
`;

export const Corpo = styled.div`
    display:flex;
    width:100%;
    height:100%;
    margin-bottom:100px;
    flex-direction:column;

    @media (max-width:1024px){
        max-width:740px;
    }
`;

export const Cliente = styled.div`
    width:180px;
    height:45px;
    background-color:#716FF2;
    align-items:center;
    display:flex;
    padding:5px;
    flex-direction:row;
    border-radius:5px;
    cursor:pointer;
    margin:5px;
    
    &:hover{
        opacity:0.9;
    }
`;

export const Icone = styled.img`
    width:20px;
    height:20px;
`;

export const Label = styled.label`
    font-size:16px;
    font-weight:700;

`;

export const Opcoes = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
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