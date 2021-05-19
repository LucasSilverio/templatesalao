import styled, { css } from 'styled-components';

export const BtnAction = styled.button`
    width:200px;
    height:40px;
    border:1px solid #223141;
    color:#223141;
    border-radius:5px;
    margin:5px;
    cursor:pointer;
    
    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }

    @media (max-width:700px){
        width:100%;
    }

`;

export const BoxInfo = styled.div`
    display:flex;
`;

export const Container = styled.div`
    padding:0;
    margin:0;
    display:flex;
    flex-direction:column;
    max-width:1200px;
    margin:auto;
    justify-content:center;
    position:relative;

    @media (max-width:1200px){
        padding:40px;
    }

    @media (max-width:700px){
        align-items:center;
        margin-top:-50px;
        padding:20px;
    }
`;

export const Column = styled.div`
    height:auto;
    display:flex;
    width:50%;

    @media (max-width:700px){
        flex-direction:column;
        width:100%;
    }
`;

export const SubContainer = styled.div`
    padding:0;
    margin:0;
    display:flex;
    flex-direction:row;
    max-width:1200px;
    position:relative;
    margin-top:50px;

    @media (max-width:700px){
        flex-direction:column;
    }
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction:row;
    max-width:800px;
    margin-top:60px;
    margin-bottom:60px;
    width:100%;

    @media (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-bottom:0;
    }
`;

export const Content = styled.div`
    flex:1;

    @media (max-width:800px){
        padding:20px;
    }
`;

export const Img = styled.img`
    width:350px;
    position:absolute;
    top:-180px;
    @media (max-width:1000px){
        display:none;
    }
`;

export const Item = styled.div`
    display:flex;
    flex:1;
    height:100px;
    border:none;
    flex-direction:column;
    position:relative;
`;

export const ItemNumber = styled.div`
    width:34px;
    height:34px;
    border-radius:17px;
    background-color:${(props) => props.end ? '#1976D2' : '#101759'};
    color:#FFF;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:18px;
    font-weight:bold;
    z-index:1;
`;

export const Line = styled.div`
    height:1px;
    background-color:#6A6F9E;
    width:100%;
    position:absolute;
`;

export const LineR = styled.div`
    height:1px;
    background-color:#6A6F9E;
    width:50%;
    right:0;
    position:absolute;
`;

export const LineL = styled.div`
    height:1px;
    background-color:#6A6F9E;
    width:50%;
    left:0;
    position:absolute;
`;

export const Lk = styled.a`
    width:200px;
    height:40px;
    background-color:#716FF2;
    color:#FFF;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    margin:5px;

    &:hover{
        opacity:0.9;
        transform:scale(1.01);
    }

    @media (max-width:700px){
        width:100%;
    }
`;

export const Paragrafo = styled.p`
    font-size:16px;
    line-height:24px;
    font-weight:400;
    color:#30455C;
    text-align:center;
    
`;

export const PageContainer = styled.div`
    width:100%;
    background-color:${(props) => props.bgColor};
    color:#fff;
    margin-bottom:250px;

    @media (max-width:1000px){
        margin-bottom:80px;
    }
`;

export const SubTitle = styled.h2`
    text-align:initial;
    color:${(props) => props.dark ? '#716FF2' : '#FFF'};
    margin-bottom:-30px;
    font-size:28px;

    @media (max-width:800px){
        margin-bottom:-60px;
        text-align:initial;
        padding:20px;
    }
`;
export const SubTitleSm = styled.p`
    text-align:initial;
    font-size:18px;
    color:#555;
    margin-top:40px;
`;

export const SubTitleDestak= styled.p`
    text-align:initial;
    font-size:18px;
    color:#555;
    font-weight:700;

    small {
        font-size:18px;
        color:#716FF2;
    }

    strong {
        font-size:28px;
        color:#716FF2;
    }
`;

export const TopItem = styled.div`
    height:30px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;