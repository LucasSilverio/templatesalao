import styled, { css } from 'styled-components';

export const Area = styled.div`
    width:100%;
    max-width:1100px;
    margin:auto;
`;

export const ItemArea = styled.div`
    display:flex;
    flex:1;
`;

export const ItemTitle = styled.h3`
    font-size:24px;
    margin-bottom:0;
    color:#444;

    &:before{
        content:url('/check.svg');
    }
`;

export const ItemDesc = styled.p`
    font-size:14px;
    margin-top:5px;
    color:#444;
`;

export const ItemIcon = styled.div``;

export const ItemText = styled.div``;

export const Icon = styled.img`
    width:30px;
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
    color:#444;
    font-size:36px;
    margin-bottom:0;
`;

export const Traco = styled.div`
    width:100px;
    height:5px;
    background-color:#A5EB78;
`;