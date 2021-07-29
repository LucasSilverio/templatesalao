import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { BannerArea, Box, Container, Coluna, Image, PageContainer, Lk, Logo, MenuItems, Subtitle, Title, Opcoes } from './styled';

class BannerLp extends Component {

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
                {this.props.textoPrincipal}
              </Title>
              <Subtitle>
              {this.props.textoSecundario}
              </Subtitle>
            </Coluna>
            <Coluna center={false}>
              <Image src={'/'+this.props.bg} />
            </Coluna>
          </Container>
          <Box>
            <Link href={'//wa.me/5534996960659'}>
              <a target={"_blank"}>
                <Lk>
                    Experimente grátis por 30 dias
                </Lk>
              </a>
            </Link>  
            <small><i>*Não é necessário cartão de crédito </i></small>
          </Box>
        </PageContainer>
      </>
    )
  }
}

export default BannerLp;