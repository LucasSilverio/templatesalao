import styled, { css } from 'styled-components';

export const BoxBody = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;

    form {
        display:flex;
        flex-direction:column;
    }
    
`;

export const BtnOpt = styled.button`
    border:none;
    background-color:${(props) => props.bgColor};
    margin-top:20px;
    padding:10px;
    border-radius:5px; 
    color:#FFF;
    font-weight:bold;
    cursor:pointer;

    &:hover{
        opacity:0.9;
    }
`; 

export const BoxForm = styled.div`
    width:500px;
    height:380px;
    diplay:flex;
    // border:1px solid #E887B2;
    padding:40px;
    border-radius:10px;
    background-color:#FFF;

    @media (max-width:620px){
        width:70%;
        margin:auto;
    }
`;

export const BoxTitle = styled.p`
    font-size:28px;
    font-weight:bold;
    color:${(props) => props.bgColor};
`;

export const BoxTitleArea = styled.div`
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const BtnLogin = styled.button`
    height:40px;
    background-color:${(props) => props.bgColor};
    border:none;
    margin-top:20px;
    margin-bottom:20px;
    font-weight:bold;
    color:#FFF!important;
    cursor:pointer;
    border-radius:5px;

    &:hover {
        opacity:0.9;
    }
`;

export const Container = styled.div`
    display:flex;
    flex:1;
    color:#000;
    justify-content:center;
    height:100%;
    flex-direction:column;
    align-items:center;
    background-color:#F1F1F1;

    @media (max-width:620px){
    }
`;

export const LoaderArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
`;

export const Lk = styled.a`
    border:none;
    background-color:'#005a48';
    margin-top:20px;
    padding:10px;
    border-radius:5px; 
    color:#2F82D5;
    font-weight:bold;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover{
        opacity:0.9;
    }
`;

export const Msg = styled.p`
    font-size:14px;
    color:#000;
    margin-top:10px;
    padding:0;

`;

export const Ipt = styled.input`
    height:40px;
    border:none;
    background-color:#E8E8E8;
    border:1px solid rgba(3, 3, 3, 0.1);
    margin-top:10px;
    padding-left:20px;
    border-radius:5px;
    color:#777;
`;

export const PassLabel = styled.label`
    margin-top:10px;
    font-size:12px;
    color:${(props) => props.score < 2 ? '#cc4b4b' : '#4bcc87'};
`;

export const Voltar = styled.a`
    border:none;
    background-color:transparent;
    margin-top:20px;
    cursor:pointer;
    text-align:center;

    &:hover{
        opacity:0.8;
    }
`;