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

    // .box-view {
    //     display:flex;
    //     flex-direction:column;
    //     width:250px;
    //     height:80px;
    //     background-color:#6E6EC1;;
    //     position:fixed;
    //     bottom:60px;
    //     border-top-right-radius:20px;
    //     border-bottom-right-radius:20px;
    //     left:0;
    //     font-weight:600;
    //     font-size:14px;
    //     text-align:center;
    //     align-items:center;
    //     justify-content:center;
    // }

    // .add-button {
    //     padding:5px;
    //     background-color:#F8F8F8;
    //     font-weight:500;
    //     border:none;
    //     border-radius:5px;
    // }

    @media (max-width:1100px){
        margin-top:${(props) => props.altura < 100 ? '0' : '0'};
    }

    @media (max-width:600px){
        flex-direction:column;
        padding:5px;
    }
`;

export const AdicionarTelaInicial = styled.div`
    // display:flex;
    // flex-direction:column;
    // width:250px;
    // height:80px;
    // background-color:#6E6EC1;;
    // position:fixed;
    // bottom:60px;
    // border-top-right-radius:20px;
    // border-bottom-right-radius:20px;
    // left:0;
    // font-weight:600;
    // font-size:14px;
    // text-align:center;
    // align-items:center;
    // justify-content:center;


`;

export const Lk = styled.a`
    cursor:pointer;
    padding:10px;
    cursor:pointer;
    border-radius:5px;
    color:#FFF;
    display:flex;
    flex-direction:column;
    font-size:13px;
    align-items:center;
    justify-content:center;
    font-weight:600;

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
    bottom:40px;
    right:0;

    @media (max-width:1100px){
        bottom:20px;
    }
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

export const Opcoes = styled.div`   


    button {
        display:block;
    }

    .add-button{
        position:fixed;
        left:0;
        bottom:0;
        background-color:#396186;
        color:#FFF;
        border:1px solid rgba(5,5,5,0.2);
        border-radius:5px;
        padding:5px;
        height:50px;
        cursor:pointer;

        &:hover{
            opacity:0.8;
        }
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