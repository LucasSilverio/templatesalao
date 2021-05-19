import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    z-index:10;
    margin-top:60px;
    width:100%;
    height:120px;
    position:relative;
`;

export const Brand = styled.img`
    width:150px;
    height:auto;
    margin:5px;
    cursor:pointer;
`;

export const PageArea = styled.div`
    width:100%;
    margin:auto;
    max-width:1100px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;

`;