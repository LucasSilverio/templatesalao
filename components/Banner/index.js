import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { BannerArea, Container, Coluna, Image, PageContainer, Logo, MenuItems, Subtitle, Title, Opcoes } from './styled';

class Banner extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }  

  render(){
    return(
      <> 
        <PageContainer>
          <Container> 
            <Coluna center={true}>
              <Title>
                Aplicativo fácil e prático de agendamento para seu estabelecimento
              </Title>
              <Subtitle>
                Tenha uma agenda bem organizada e ganhe mais tempo livre para atender novos clientes ou até mesmo para descansar
              </Subtitle>
            </Coluna>
            <Coluna center={false}>
              <Image src={'/bannerSalao.svg'} />
            </Coluna>
          </Container>
        </PageContainer>
      </>
    )
  }
}

export default Banner;