import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { 
    Container,
    BtnAction,
    BtnAction2,
    BtnOpcoes,
    BottonMenu,
    EstabelecimentoArea,
    EstabelecimentoTitulo,
    Icone,
    IconeCart,
    Lk,
    Logo,
    LogoArea,
    OpcaoMenu,
    Titulo,
    OpcoesArea,
    MenuArea,
    PageArea,
    TopMenu
} from './styled';

class TopBarCli extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      menuVisible:false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
  }

  componentDidMount(){
  }

  handleScroll(){
    scroll.scrollTo(250);
  }

  handleMenu(){
    this.setState({menuVisible:!this.state.menuVisible})
  }

  render(){      
  
    return(       
      <Container bgcolor={'#FFF'} altura={this.props.altura} visible={this.props.visible}>
          <PageArea>
            <EstabelecimentoArea>
                <EstabelecimentoTitulo>
                    <Titulo bgcolor={'#333'}>{this.props.infos.nomeestabelecimento}</Titulo>
                </EstabelecimentoTitulo>
            </EstabelecimentoArea>
            <OpcoesArea>              
              <BtnAction2 onClick={this.handleScroll}>
                Agendar horário
              </BtnAction2>
              <BtnOpcoes onClick={this.handleMenu}>
                <Icone src='/user.svg' />
              </BtnOpcoes>
              <MenuArea visible={this.state.menuVisible}>
                <TopMenu onClick={this.handleMenu}>Fechar</TopMenu>
                {/* <LogoArea><Logo src='/logo.png' /></LogoArea> */}
                <OpcaoMenu>Meus Horários</OpcaoMenu>
                <BottonMenu>Sair</BottonMenu>
              </MenuArea>
              {/* {Cookie.get('token') == undefined &&
                <BtnAction>
                  <Icone src='/profile.svg' />
                  {'Entrar / Cadastrar-se'}
                </BtnAction>
              } 
              {Cookie.get('token') != undefined &&
                <BtnAction>
                  <Icone src='/profile.svg' />
                  {'Conta'}
                </BtnAction>
              }          */}
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