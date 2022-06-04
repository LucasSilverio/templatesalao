import styled, { css } from 'styled-components';

export const AreaSite = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#F0F0F0;
    // overflow:hidden;
    height:100%;
`;

export const Container = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    height:100%;
`;

export const ContainerRow = styled.div`
    display:flex;
    flex-direction:row;
`;

export const FirstColor = '#FFF';
// export const SecondColor = '#5C6BF2';

export const InfoAreaUnder = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    left:200px;
    min-height:100%;
    width:85%;
    background-color:#FFF;
    padding:20px;

    @media (max-width:799px){
        left:${(props) => props.left || 0};
        width:100%;
        transition: 1s;
        z-index:1000;
    }
`;

export const SecondColor = '#2093BD';
export const ThirdColor = '#F0F0F0';
export const TransparencyColorOne = 'rgba(0,0,0,0.5)';
export const TransparencyColorTwo = 'rgba(0,0,0,0.8)';