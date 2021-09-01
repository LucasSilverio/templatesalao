import styled, { css } from 'styled-components';

export const Area = styled.div`
    width:100%;
    max-width:1100px;
    margin:auto;
`;

export const ItemArea = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
`;

export const ItemTitle = styled.h1`
    font-size:24px;
    margin-bottom:0;
    color:#444;
    margin-top:0;
    
`;

export const ItemTitleSm = styled.p`
    font-size:18px;
    margin-bottom:0;
    margin-top:0;
    color:#444;
    font-weight:600;
`;

export const ItemDesc = styled.p`
    font-size:14px;
    margin-top:5px;
    color:#444;
    margin-bottom:8px;
`;

export const LogoArea = styled.div`
    width:340px;
    height:300px;
    background-color:#FFF;
    border-radius:10px;

`;

export const Logo = styled.img`
    width:100%;
    height:auto;
`;

export const LinhaArea = styled.div`
    display:flex;
    align-items:center;
`;

export const Linha = styled.div`
    width:100%;
    height:1px;
    background-color:rgba(5,5,5,0.1);
    margin-top:10px;
`;

export const ItemText = styled.div``;

export const Icon = styled.img`
    width:30px;
    height:auto;
`;

export const Preco = styled.p`
    margin:0;
    font-weight:600;
`;

export const Reservar = styled.a`
    background-color:#8B7CF2;
    padding:5px;
    border-radius:5px;
    color:#FFF;
    font-size:12px;
    font-weight:600;
    cursor:pointer;
    margin-left:10px;
`;

export const VerMais = styled.a`
    margin-top:14px;
    position:absolute;
    cursor:pointer;

    &:hover {
        opacity:0.8;
    }
`;

export const PageContainer = styled.div`
    width:100%;
    background-color:#FFF;    
    overflow:hidden;
    position:relative;
    max-width:900px;
    margin:auto;
    margin-top:80px;
    margin-bottom:100px;

    .carousel .control-next.control-arrow::before{
        border-left: 8px solid #E887B2;
    }

    .carousel .control-prev.control-arrow::before {
        border-right: 8px solid #E887B2;
    }

    @media (max-width:1200px){
        padding-left:20px;
        padding-right:20px;
    }
`;

export const Row = styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:20px;
    padding-bottom:20px;


    @media (max-width:700px){
        flex-direction:column;
    }
`;

export const Title = styled.h2`
    color:#444;
    font-size:36px;
    margin-bottom:0;
`;

export const Traco = styled.div`
    width:100px;
    height:5px;
    background-color:#8B7CF2;
`;