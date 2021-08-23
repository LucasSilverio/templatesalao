import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { BannerArea, Box, Container, Coluna, Image, PageContainer, Lk, Logo, MenuItems, Subtitle, Title, Opcoes } from './styled';

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
                O melhor aplicativo para a gestão de negócios de beleza e estética
              </Title>
              <Subtitle>
                Aplicativo para gestão de centros de estética, manicures, salões de beleza e barbearias.
              </Subtitle>
            </Coluna>
            <Coluna center={false}>
              <Image src={'/bannerSalao.svg'} />
            </Coluna>
          </Container>
          <Box>
            <Link href={'//wa.me/5534996960659'}>
              <a target={"_blank"}>
                <Lk>
                    Experimente grátis por 14 dias
                </Lk>
              </a>
            </Link>    
          </Box>
        </PageContainer>
      </>
    )
  }
}

export default Banner;