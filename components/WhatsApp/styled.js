import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:100%;
    height:100%;
    position:fixed;
    margin-top:40px;
    flex-direction:column;
    overflow:auto;
`;

export const Corpo = styled.div`
    display:flex;
    width:100%;
    height:100%;
    margin-bottom:100px;
    flex-direction:column;
    background-color:#FFF;
    overflow:auto;
    align-items:center;        
    
    // background-color: #ffffff;
    // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%239CFAC0' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");

    // iframe{
    //     border:1px solid rgba(5,5,5,0.1);
    //     border-radius:5px;
    //     color:#FFF!impor;
    // }
`;

export const Iframe = styled.iframe`
    border:1px solid rgba(5,5,5,0.1);
    border-radius:5px;
    color:#FFF!important;

    html{
        color:#FFF!important;
    }
`;

export const Subtitulo = styled.h2`
    color:#333;
    font-size:24px;
    font-weight:700;
    margin:0;
`;

export const SubtituloSm = styled.h3`
    margin:0;
    color:#333;
    font-size:16px;
`;

export const SubtituloUsm = styled.h3`
    margin:0;
    color:#333;
    font-size:16px;
    font-weight:400;
`;

export const Topo = styled.div`
    display:flex;
    width:100%;
    height:150px;
    background-color:#FFF;
    padding-left:10px;
    flex-direction:column;
    padding:10px;
`;

