import styled, { css } from 'styled-components';

export const Container = styled.div`

    display:none;
    
    @media (max-width:600px){
        display:flex;
        width:100%;
    }
    
`;

export const FeedArea = styled.div`
    flex:1;
    height:auto;
    background-color:#F1F1F1;

    .ScrollArea {
        display:flex;
        width:100%;
        flex-wrap:wrap;
        justify-content:center;
    }
`;

export const FeedItem = styled.div`
    width:240px;
    height:400px;
    overflow:hidden;
    position:relative;
    background-color:#FFF;
    margin:10px;
    float:left;
    cursor:pointer;

    @media (max-width:1200px){
        width:230px;
        height:384px;
    }

    @media (max-width:1020px){
        width:200px;
        height:350px;
    }
    

    @media (max-width:900px){
        width:180px;
        height:320px;
    }

    @media (max-width:399px){
        width:160px;
        height:300px;
    }

    @media (max-width:360px){
        width:140px;
        height:280px;
    }

    @media (max-width:320px){
        width:130px;
        height:265px;
    }
`;

export const ImagemArea = styled.div`
    height:300px;
    overflow:hidden;
    position:relative;
    border:2px solid #FFF;

    @media (max-width:1200px){
        height:287.5px
    }

    @media (max-width:1020px){
        width:200px;
        height:250px;
    }

    @media (max-width:900px){
        width:180px;
        height:225px;
    }

    @media (max-width:399px){
        width:160px;
        height:200px;
    }

    @media (max-width:360px){
        width:140px;
        height:175px;
    }

    @media (max-width:320px){
        width:130px;
        height:162.5px;
    }

`;

export const Imagem = styled.img`
    width:240px;
    height:auto;
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
    border:1px solid #FFF;
    background-color:#CCC;

    @media (max-width:1200px){
        height:287.5px
    }

    @media (max-width:1020px){
        width:200px;
        height:250px;
    }

    @media (max-width:900px){
        width:180px;
        height:225px;
    }

    @media (max-width:399px){
        width:160px;
        height:200px;
    }

    @media (max-width:360px){
        width:140px;
        height:175px;
    }

    @media (max-width:320px){
        width:130px;
        height:162.5px;
    }
`;

export const ProdTitleArea = styled.div`
    height:30px;
    width:100%;
    text-align:center;
    line-height:15px;

    @media (max-width:1200px){
        height:29px;
    }

    @media (max-width:1020px){
        width:200px;
        height:25px;

    }

    @media (max-width:900px){
        width:180px;
        height:22.5px;

    }

    @media (max-width:399px){
        width:160px;
        height:auto;
    }

    @media (max-width:360px){
        width:140px;
        height:auto;
    }

    @media (max-width:320px){
        width:130px;
        height:auto;
    }
`;

export const ProdTitle = styled.h3`
    text-transform:uppercase;
    font-weight:bold;
    font-size:15px;
    color:#555;
`;

export const Parcele = styled.div`
    width:120px;
    height:20px;
    background-color:#E887B2;
    border-radius:5px;
    justify-content:center;
    align-items:center;
    display:flex;
    font-size:10px;
    color:#FFF;

`;

export const ParceleArea = styled.div`
    width:100%;
    height:20px;
    display:flex;
    justify-content:center;

    @media (max-width:1200px){
        height:19px;
    }

    @media (max-width:1020px){
        width:200px;
        height:20px;
        margin-top:10px;
    }

    @media (max-width:900px){
        width:180px;
        height:22.5px;
    }

    @media (max-width:399px){
        width:160px;
        height:20px;
    }

    @media (max-width:360px){
        width:140px;
        height:20px;
    }

    @media (max-width:320px){
        width:130px;
        height:20px;
    }
`;

export const PrecoArea = styled.div`
    height:30px;
    width:100%;
    text-align:center;
    line-height:15px;
    display:flex;
    justify-content:center;
    align-items:baseline;
    margin-top:-10px;

    @media (max-width:1200px){
        height:29px;
    }

    @media (max-width:1020px){
        width:200px;
        height:25px;
    }

    @media (max-width:900px){
        width:180px;
        height:22.5px;
    }

    @media (max-width:399px){
        width:160px;
        height:20px;
        margin-top:-20px;
    }

    @media (max-width:360px){
        width:140px;
        height:20px;
    }

    @media (max-width:320px){
        width:130px;
        height:20px;
    }
`;

export const PrecoDe = styled.p`
    text-transform:uppercase;
    font-weight:bold;
    font-size:12px;
    color:#666;
    text-decoration:line-through;
`;

export const Preco = styled.p`
    text-transform:uppercase;
    font-weight:bold;
    font-size:15px;
    color:#555;
    margin-left:5px;
`;










