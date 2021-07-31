import styled, { css } from 'styled-components';

export const BtnAction = styled.button`
    width:350px;
    height:60px;
    background-color:#F2A57C;
    border:none;
    border-radius:20px;
    color:#FFF;
    font-weight:800;
    font-family:arial;
    margin-top:10px;
    margin-bottom:20px;

    small{
        font-size:13px;
        font-weight:700;
    }

    &:hover {
        opacity:0.8;
        cursor:pointer;
    }
`;

export const BoxItem = styled.div`
    display:flex;
    height:100%;
`;

export const Container = styled.div`
    max-width:1100px;
    width:100%;
    margin:auto;
    padding-top:50px;
    display:flex;
    justify-content:center;
    flex-direction:column;

    @media (max-width:999px){
        padding:20px;
    }

    .react-reveal {
        max-width:100%!important;
    }
`;

export const Column = styled.div`
    display:flex;
    width:340px;
    height:100%;
    flex-direction:column;
    margin:5px;

    @media (max-width:360px){
        max-width:90%!important;
        margin:auto;
    }


`;

export const Img = styled.img`
    width:400px;

`;

export const Icone = styled.img`
    width:36px;
`;

export const Item = styled.div`
    width:340px;
    height:100%;
    background-color:#716FF2;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#FFF;
    font-size:24px;
    font-weight:700;

    @media (max-width:370px){
        max-width:90%;
        margin:auto;
    }
`;

export const ItemDesc = styled.div`
    width:340px;
    height:100%;
    background-color:#FFF;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    color:#FFF;
    font-size:28px;
    font-weight:700;

    @media (max-width:600px){
        max-width:98%;
    }
`;

export const ItemTop = styled.div`
    height:40px;
    width:100%;
    padding-left:50px;
    font-size:18px;
    display:flex;
    align-items:center;
    color:${(props) => props.color};
`;

export const ItemColumnIcon = styled.div`
    width:50px;
    height:100%;
    display:flex;
    align-items:center;
`;

export const ItemColumnDesc = styled.div`
    width:100%;
    height:100%;
    color:#555;
    font-size:18px;
    font-weight:400;
`;

export const Descricao = styled.p`
    font-size:17px;
    color:#FFF;
    
`;

export const PageContainer = styled.div`
    width:100%;
    display:flex;
    margin-bottom:40px;
    background-color:#FFF;

`;

export const Titulo = styled.h3`
    font-weight:700;
    line-height:1.5em;
    text-transform:uppercase;
    color:#716FF2;
    font-size:18px;
    letter-spacing:1px;
    text-align:center;

    &:hover{
        opacity:0.8;
    }
`;

export const ServicosArea = styled.div`
    display:flex;
    width:100%;
    height:auto;
    justify-content:center;
    flex-wrap:wrap;
    margin:5px;
    margin-top:40px;
`;

export const Title = styled.h2`
    color:#444;
    font-size:36px;
    margin-bottom:0;
`;

export const Traco = styled.div`
    width:100px;
    height:5px;
    background-color:#A5EB78;
`;
