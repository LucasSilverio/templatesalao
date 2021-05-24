import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Container,
    EstabelecimentoArea,
    EstabelecimentoTitulo,
    Icone,
    IconeCart,
    Lk,
    Logo,
    Titulo,
    SubTitulo,
    OpcoesArea,
    PageArea
} from './styled';

class Confirmado extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){      
 
    return(       
      <Container bgcolor={'#F2A57C'} altura={this.props.altura}>
          <PageArea>
            <Titulo bgcolor={'#FFF'}>{'Cadastro Confirmado com Sucesso!'}</Titulo>
            <SubTitulo bgcolor={'#FFF'}>{'Acesse o aplicativo com as credenciais informadas.'}</SubTitulo>
          </PageArea>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Confirmado;