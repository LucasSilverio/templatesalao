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

class ExampleLp extends Component {

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
                  <ItemTitle>Tenha o controle total do seu negócio na palma da mão</ItemTitle>
                  <ItemDesc>Com nosso aplicativo, você ganha mais agilidade no dia a dia. Deixe o sistema cuidar da agenda para você.</ItemDesc>
                  <ItemDesc>Saiba quanto você está lucrando com um controle financeiro simples de entender, envie lembretes e notificações para seu clientes e ofereça um link exclusivo de auto agendamento para seus clientes.</ItemDesc>
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

export default ExampleLp;