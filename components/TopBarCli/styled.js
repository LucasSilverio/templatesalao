import styled, { css } from 'styled-components';

export const Container = styled.div`
    // animation: 0.5s ${fadeInAnimation};
    display:flex;
    width:100%;
    margin-top:${(props) => props.altura < 100 ? '0' : '0'};
    top:0;
    position:fixed;
    z-index:20;
    height:60px;;
    background-color:${(props) => props.bgcolor};
    box-shadow:${(props) => props.altura < 100 ? '0 0 0 0 rgba(5,5,5,.5)' : '-2px 2px 10px 0 rgba(207,212,214,.5)'};
    color:#FFF;

    @media (max-width:600px){
        // height:130px;
        // flex-direction:column;
    }
`;

export const BtnAction = styled.button`
    background-color:#FFF;
    border:none;
    cursor:pointer;

    &:hover{
        opacity:0.8;
        transform:scale(1.01);
    }
`;

export const BtnAction2 = styled.button`
    background-color:#63ADF2;
    border:none;
    cursor:pointer;
    width:150px;
    height:40px;
    border-radius:5px;
    border:none;
    color:#FFF;
    display:block

    &:hover{
        opacity:0.8;
        transform:scale(1.01);
    }

    @media (max-width:600px){
        display:none;
    }
`;

export const BtnOpcoes = styled.button`
    background-color:#FFF;
    border:none;
    cursor:pointer;
    width:150px;
    height:40px;
    border-radius:5px;
    border:none;
    color:#FFF;

    &:hover{
        opacity:0.8;
        transform:scale(1.01);
    }

    @media (max-width:600px){
        width:60px;
    }
`;

export const BottonMenu = styled.div`
    position:absolute;
    bottom:0;
    width:100%;
    height:40px;
    background-color:#333;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-size:13px;

    &:hover{
        opacity:0.8;
        background-color:#460000;
    }
`;

export const EstabelecimentoArea = styled.div`
    display:flex;
    flex:2;
    height:60px;;
    padding-left:10px;
    line-height:60px;;
    @media (max-width:600px){
        // justify-content:center;
        // line-height:20px;
        // margin-bottom:5px;
    }
`;

export const EstabelecimentoTitulo = styled.p`
    margin:0;
`;

export const Icone = styled.img`
    width:28px;
    height:28px;
    margin:0px 10px 0px 10px;
`;

export const IconeCart = styled.img`
    width:24px;
    height:24px;
    margin:0px 10px 0px 10px;
`;

export const Lk = styled.a`
    cursor:pointer;
    margin:0px 10px 0px 10px;
    color:#444;
    background-color:#F2A57C;
    padding:10px;
    cursor:pointer;
    border-radius:5px;
    color:#FFF;

    &:hover{
        opacity:0.8;
    }
`;

export const Logo = styled.img`
    width:100px;
    height:auto;
`;

export const LogoArea = styled.div`
    width:100%;
`;

export const OpcoesArea = styled.div`
    display:flex;
    flex:1;
    height:60px;;
    align-items:center;
    justify-content:flex-end;

    @media (max-width:600px){
        height:60px;;
    }

    
`;

export const MenuArea = styled.div`
    width:250px;
    height:120px;
    background-color:#333;
    position:absolute;
    right:0;
    top:0;
    border-radius:5px;
    display:${(props) => props.visible ? 'flex' : 'none'};
    flex-direction:column;
    border-bottom-left:5px;
`;

export const OpcaoMenu = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    cursor:pointer;
    padding-left:5px;
    font-size:13px;
    background-color:#444;
    &:hover{
        font-size:14px;
        font-weight:600;
    }
`;

export const PageArea = styled.div`
    max-width:1140px;
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:row;

    @media (max-width:600px){
        // flex-direction:column;
        // align-items:center;
        // margin:unset;
    }
`;

export const Titulo = styled.h2`
    color:${(props) => props.bgcolor};
    margin:0;
    cursor:pointer;

    @media (max-width:400px){
        font-size:20px;
    }
`;

export const TopMenu = styled.div`
    width:100%;
    height:40px;
    background-color:#333;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding-right:10px;
    cursor:pointer;
    border-bottom:1px solid rgba(5,5,5,0.1);
    font-size:13px;

    &:hover{
        background-color:#222;
    }

`;