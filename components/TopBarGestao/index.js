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
    OpcoesArea,
    PageArea
} from './styled';

class TopBarGestao extends Component {
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
            <EstabelecimentoArea>
                <EstabelecimentoTitulo>
                    <Logo src={'/logo.png'} />
                </EstabelecimentoTitulo>
            </EstabelecimentoArea>
            <OpcoesArea>
                <Link href={'//wa.me/5534996960659'}>
                  <a target={"_blank"}>
                    <Lk>
                       Falar com Suporte
                    </Lk>
                  </a>
                </Link>                
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

export default TopBarGestao;