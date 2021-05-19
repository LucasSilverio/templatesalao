import styled, { css } from 'styled-components';

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

export const BoxArea = styled.div`
    display:flex;
    flex-direction:row;
`;

export const BtnAction = styled.button`
    padding:10px 20px 10px 20px;
    border-radius:5px;
    border:none;
    color:#FFF;
    font-weight:600;
    margin-top:30px;
    letter-spacing:1px;
    font-size:13px;
    cursor:pointer;
    background-color:#005a48;

    &:hover{
        opacity:0.9;
    }
`;

export const Container = styled.div`
    max-width:1100px;
    width:100%;
    height:auto;
    margin:auto;
    display:flex;
    flex-direction:column;
`;

export const Credito = styled.p`
    color:#888;
    margin:0;
    padding:0;
`;

export const Descricao = styled.p`
    font-size:17px;
    color:#888;
    text-align:center;
`;

export const Img = styled.img`
    width:200px;
    height:auto;
`;

export const Icon = styled.img`
    width:18px;
    height:auto;
    margin-right:10px;
`;

export const IconSocial = styled.img`
    width:36px;
    height:auto;
    margin-right:10px;
    cursor:pointer;
`;

export const Sub_h2 = styled.h2`
    text-transform:uppercase;
    font-weight:500;
    letter-spacing:0.1em;
    color:#333;
`;

export const Ul = styled.ul`
    list-style:none;
`;

export const Li = styled.li``;

export const Span = styled.span``;

export const Lk = styled.a`
    color:#999;
    font-size:15px;
    cursor:pointer;

    &:hover{
        opacity:0.8;
    }
`;

export const PageContainer = styled.div`
    width:100%;
    height:auto;
    background-color:#333;
    display:flex;

`;

export const Paragrafo = styled.p`
    font-weight:600;
    color:#666666;
    font-size:16px;
`;

export const TracoSm = styled.div`
    width:50px;
    height:2px;
    background-color:#FFF;
    margin-top:-5px;

`;

export const Titulo = styled.h3`
    font-weight:600;
    line-height:1.5em;
    text-transform:uppercase;
    color:#FFF;
    font-size:15px;
    letter-spacing:1px;
`;

export const ItensArea = styled.div`
    display:flex;
    width:100%;

    @media (max-width:690px){
        flex-direction:column;
        align-items:center;
    }
`;

export const Item = styled.div`
    width:350px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    margin:10px;

    @media (max-width:690px){
        width:100%;
    }
`;

export const BannerArea = styled.div`
    height:460px;
    max-width:100%;
    width:auto;
    overflow:hidden;
    cursor:pointer;
    

    img {
        width:100%;
        height:auto;
    }
`;