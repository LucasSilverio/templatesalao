import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ModalLogin from '../ModalLogin';
import ModalHorarios from '../ModalHorarios';
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
    IconeOpcao,
    IconeCart,
    Logo,
    LogoArea,
    OpcaoMenu,
    OpcaoArea,
    Titulo,
    OpcoesArea,
    MenuArea,
    PageArea,
    TopMenu
} from './styled';
import osAPI from '../../services/osAPI';
import { LoaderArea } from '../ModalLogin/styled';

class TopBarCli extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      menuVisible:false,
      modalLoginVisible:false,
      modalHorariosVisible:false,
      infos:[],
      loading:false,
      historico:[]
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleModalHorarios = this.handleModalHorarios.bind(this)
    this.getHistorico = this.getHistorico.bind(this)
  }

  componentDidMount(){
  }

  handleScroll(){
    scroll.scrollTo(250);
  }

  handleMenu(){
    this.setState({menuVisible:!this.state.menuVisible})
    if(Cookie.get('token') != undefined && this.state.infos.length == 0){
      this.setState({loading:true})
      osAPI.getUserInfo(Cookie.get('token'))
      .then(r=>r.json())
      .then(json=>{
        this.setState({infos:json.data})
        this.setState({loading:false})
      })
      
    }
  }

  handleModal(){
    this.setState({menuVisible:false})
    this.setState({modalLoginVisible:!this.state.modalLoginVisible})
  }

  handleModalHorarios(){
    this.setState({modalHorariosVisible:!this.state.modalHorariosVisible})
    this.setState({menuVisible:false})
    this.getHistorico();
  }

  handleLogOut(){
    Cookie.remove('token');
    this.handleMenu();
  }

  getHistorico(){
    osAPI.getHistoricoSite(Cookie.get('token'), this.props.slug)
    .then(r=>r.json())
    .then(json=>{
      this.setState({historico:json.data})
      
    })
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
                    {!this.state.loading &&
                      <>
                        <TopMenu onClick={this.handleMenu}>
                          <strong>{this.state.infos.name}</strong>
                          {this.state.infos.celular}
                        </TopMenu>
                        <OpcaoArea onClick={this.handleModalHorarios}>
                          <IconeOpcao src='/clock.png' />
                          <OpcaoMenu>Meus Horários</OpcaoMenu>
                        </OpcaoArea>
                      </>
                    }
                    {this.state.loading &&
                      <LoaderArea>
                        <Loader 
                          type="TailSpin"
                          color="#5C6BF2"
                          height={48}
                          width={48}
                        />
                      </LoaderArea>
                    }
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
          <ModalHorarios
            visible={this.state.modalHorariosVisible}
            handleModal={this.handleModalHorarios}
            historico={this.state.historico}
            getHistorico={this.getHistorico}
            slug={this.props.slug} 
            nome={this.state.infos.name}
            telefone={this.state.infos.celular}
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