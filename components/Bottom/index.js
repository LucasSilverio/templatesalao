import React, { Component } from 'react';
import Link from 'next/link';
import { Box, BtnAction, BoxArea, Container, Credito, Img, Icon, IconSocial, Lk, PageContainer, Paragrafo, Sub_h2, ItensArea, Span, Item, Titulo, Ul, Li, Descricao, TracoSm } from './styled';
// import osAPI from '../../services/osAPI';
// import Cookie from 'js-cookie';

class Bottom extends Component {

  constructor(props){
    super(props);
    this.state={
      banners:[]
    }
  } 

  componentDidMount(){
  }

  render(){
    return(
      <PageContainer>
        <Container>
          <ItensArea>
            <Item>
              <Titulo>Contato</Titulo>
              <TracoSm />
              <Ul>
                <Li>
                  {/* <Span><Icon src='/endereco.png' /></Span>
                  <Link href='/contato'>
                    <Lk>{this.props.infos.logradouro+', '+this.props.infos.numero}<br/>{this.props.infos.bairro+' - '+this.props.infos.cidade+'-'+this.props.infos.estado}</Lk>
                  </Link> */}
                </Li>
                <Li>
                  <Span><Icon src='/email.svg' /></Span>
                  <Link href={'mailto:contato@ellesolutions.com.br'}>
                    <a target={"_blank"}>
                      <Lk>{'contato@ellesolutions.com.br'}</Lk> 
                    </a>
                  </Link>
                </Li>
                <Li>
                  <Span><Icon src='/whatsapp.svg' /></Span>
                  <Link href={'//wa.me/5534996960659'}>
                    <a target={"_blank"}>
                      <Lk>{'+55(34)99696-0659'}</Lk> 
                    </a>
                  </Link>
                </Li>
              </Ul>
            </Item>
            <Item>
              <Img src={'/logo.png'} />
            </Item>
            <Item>
              <Titulo>The Shave</Titulo>
              <TracoSm />
              <BoxArea>
              {/* <Link href={this.props.infos.instagram}>
                <a target="_blank" rel="noreferrer">
                  <IconSocial src='/instaicon.png' />
                </a>
              </Link>
              <Link href={this.props.infos.instagram}>
                <a target="_blank" rel="noreferrer">
                  <IconSocial src='/facebookicon.png' />
                </a>
              </Link> */}
              </BoxArea>
              <BoxArea>
                <Credito>The Shave foi desenvolvido no Brasil pela empresa de tecnologia Elle Solutions. É uma solução 
                  moderna e segura para a modernização de salões de beleza, barbearias e clinicas de estética.
                </Credito>
                {/* <Credito>© 2017-2021 Elle Solutions Software</Credito> */}
              </BoxArea>
            </Item>
          </ItensArea>
        </Container>
      </PageContainer>
    )
  }
}

export default Bottom;