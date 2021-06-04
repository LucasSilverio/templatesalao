import { fadeIn } from 'react-animations';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
    animation: 0.5s ${fadeInAnimation};
    background-color:#5C6BF2;
    position:fixed;
    top:0;
    display:${(props) => props.visible ? 'flex' : 'none'};
    left:50%;
    margin-left:-100px;
    z-index:200;
    border-radius:5px;
    color:#FFF;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:12px;
    cursor:pointer;
    padding:20px;


`;