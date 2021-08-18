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
      <Container bgcolor={'#333'} altura={this.props.altura}> 
          <PageArea>
            <Link href='/'>
              <Lk>
                <Logo src={'/logo.png'} />
                Crie sua agenda
              </Lk>
            </Link>
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