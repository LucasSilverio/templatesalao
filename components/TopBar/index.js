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
    OpcoesArea,
    PageArea
} from './styled';

class TopBar extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){     

    return(       
      <Container bgcolor={this.props.bgcolor}>
          <PageArea>
            <EstabelecimentoArea>
                <EstabelecimentoTitulo>
                    Nome do salãoss
                </EstabelecimentoTitulo>
                <IconeCart src='/cart.png' />
            </EstabelecimentoArea>
            <OpcoesArea>
                <Link href='/teste'>
                    <Lk>
                        Reserve seu horário
                    </Lk>
                </Link>
                <Icone src='/facebook.png' />
                <Icone src='/instagram.png' />
                
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

export default TopBar;