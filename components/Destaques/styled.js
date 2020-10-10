import styled, { css } from 'styled-components';

export const Title = styled.h2`
    color:#333;
    font-size:18px;
`;

export const PageContainer = styled.div`
    width:100%;
    height:400px;
    background-color:#fff;
    margin-bottom:250px;

    @media (max-width:1200px){
        width:95%;
        margin:auto;
        margin-bottom:240px;
    }

    @media (max-width:580px){
        width:85%;
        margin:auto;
        margin-bottom:40px;
    }
`;

export const Desk = styled.div`
    max-width:1200px;
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;

    @media (max-width:1080px){
        display:none;
    }
`;

export const Mob = styled.div`
    display:none;
    wmax-width:1200px;
    width:100%;
    margin:auto;
    flex-direction:column;

    @media (max-width:580px){
        display:flex;
    }

`;

export const Tab = styled.div`
    display:none;
    max-width:1200px;
    width:100%;
    margin:auto;
    flex-direction:column;

    @media (max-width:1079px){
        display:flex;
    }

    @media (max-width:800px){
        display:none;
    }
`;

export const TabB = styled.div`
    display:none;
    max-width:1200px;
    width:100%;
    margin:auto;
    flex-direction:column;

    @media (max-width:800px){
        display:flex;
    }

    @media (max-width:580px){
        display:none;
    }
`;

export const Slider = styled.div`
    height:300px;
    widht:100px;
    background-color:#FFF;
`;

export const Container = styled.div`
    position: relative;
    max-width:1200px;
    margin: auto;

    .buttonBack {
        position: absolute;
        border:none;
        top: 50%;
        left: -15px;
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
        top: 50%;
        right: -15px;
        transform: translateY(-50%);
        height:40px;
        width:40px;
        border-radius:20px;
        background-color:#FFF;
        img {
            width:16px;
        }
    }
`;

export const Parcele = styled.div`
    width:120px;
    height:30px;
    background-color:#E887B2;
    border-radius:5px;
    justify-content:center;
    align-items:center;
    display:flex;
    font-size:13px;

`;

export const PageAreaContainer = styled.div`
    max-width:1200px;
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
`;

export const ProdTitle = styled.h2`
    font-weight:bold;
    font-size:15px;
    color:#555;

    @media (max-width:580px) {
        font-size:13px;
        line-height:13px;
    }
`;

export const ProdTitleArea = styled.div`
    width:center;
    text-align:center;
    height:30px;

    @media (max-width:580px) {
        width:150px;
    }
`;


export const PageArea = styled.div`
    max-width:1200px;
    margin:auto;
    display:flex;

    .slider-area{
        height:500px;

        .slide-item{
            color:#FFF;
            height:500px;
            width:270px;
            display:flex;
            margin:10px;
            flex-direction:column;

            .image-area {
                height:360px;
                overflow:hidden;
                position:relative;

                img {
                    width:300px;
                    height:auto;
                    position: absolute;
                    top: -9999px;
                    bottom: -9999px;
                    left: -9999px;
                    right: -9999px;
                    margin: auto;
                    border:5px solid #FFF;
                }

                
            }

            .infos-area {
                height:140px;
                display:flex;
                flex-direction:column;
                align-items:center;
            }
        }

        @media (max-width:580px){
            height:370px;

            .slide-item{
                height:320px;
                width:160px;
    
                .image-area {
                    height:240px;

                    img {
                        width:200px;
                        height:auto;
                    }
                }
    
                .infos-area {
                    height:auto;
                }
            }

        }
        
    }

    
`;

export const PrecoArea = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;

    @media (max-width:580px){
        width:150px;
        align-items:center;
        height:40px;
    }
`;

export const Precode = styled.p`
    font-size:12px;
    font-weight:bold;
    color:#666;
    text-decoration:line-through;
`;

export const Preco = styled.p`
    font-size:16px;
    font-weight:bold;
    color:#333;
`;

export const Teste = styled.div`
    width:250px;
    height:300px;
    background-color:#123;
`;