import styled, { css } from 'styled-components';

export const Area = styled.div`
    width:100%;
    max-width:1100px;
    margin:auto;
`;

export const BrandArea = styled.div`
    display:flex;
    justify-content:space-evenly;
`;

export const ItemArea = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
`;

export const ItemTitle = styled.h2`
    font-size:34px;
    margin-bottom:0;
    color:#444;
    font-weight:800;
    margin-bottom:35px;
    line-height:33px;
`;

export const ItemDesc = styled.p`
    font-size:20px;
    line-height:28px;
    letter-spacing:0;
    margin-top:5px;
    font-weight:500;
    color:#444;
`;

export const ItemIcon = styled.div``;

export const ItemText = styled.div``;

export const Image = styled.img`
    width:100%;
    height:auto;
`;

export const ImageBrand = styled.img`
    width:150px;
    height:auto;
`;

export const PageContainer = styled.div`
    width:100%;
    background-color:#FFF;    
    overflow:hidden;
    position:relative;
    margin-top:170px;
    margin-bottom:100px;
    max-width:1200px;
    margin:auto;

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

    @media (max-width:700px){
        flex-direction:column;
    }
`;

export const Title = styled.h2`
    color:#333;
    font-size:18px;
`;