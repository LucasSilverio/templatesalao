import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { 
    Area,
    BrandArea,
    ItemArea,
    ItemIcon,
    ItemText,
    ItemTitle,
    ItemDesc,
    Image,
    ImageBrand,
    PageContainer,
    Row,
    Title
} from './styled';

class Example extends Component {

  constructor(props){
    super(props);
    this.state={
        comentarios:[]
    }
  } 

  componentDidMount(){
  }

  render(){
    return(
      <> 
        <PageContainer> 
          <Area>
            <Row>
              <ItemArea>
                <ItemIcon></ItemIcon>
                <ItemText>
                  <ItemTitle>Feito para empresas e para quem trabalha sozinha(o)</ItemTitle>
                  <ItemDesc>O The Shave App foi feito para você ter o controle do seu negócio na palma da sua mão. Conte com as melhores ferramentas para você administrar melhor o seu negócio.</ItemDesc>
                  <ItemDesc>Controle sua agenda, envie lembretes e notificações, controle financeiro e fluxo de caixa.</ItemDesc>
                </ItemText>
              </ItemArea>
              <ItemArea>
                <ItemIcon>
                  <Image src={'/phone.png'} />
                </ItemIcon>
                <BrandArea>
                  <ImageBrand src={'/appstore.png'} />
                  <ImageBrand src={'/playstore.png'} />
                </BrandArea>
              </ItemArea>
              
            </Row>
          </Area>          
        </PageContainer>
      </>
    )
  }
}

export default Example;