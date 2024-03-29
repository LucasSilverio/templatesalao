import styled, { css } from 'styled-components';

export const Container = styled.div`
    // animation: 0.5s ${fadeInAnimation};
    display:flex;
    width:100%;
    margin-top:${(props) => props.altura < 100 ? '0' : '0'};
    top:0;
    position:fixed;
    z-index:20;
    height:60px;
    background-color:${(props) => props.bgcolor};
    box-shadow:${(props) => props.altura < 0 ? '0 0 0 0 rgba(5,5,5,.5)' : '-2px 10px 10px 0 rgba(207,212,214,.5)'};
    color:#FFF;

    
`;

export const Btn = styled.button`
    width:40px;
    height:40px;
    border-radius:5px;
    background-color:#F8F8F83D;
    color:#FFF;
    border:none;
    margin:5px;
    cursor:pointer;

    &:hover{
        opacity:0.8;
    }
`;

export const EstabelecimentoArea = styled.div`
    display:flex;
    flex:1;
    height:60px;
    padding-left:10px;
    line-height:60px;
    justify-content:center;
    position:relative;
    width:100%;

    a{
        position:absolute;
        right:0;
    }

    @media (max-width:500px){
        justify-content:space-around;
        a{
            position:unset;
        }
    }
`;

export const EstabelecimentoTitulo = styled.p`
    margin:0;
`;

export const Icone = styled.img`
    width:24px;
    height:24px;
    margin:0px 10px 0px 10px;
`;

export const IconeCart = styled.img`
    width:24px;
    height:24px;
    margin:0px 10px 0px 10px;
`;

export const FiltroArea = styled.div`
    display:flex;
    flex:1;
    height:60px;
    align-items:center;
    justify-content:center;

    form{
        display:flex;
    }

    @media (max-width:600px){
        height:40px;
        margin-top:20px;
    }

    
`;

export const Lk = styled.a`
    cursor:pointer;
    color:#444;
    background-color:#FFF;
    cursor:pointer;
    border-radius:5px;
    color:#544F7B;
    width:150px;

    &:hover{
        opacity:0.8;
    }    
`;

export const Logo = styled.img`
    width:160px;
    height:auto;
`;

export const OpcoesArea = styled.div`
    display:flex;
    flex:1;
    height:60px;
    align-items:center;
    justify-content:flex-end;

    @media (max-width:600px){
        height:40px;
        margin-top:20px;
    }

    
`;

export const PageArea = styled.div`
    max-width:900px;
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:row;

    @media (max-width:600px){
        flex-direction:column;
        align-items:center;
        margin:unset;
    }
`;

export const Select = styled.select`
    width:200px;
    height:40px;
    background-color:#F8F8F83D;
    border:none;
    border-radius:5px;
    padding:5px;
    font-size:15px;
    margin:5px;
    color:#FFF;

    &:hover{
        color:#333;
    }
`;