import styled, { css } from 'styled-components';

export const Container = styled.div`
    // animation: 0.5s ${fadeInAnimation};
    display:flex;
    width:100%;
    margin-top:40px;
    bottom:0;
    position:relative;
    z-index:8;
    height:80px;
    background-color:${(props) => props.bgcolor};
    box-shadow:${(props) => props.altura < 100 ? '0 0 0 0 rgba(5,5,5,.5)' : '-2px 2px 10px 0 rgba(207,212,214,.5)'};
    color:#FFF;

    @media (max-width:1100px){
        margin-top:${(props) => props.altura < 100 ? '0' : '0'};
    }

    @media (max-width:600px){
        flex-direction:column;
        padding:5px;
    }
`;

export const Lk = styled.a`
    cursor:pointer;
    padding:10px;
    cursor:pointer;
    border-radius:5px;
    color:#FFF;
    display:flex;
    flex-direction:column;
    font-size:11px;
    align-items:center;
    justify-content:center;

    &:hover{
        opacity:0.8;
    }
`;

export const Logo = styled.img`
    width:120px;
    height:auto;
`;

export const Notificacao = styled.div`
    height:auto;
    width:auto;
    position:absolute;
    bottom:0;
    right:0;
`;

export const OpcoesArea = styled.div`
    display:flex;
    flex:1;
    height:60px;
    align-items:center;
    justify-content:flex-end;

    @media (max-width:600px){
        height:40px;
    }

    
`;

export const PageArea = styled.div`
    max-width:1200px;
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media (max-width:600px){
        flex-direction:column;
        align-items:center;
        margin:unset;
    }
`;