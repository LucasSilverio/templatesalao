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
    background-color:transparent;
    margin-top:20px;
    cursor:pointer;
`;

export const BoxForm = styled.div`
    width:500px;
    height:320px;
    diplay:flex;
    // border:1px solid #E887B2;
    padding:40px;
    border-radius:10px;
    background-color:#FFF;
    margin-top:40px;
    border:1px solid rgba(5,5,5,0.1);

    @media (max-width:620px){
        width:100%;
        margin:auto;
    }
`;

export const BoxTitle = styled.p`
    font-size:28px;
    font-weight:bold;
    color:#716FF2;
`;

export const BoxTitleArea = styled.div`
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const BtnLogin = styled.button`
    height:40px;
    background-color:#F2A57C;
    border:none;
    margin-top:20px;
    margin-bottom:20px;
    font-weight:bold;
    color:#FFF!important;
    cursor:pointer;
    border-radius:5px;
`;

export const Container = styled.div`
    display:flex;
    flex:1;
    color:#000;
    justify-content:center;
    height:100%;
    flex-direction:column;
    align-items:center;
    background-color:#FFF;

    @media (max-width:620px){
    }
`;

export const Ipt = styled.input`
    height:40px;
    border:none;
    background-color:#E1E1E1;
    margin-top:10px;
    padding-left:20px;
    border-radius:5px;
    color:#999;

    &:focus{
        box-shadow: 0 0 0 0;
        border:1px solid rgba(5,5,5,0.1);
        outline: 0;
   }
`;

export const LoaderArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
`;

export const Voltar = styled.a`
    border:none;
    background-color:transparent;
    margin-top:20px;
    cursor:pointer;
    text-align:center;
`;