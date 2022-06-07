import { fadeIn } from 'react-animations';
import { fadeOut } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`; 

export const Container = styled.div`
    display:flex;
    flex:1;
    // max-width:1200px;
    margin:auto;
    flex-direction:column;
    width:100%;
    position:relative;

    ul {
        height:auto;
        display:flex;
        // align-items:center;
        flex-direction:column;
        width:100%;

    }

    li {
        &:hover {
            color:#5C6BF2;
        }
    }
    

    ul, li {
        text-decoration:none;
        list-style:none;
        margin:0;
        padding:10px;
        color:#101759;
    }

    a {        
        margin-left:10px;
    }

    .produtos{
        display:flex;
        align-items:center;
    }

    .produtos::before{
        content:url('/produtos.png');
        width:12px;
        height:12px;
        display:flex;
        margin-right:3px;
    }

    .produtosArea {
        cursor:pointer;
        &:hover .subProdutos {
            display:block!important;
            animation: 1s ${fadeInAnimation};
        }
        .subProdutos {
            display:none;
            font-size:12px;
        }
    }

    .vendasArea {
        cursor:pointer;
        &:hover .subVendas {
            display:block!important;
            animation: 1s ${fadeInAnimation};
        }
        .subVendas {
            display:none;
            font-size:12px;
        }
    }

    .marketingArea {
        cursor:pointer;
        &:hover .subMarketing {
            display:block!important;
            animation: 1s ${fadeInAnimation};
        }
        .subMarketing {
            display:none;
            font-size:12px;
        }
    }

    
`;

export const Ul = styled.ul``;

export const Lk = styled.a`
    margin-left:10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    
    // &:before{
    //     content:url(${(props) => props.icon});
    //     width:12px;
    //     height:12px;
    //     display:flex;
    //     margin-right:3px;
    // }
`;

export const Line = styled.div`
    height:1px;
    width:100%;
    background-color:#999;
    opacity:0.3;

`;

export const LineSoft = styled.div`
    height:1px;
    width:100%;
    background-color:#999;
    opacity:0.3;
    position:absolute;
    left:0;

`;

export const Logo = styled.img`
    position:absolute;
    top:-70px;
    width:230px;
    height:auto;
    z-index:1000;
`;

export const PageArea = styled.div`
    display:flex;
    flex:1;
    height:100%;
    width:250px;
    flex-direction:column;
    background-color:#FFF;
    left:0;
    top:70px;
    position:fixed;

    @media (max-width:799px){
    }
`;

export const Suporte = styled.div`
    width:100%;
    height:100px;
    background-color:#00f;
    position:absolute;
    bottom:80px;
    left:10px;
    padding:20px;
`;

export const HamburgerMenu = styled.div`
    width:50px;
    height:40px;
    background-color:#5C6BF2;
    position:absolute;
    top:10px;
    right:20px;
    z-index:100;
    cursor:pointer;
    border-radius:5px;
    color:#FFF;
    display:none;
    justify-content:center;
    align-items:center;

    @media (max-width:799px){
        display:flex;
        z-index:10000;
    }
`;