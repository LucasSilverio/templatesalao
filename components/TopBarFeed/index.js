import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Container,
    Btn,
    EstabelecimentoArea,
    EstabelecimentoTitulo,
    Icone,
    IconeCart,
    FiltroArea,
    Lk,
    Logo,
    OpcoesArea,
    PageArea,
    Select
} from './styled';

class TopBarFeed extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){     

    return(       
      <Container bgcolor={'#396186'} altura={this.props.altura}> 
          <PageArea>
            <EstabelecimentoArea>
                <EstabelecimentoTitulo>
                    <Logo src={'/logo.png'} />
                </EstabelecimentoTitulo>
            </EstabelecimentoArea>
            <FiltroArea>
              <form onSubmit={this.handleSubmit}>
                <Select>
                  <option value='1' selected={this.props.tipo == 1 ? true : false}>Barbearia</option>
                  <option value='2' selected={this.props.tipo == 2 ? true : false}>Salão</option>
                  <option value='3' selected={this.props.tipo == 3 ? true : false}>Manicure</option>
                  <option value='4' selected={this.props.tipo == 4 ? true : false}>Centro de Estética</option>
                </Select>
                <Select>
                  <option value='' disabled selected>{this.props.cidade}</option>
                </Select>
                <Btn>Ok</Btn>
              </form>
            </FiltroArea>
            <OpcoesArea>
                <Link href={'//wa.me/5534996960659'}>
                  <a target={"_blank"}>
                    <Lk>
                        Para Empresas
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

export default TopBarFeed;