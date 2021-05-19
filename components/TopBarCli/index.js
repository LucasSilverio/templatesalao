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
    OpcoesArea,
    PageArea
} from './styled';

class TopBarCli extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){      
 
    return(       
      <Container bgcolor={'#000'} altura={this.props.altura}>
          <PageArea>
            <EstabelecimentoArea>
                <EstabelecimentoTitulo>
                    <Titulo bgcolor={'#FFF'}>{this.props.infos.nomeestabelecimento}</Titulo>
                </EstabelecimentoTitulo>
            </EstabelecimentoArea>
            <OpcoesArea>
                               
            </OpcoesArea>
          </PageArea>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default TopBarCli;