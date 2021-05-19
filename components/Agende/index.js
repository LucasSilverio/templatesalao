import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Brand,
    BrandBox,
    Container,
    Coluna,
    Titulo,
    PageArea,
    SubTitulo
} from './styled';

class Agende extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){     

    return(       
      <Container bgcolor={'#FFF'} altura={this.props.altura}>
          <PageArea>
            <Coluna>
              <Titulo>Baixe agora nosso aplicativo próprio da {this.props.infos.nomeestabelecimento}!</Titulo>
              <SubTitulo>Com o nosso aplicativo, você tem acesso prático e rápido aos nossos serviçoes e horários. Baixe agora e agende seu horário.</SubTitulo>
              <BrandBox>
                <Link href={this.props.infos.playstore}>
                  <a target='blank'><Brand src='/playstore.png' /></a>
                </Link>
                <Link href={this.props.infos.appstore}>
                  <a target='blank'><Brand src='/appstore.png' /></a>
                </Link>
              </BrandBox>
            </Coluna>
            <Coluna>
              
            </Coluna>
          </PageArea>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Agende;