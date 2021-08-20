import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ModalLogin from '../ModalLogin';
import { 
    Container,
    BtnAction,
    BtnAction2,
    BtnOpcoes,
    BottonMenu,
    EstabelecimentoArea,
    EstabelecimentoTitulo,
    Icone,
    IconeLg,
    IconeArea,
    IconeCart,
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
      menuVisible:false,
      modalLoginVisible:false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  componentDidMount(){
  }

  handleScroll(){
    scroll.scrollTo(250);
  }

  handleMenu(){
    this.setState({menuVisible:!this.state.menuVisible})
  }

  handleModal(){
    this.setState({modalLoginVisible:!this.state.modalLoginVisible})
  }

  handleLogOut(){
    Cookie.remove('token');
    this.handleMenu();
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
                {Cookie.get('token') != undefined &&
                  <>
                    <TopMenu onClick={this.handleMenu}>
                      <strong>Lucas Silvério</strong>
                      (34) 99696-0659
                    </TopMenu>
                    {/* <OpcaoMenu>Meus Horários</OpcaoMenu> */}
                    <BottonMenu onClick={this.handleLogOut}>Sair</BottonMenu>
                  </>
                }
                {Cookie.get('token') == undefined &&
                  <>
                    <IconeArea>
                      <IconeLg src='user.svg' />
                    </IconeArea>
                    <BottonMenu onClick={this.handleModal}>Entrar / Criar Conta</BottonMenu>
                  </>
                }
              </MenuArea>
            </OpcoesArea>
          </PageArea>
          <ModalLogin
            visible={this.state.modalLoginVisible}
            handleModal={this.handleModal}
            slug={this.props.slug}
          />
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default TopBarCli;