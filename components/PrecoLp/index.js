import React, { Component } from 'react';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { BtnAction, BtnActionMob, BoxRow, Column, ContainerMob, Container, Descricao, Img, PageContainer, Preco, PrecoAntigo, PrecoCondicao, ServicosArea, SubTitle,  } from './styled';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';   
import ModalLead from '../../components/ModalLead';

class PrecoLp extends Component {

  constructor(props){
    super(props);
    this.state={
      banners:[],
      modalLeadVisible:false
    }
    this.handleModal = this.handleModal.bind(this)
  } 

  componentDidMount(){
  }

  handleModal(){
    this.setState({modalLeadVisible:!this.state.modalLeadVisible})
  }

  sBottom(e){
    scroll.scrollTo(e);
  }

  render(){
    return(
      <PageContainer>
        <Container>
          <SubTitle dark={false}>Teste por 30 dias grátis. Não precisa de cartão de crédito.</SubTitle>
          <BoxRow>
            <ServicosArea>
              <Zoom>
                <Column>
                  <PrecoAntigo>
                    <small>De R$</small><strong>19,90</strong><small>/mês</small>
                  </PrecoAntigo >
                  <Preco>
                    <small>R$</small><strong>9,90</strong><small>/mês</small>
                  </Preco>
                  <PrecoCondicao>
                    <small>*Oferta válida até 01/Agosto</small>
                  </PrecoCondicao >

                  <Descricao>Sistema completo The Shave</Descricao>
                  <Descricao>Aplicativo do Profissional</Descricao>
                  <Descricao>Controle da Agenda</Descricao>
                  <Descricao>Envio de Lembretes via Whatsapp</Descricao>
                  <Descricao>Gestão Financeira</Descricao>
                  <Descricao>Fluxo de Caixa</Descricao>
                  <Descricao>Controle de frequência do cliente</Descricao>                
                  <Descricao>Implantação grátis</Descricao>
                  <Descricao>Suporte via Whatsapp</Descricao>
                  <BtnAction onClick={this.handleModal}>QUERO TESTAR POR 30 DIAS SEM CUSTO</BtnAction>
                  
                </Column>
              </Zoom>
            </ServicosArea>
            <ServicosArea>
              <Zoom>
                <Column>
                  <PrecoAntigo>
                    <small>De R$</small><strong>29,90</strong><small>/mês</small>
                  </PrecoAntigo >
                  <Preco>
                    <small>R$</small><strong>19,90</strong><small>/mês</small>
                  </Preco>
                  <PrecoCondicao>
                    <small>*Oferta válida até 01/Agosto</small>
                  </PrecoCondicao >

                  <Descricao>Sistema completo The Shave</Descricao>
                  <Descricao>Aplicativo do Profissional</Descricao>
                  <Descricao>Controle da Agenda</Descricao>
                  <Descricao>Envio de Lembretes via Whatsapp</Descricao>
                  <Descricao>Gestão Financeira</Descricao>
                  <Descricao>Fluxo de Caixa</Descricao>
                  <Descricao>Controle de frequência do cliente</Descricao>                
                  <Descricao>Implantação grátis</Descricao>
                  <Descricao>Suporte via Whatsapp</Descricao>
                  <Descricao>Link WebApp para agendamento online</Descricao>
                  <BtnAction onClick={this.handleModal}>QUERO TESTAR POR 30 DIAS SEM CUSTO</BtnAction>
                  
                </Column>
              </Zoom>
            </ServicosArea>
            <ServicosArea>
              <Zoom>
                <Column>
                  <PrecoAntigo>
                    <small>.</small>
                  </PrecoAntigo >
                  <Preco>
                    <small>R$</small><strong>49,90</strong><small>/mês</small>
                  </Preco>
                  <PrecoCondicao>
                    <small>.</small>
                  </PrecoCondicao >

                  <Descricao>Sistema completo The Shave</Descricao>
                  <Descricao>Aplicativo do Profissional</Descricao>
                  <Descricao>Controle da Agenda</Descricao>
                  <Descricao>Envio de Lembretes via Whatsapp</Descricao>
                  <Descricao>Gestão Financeira</Descricao>
                  <Descricao>Fluxo de Caixa</Descricao>
                  <Descricao>Controle de frequência do cliente</Descricao>          
                  <Descricao>Implantação grátis</Descricao>
                  <Descricao>Suporte via Whatsapp</Descricao>
                  <Descricao>Link WebApp para agendamento online</Descricao>
                  <Descricao>Aplicativo Personalizado na Play Store e App Store</Descricao>
                  <BtnAction onClick={this.handleModal}>QUERO TESTAR POR 30 DIAS SEM CUSTO</BtnAction>
                  
                </Column>
              </Zoom>
            </ServicosArea>
          </BoxRow>
          {/* <BtnAction onClick={e=>this.sBottom(550)}>QUERO TESTAR POR 7 DIAS SEM CUSTO</BtnAction> */}
          <BtnActionMob onClick={e=>this.sBottom(800)}>QUERO TESTAR POR 7 DIAS SEM CUSTO</BtnActionMob>
        </Container>
        <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={60}
        totalSlides={3}
        visibleSlides={1}
        step={1}
        infinite={true}
        >  
            <ContainerMob>
            <SubTitle dark={false}>Teste por 30 dias grátis. Não precisa de cartão de crédito.</SubTitle>
              <Slider className='slider-area'>
                <ServicosArea>
                  <Zoom>
                    <Column>
                      <PrecoAntigo>
                        <small>De R$</small><strong>19,90</strong><small>/mês</small>
                      </PrecoAntigo >
                      <Preco>
                        <small>R$</small><strong>9,90</strong><small>/mês</small>
                      </Preco>
                      <PrecoCondicao>
                        <small>*Oferta válida até 01/Agosto</small>
                      </PrecoCondicao >

                      <Descricao>Sistema completo The Shave</Descricao>
                      <Descricao>Aplicativo do Profissional</Descricao>
                      <Descricao>Controle da Agenda</Descricao>
                      <Descricao>Envio de Lembretes via Whatsapp</Descricao>
                      <Descricao>Gestão Financeira</Descricao>
                      <Descricao>Fluxo de Caixa</Descricao>
                      <Descricao>Controle de frequência do cliente</Descricao>                
                      <Descricao>Implantação grátis</Descricao>
                      <Descricao>Suporte via Whatsapp</Descricao>
                      <BtnAction onClick={e=>this.sBottom(550)}>QUERO TESTAR POR 30 DIAS SEM CUSTO</BtnAction>
                      
                    </Column>
                  </Zoom>
                </ServicosArea>
                <ServicosArea>
                  <Zoom>
                    <Column>
                      <PrecoAntigo>
                        <small>De R$</small><strong>29,90</strong><small>/mês</small>
                      </PrecoAntigo >
                      <Preco>
                        <small>R$</small><strong>19,90</strong><small>/mês</small>
                      </Preco>
                      <PrecoCondicao>
                        <small>*Oferta válida até 01/Agosto</small>
                      </PrecoCondicao >

                      <Descricao>Sistema completo The Shave</Descricao>
                      <Descricao>Aplicativo do Profissional</Descricao>
                      <Descricao>Controle da Agenda</Descricao>
                      <Descricao>Envio de Lembretes via Whatsapp</Descricao>
                      <Descricao>Gestão Financeira</Descricao>
                      <Descricao>Fluxo de Caixa</Descricao>
                      <Descricao>Controle de frequência do cliente</Descricao>                
                      <Descricao>Implantação grátis</Descricao>
                      <Descricao>Suporte via Whatsapp</Descricao>
                      <Descricao>Link WebApp para agendamento online</Descricao>
                      <BtnAction onClick={e=>this.sBottom(550)}>QUERO TESTAR POR 30 DIAS SEM CUSTO</BtnAction>
                      
                    </Column>
                  </Zoom>
                </ServicosArea>
                <ServicosArea>
              <Zoom>
                <Column>
                  <PrecoAntigo>
                    <small>.</small>
                  </PrecoAntigo >
                  <Preco>
                    <small>R$</small><strong>49,90</strong><small>/mês</small>
                  </Preco>
                  <PrecoCondicao>
                    <small>.</small>
                  </PrecoCondicao >

                  <Descricao>Sistema completo The Shave</Descricao>
                  <Descricao>Aplicativo do Profissional</Descricao>
                  <Descricao>Controle da Agenda</Descricao>
                  <Descricao>Envio de Lembretes via Whatsapp</Descricao>
                  <Descricao>Gestão Financeira</Descricao>
                  <Descricao>Fluxo de Caixa</Descricao>
                  <Descricao>Controle de frequência do cliente</Descricao>          
                  <Descricao>Implantação grátis</Descricao>
                  <Descricao>Suporte via Whatsapp</Descricao>
                  <Descricao>Link WebApp para agendamento online</Descricao>
                  <Descricao>Aplicativo Personalizado na Play Store e App Store</Descricao>
                  <BtnAction onClick={e=>this.sBottom(550)}>QUERO TESTAR POR 30 DIAS SEM CUSTO</BtnAction>                  
                </Column>
              </Zoom>
            </ServicosArea>
              </Slider>
            </ContainerMob>                    
        </CarouselProvider>
       <ModalLead
        visible={this.state.modalLeadVisible}
        handleModal={this.handleModal}
       />
      </PageContainer>
    )
  }
}

export default PrecoLp;