import styled, { css } from 'styled-components';

export const Container = styled.div`
    position:fixed;
    width:100%;
    height:1300px;
    left:0;
    background-color:#333;
    background-image:url('/bg.jpg');
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(1px);
`;