import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    AdicionarTelaInicial,
    Container,
    Lk,
    Logo,
    Notificacao,
    Opcoes,
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

  installApp() {
  }

  render(){     

    return(        
      <Container bgcolor={'#333'} altura={this.props.altura}> 
          <PageArea>
            <Link href='/'>
              <Lk>
                {/* <Logo src={'/logo.png'} /> */}
                Cadastre seu Salão
              </Lk>
            </Link>    
            <Link href='/'>
              <Lk>
                {/* <Logo src={'/logo.png'} /> */}
                Entre em Contato Conosco
              </Lk>
            </Link>          
          </PageArea>
          <Notificacao>
            <div class='onesignal-customlink-container'></div>
          </Notificacao>
          <AdicionarTelaInicial>
            {/* <Opcoes >
              <button class="add-button" onClick={this.installApp}>Adicione Nosso App à Sua Tela Inicial</button>
            </Opcoes> */}
          </AdicionarTelaInicial>
          <Opcoes >
              {/* <button class="add-button" onClick={this.installApp}>Adicione Nosso App à Sua Tela Inicial</button> */}
          </Opcoes>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default BottomCli;