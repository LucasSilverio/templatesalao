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
    margin-bottom:40px;
    display:block;

    @media (max-width:499px){
        width:96%;
        margin:auto;
    }

    small{
        font-size:13px;
        font-weight:700;
    }

    &:hover {
        opacity:0.8;
        cursor:pointer;
    }
`;

export const BtnActionMob = styled.button`
    width:350px;
    height:60px;
    background-color:#F2A57C;
    border:none;
    border-radius:20px;
    color:#FFF;
    font-weight:800;
    font-family:arial;
    margin-top:10px;
    margin-bottom:40px;
    display:none;

    @media (max-width:499px){
        display:block;
    }

    small{
        font-size:13px;
        font-weight:700;
    }

    &:hover {
        opacity:0.8;
        cursor:pointer;
    }
`;

export const BoxRow = styled.div`
    display:flex;
    max-width:1100px;
    justify-content:center;
    width:100%;
`;

export const Container = styled.div`
    max-width:1100px;
    width:100%;
    margin:auto;
    padding-top:50px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    @media (max-width:999px){
        padding:20px;
    }

    @media (max-width:600px){
        display:none;
    }
`;

export const ContainerMob = styled.div`
    max-width:1100px;
    width:100%;
    margin:auto;
    padding-top:50px;
    display:none;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    .buttonBack {
        position: absolute;
        border:none;
        top: 100px;
        left: -12px;
        height:40px;
        width:40px;
        border-radius:20px;
        background-color:#FFF;
        transform: translateY(-50%);

        img {
            width:16px;
        }
    }
    
    .buttonNext {
        position: absolute;
        border:none;
        top: 100px;
        right: 40px;
        transform: translateY(-50%);
        height:40px;
        width:40px;
        border-radius:20px;
        background-color:#FFF;
        img {
            width:16px;
        }
    }

    @media (max-width:999px){
        padding:20px;
    }

    @media (max-width:600px){
        display:flex;
    }

    .slider-area {
        display:flex;
        flex-direction:row;
    }
`;

export const Column = styled.div`
    display:flex;
    flex-direction:column;

    @media (max-width:499px){
        width:100%;
    }

`;

export const Img = styled.img`
    width:400px;

`;

export const Descricao = styled.p`
    font-size:17px;
    color:#FFF;
    margin:7px;

    &:before{
        content:url(${(props) => props.icone || '/check.svg'});
    }
    
`;

export const PageContainer = styled.div`
    width:100%;
    background-color:#716FF2;
    margin-top:60px;

`;

export const Preco = styled.p`
    color:#FFF;
    text-align:center;

    small {

    }

    strong {
        font-size:36px;
    }


`;

export const PrecoCondicao = styled.p`
    color:#FFF;
    text-align:center;
    margin-top:-28px;

    small {
        font-size:10px;
    }


`;

export const PrecoAntigo = styled.p`
    color:#FFF;
    text-align:center;
    margin-bottom:-25px;

    text-decoration:line-through;

    small {

    }

    strong {
        font-size:18px;
    }


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
    justify-content:center;
    flex-wrap:wrap;
    max-width:50%;
`;

export const SubTitle = styled.h2`
    text-align:center;
    color:${(props) => props.dark ? '#716FF2' : '#FFF'};
    font-size:32px;
    font-weight:700;
    max-width:800px;

    a {
        text-decoration:underline;
        color:#F2A57C;
    }
`;

export const Slider = styled.div`
    height:400px;
    widht:320px;
    background-color:#FFF;
    display:flex;
    flex-direction:row!important;
`;

export const ElementoArea = styled.div`,
    height:200px;
    width:400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#FFF;
    padding:10px;
    padding-left:60px;
`;
