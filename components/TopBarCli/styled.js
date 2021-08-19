import styled, { css } from 'styled-components';

export const Container = styled.div`
    // animation: 0.5s ${fadeInAnimation};
    display:${(props) => props.visible ? 'flex' : 'none'};
    width:100%;
    margin-top:${(props) => props.altura < 100 ? '0' : '0'};
    top:0;
    position:fixed;
    z-index:20;
    height:60px;;
    background-color:${(props) => props.bgcolor};
    box-shadow:${(props) => props.altura < 100 ? '0 0 0 0 rgba(5,5,5,.5)' : '-2px 2px 10px 0 rgba(207,212,214,.5)'};
    color:#FFF;

    @media (max-width:380px){
        box-shadow:-2px 3px 20px 2px rgba(99,173,242,0.5);
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
    background-color:#F8F8F8;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-size:13px;
    color:#333;
    font-weight:700;
    border-top:1px solid rgba(5,5,5,0.1);

    &:hover{
        opacity:0.8;
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

export const IconeLg = styled.img`
    width:36px;
    height:36px;
    margin:0px 10px 0px 10px;
`;

export const IconeArea = styled.div`
    width:100%;
    height:140px;
    background-color:#F8F8F8;
    display:flex;
    padding:20px;
    font-size:13px;
    color:#333;
    flex-direction:column;
    align-items:center;
    justify-content:center;
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
    width:220px;
    height:160px;
    background-color:#F8F8F8;
    position:absolute;
    right:40px;
    top:60px;
    border-radius:20px;
    display:${(props) => props.visible ? 'flex' : 'none'};
    flex-direction:column;
    border-bottom-left:5px;

    box-shadow: 1px -1px 10px -1px rgba(0,0,0,0.46);
    -webkit-box-shadow: 1px -1px 10px -1px rgba(0,0,0,0.46);
    -moz-box-shadow: 1px -1px 10px -1px rgba(0,0,0,0.46);
`;

export const OpcaoMenu = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    cursor:pointer;
    padding-left:5px;
    font-size:13px;
    background-color:#F8F8F8;
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
    height:70px;
    background-color:#F8F8F8;
    display:flex;
    padding:20px;
    cursor:pointer;
    border-bottom:1px solid rgba(5,5,5,0.1);
    font-size:13px;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
    color:#333;
    flex-direction:column;

    &:hover{
        // background-color:#222;
    }

`;