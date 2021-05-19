import React, { Component } from 'react';
import Link from 'next/link';
import { BtnAction, BoxInfo, Container, ContentArea, Content, Img, Item, ItemNumber, Line, Column, Lk, LineR, LineL, PageContainer, Paragrafo, SubTitle, SubTitleDestak, SubContainer, SubTitleSm, TopItem } from './styled';
import  Router from 'next/router';

class Comecar extends Component {

  constructor(props){
    super(props);
    this.state={
    }
    this.sBottom = this.sBottom.bind(this);
    this.handlePlanos = this.handlePlanos.bind(this);
    this.handleModelos = this.handleModelos.bind(this);
    this.actionClick_Planos = this.actionClick_Planos.bind(this);
  }

  sBottom(){
    // this.props.handleContact()
    Router.push('/contato')
  }

  handleModelos(){
    Router.push('/modelos');
}

  handlePlanos(){
      this.actionClick_Planos();
      Router.push('/planos');
  }

  actionClick_Planos(){
    gtag('event', 'Ver planos', {
      'event_category': 'Clique',
      'event_label': 'Ver planos',
      'value': 0
    });
  } 

  render(){
    return(
        <PageContainer bgColor={'#FFF'}>
            <Container>
                <SubTitle dark={true}>Vamos começar?</SubTitle>
                <SubTitleSm>Entre em contato com um consultor gratuitamente e tire todas as suas dúvidas. </SubTitleSm>
                <BoxInfo>
                  <SubTitleDestak>Planos a partir de <small>R$</small><strong>49,90</strong> </SubTitleDestak>
                </BoxInfo>
                <SubContainer>
                    <Column>
                      <Link href={'//wa.me/5534996960659'} >
                        <a target={"_blank"}>
                          <BtnAction>FALAR COM CONSULTOR</BtnAction>
                        </a>
                      </Link>
                    </Column>
                    <Column>
                        <Img src='comecar.svg' />
                    </Column>
                </SubContainer>
            </Container>
        </PageContainer>
)
  }
}

export default Comecar;