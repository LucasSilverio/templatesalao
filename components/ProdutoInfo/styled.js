import styled, { css } from 'styled-components';

export const Container = styled.div`

    display:none;
    
    @media (max-width:600px){
        display:flex;
        padding:10px;
        width:100%;
    }
    
`;

export const ImagemArea = styled.div`
    width:100%;
    height:300px;
`;

export const InfoArea = styled.div`
    width:100%;
    height:100px;
    background-color:#333;
`;

export const ProdArea = styled.div`
    display:flex;
    width:100%;
    height:400px;
    background-color:#CCC;
    flex-direction:column;
`;










