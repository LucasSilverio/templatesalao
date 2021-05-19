import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Container,
    BoxIcon,
    EstabelecimentoArea,
    EstabelecimentoTitulo,
    Icone,
    IconeCart,
    Lk,
    Logo,
    Titulo,
    TituloP,
    OpcoesArea,
    PageArea
} from './styled';
import { Icon } from '../Bottom/styled';

class BottomCli extends Component {
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
            <BoxIcon>
              <Link href={this.props.infos.instagram}>
                <a target={'blank'}><Icone src='/instagramicon.svg' /></a>
              </Link>
              <Link href={this.props.infos.slug+'/endereco'}>
                <a target={'blank'}>
                  <Icone src='/locationicon.svg' />
                </a>
              </Link>
            </BoxIcon>
            <Titulo>©{this.props.infos.nomeestabelecimento}</Titulo>
            <TituloP>Barbearia em {this.props.infos.cidade+' '+this.props.infos.estado}</TituloP>
          </PageArea>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default BottomCli;