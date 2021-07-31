import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel'; 
import ModalLead from '../../components/ModalLead';
import { BannerArea, Box, Container, Coluna, Image, PageContainer, Lk, Logo, MenuItems, Subtitle, Title, Opcoes } from './styled';

class BannerLp extends Component {

  constructor(props){
    super(props);
    this.state={
      modalLeadVisible:false
    }
    this.handleModal = this.handleModal.bind(this)
  }  

  handleModal(){
    this.setState({modalLeadVisible:!this.state.modalLeadVisible})
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
            <Lk onClick={this.handleModal}>
                Experimente grátis por 30 dias
            </Lk>  
            <small><i>*Não é necessário cartão de crédito </i></small>
          </Box>
        <ModalLead
          visible={this.state.modalLeadVisible}
          handleModal={this.handleModal}
        />
        </PageContainer>
      </>
    )
  }
}

export default BannerLp;