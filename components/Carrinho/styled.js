import styled, { css } from 'styled-components';

export const Container = styled.div`

    display:none;
    
    @media (max-width:600px){
        display:flex;
        flex-direction:column;
        padding:10px;
        width:100%;
    }
    
`;

export const ItemPic = styled.img`
    height:70px;
    width:60px;
`;

export const MobItemArea = styled.div`
    display:flex;
    flex:1;

`;

export const MobItemPicArea = styled.div`
    width:60px;
    height:70px;
`;

export const MobItemTitleArea = styled.div`
    flex:1;
    height:70px;
    display:flex;
    align-items:center;
    padding-left:2px;

    @media (max-width:520px){
        padding-left:5px;
    }
`;

export const MobItemTitleText = styled.div`
    font-size:14px;
    letter-spacing:1px;
`;

export const MobItemOptionsArea = styled.div`
    display:flex;
    flex:1;


`;

export const MobItemPriceArea = styled.div`
    display:flex;
    flex:1;
    height:48px;
    align-items:center;
`;

export const MobPriceText = styled.text`
    font-size:14px;
`;

export const MobItemRemoveArea = styled.div`
    display:flex;
    width:24px;
    height:48px;
    justify-content:center;
    align-items:center;
`;

export const MobItemIncrementArea = styled.div`
    display:flex;
    flex:1;
    height:48px;
    align-items:center;
`;

export const QtdBox = styled.div`
    width:118px;
    height:48px;
    border:1px solid #CCC;
    display:flex;

    @media (max-width:520px){
        height:30px;
    }
`;

export const QtdEl = styled.div`
    width:40px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    cursor:pointer;

    &:hover {
        color:#999;
    }

    @media (max-width:520px){
        height:30px;
        font-size:14px;
    }
`;

export const RemoveIcon = styled.img`
    width:14px;
    height:14px;
`;

export const PriceArea = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    // background-color:#FF0;
`;

export const SubtotalArea = styled.div`
    display:flex;
`;

export const Subtotal = styled.text`
    flex:2;
`;

export const Valor = styled.text`
    flex:1;
`;
















