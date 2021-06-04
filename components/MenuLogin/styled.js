import { fadeIn } from 'react-animations';
import { fadeOut } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`; 

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    max-width:1200px;
    margin:auto;
    flex-direction:column;
`;

export const Logo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    img {
        width:200px;
        height:auto;
    }        

    @media (max-width:850px){
        img {
            width:120px;
            height:auto;
        }
    }
`;

export const PageContainer = styled.div`
    width:100%;
    height:90px;
    background-color:#FFF;
    border-bottom:1px solid rgba(153, 153, 153, 0.2);
    @media (max-width:850px){
        height:100px;
    }
`;

export const Top = styled.div`
    // padding:0;
    // margin:0;
    display:flex;
    height:100px;
    justify-content:center;

    @media (max-width:1199px){
        padding-left:20px;
    }

    @media (max-width:899px){
        justify-content:center;
    }
`;