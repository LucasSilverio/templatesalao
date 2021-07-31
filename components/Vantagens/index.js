import React, { Component } from 'react';
import Link from 'next/link';
import { BtnAction, BoxItem, Column, Container, Descricao, Img, Item, Icone, ItemDesc, ItemTop, ItemColumnIcon, ItemColumnDesc, PageContainer, ServicosArea, Title, Traco  } from './styled';
import Cookie from 'js-cookie';
import Zoom from 'react-reveal/Zoom';

class Vantagens extends Component {

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
          <Title>Diferenciais que a TheShave oferece</Title>
          <Traco />          
          <ServicosArea>
            <Zoom>
              <Column>
                <Item>Suporte Dedicado</Item>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#57F2EB'>The Shave</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/positive.svg' />                      
                    </ItemColumnIcon>
                    <ItemColumnDesc>Na The Shave, atendemos nossos clientes de forma rápida, através de e-mail, chat e Whatsapp sempre que precisar.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#F25757'>Outras empresas</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/negative.svg' />
                    </ItemColumnIcon>
                    <ItemColumnDesc>Algumas empresas oferecem suporte apenas via e-mail, com elevado tempo de espera.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
            </Zoom>
          </ServicosArea>
          <ServicosArea>
            <Zoom>
              <Column>
                <Item>Auto Agendamento</Item>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#57F2EB'>The Shave</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/positive.svg' />                      
                    </ItemColumnIcon>
                    <ItemColumnDesc>Ao contratar um de nossos planos, você receberá um link exclusivo para seus clientes realizarem agendamento de forma independente.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#F25757'>Outras empresas</ItemTop> 
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/negative.svg' />
                    </ItemColumnIcon>
                    <ItemColumnDesc>Algumas empresas podem não oferecer este serviço, ou geralmente oferecem opções compartilhadas com outros salões de beleza.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
            </Zoom>
          </ServicosArea>
          <ServicosArea>
            <Zoom>
              <Column>
                <Item>Controle Financeiro</Item>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#57F2EB'>The Shave</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/positive.svg' />                      
                    </ItemColumnIcon>
                    <ItemColumnDesc>Com nosso sistema e aplicativo, você consegue saber exatamente quanto está lucrando, de forma simples e prática.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#F25757'>Outras empresas</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/negative.svg' />
                    </ItemColumnIcon>
                    <ItemColumnDesc>Algumas empresas podem não oferecer este serviço.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
            </Zoom>
          </ServicosArea>
          <ServicosArea>
            <Zoom>
              <Column>
                <Item>Processo Simplificado</Item>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#57F2EB'>The Shave</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/positive.svg' />                      
                    </ItemColumnIcon>
                    <ItemColumnDesc>Sabemos que o dia a dia de um salão é super corrido, por isso focamos no em simplificar toda parte burocrática do negócio para que você se preocupe em fazer apenas o que mais gosta, atender seus clientes.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#F25757'>Outras empresas</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/negative.svg' />
                    </ItemColumnIcon>
                    <ItemColumnDesc>Algumas empresas podem ter processos complexos, que demandam dias de treinamento e configuração.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
            </Zoom>
          </ServicosArea>
          
          <ServicosArea>
            <Zoom>
              <Column>
                <Item>Tempo de Mercado</Item>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#57F2EB'>The Shave</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/positive.svg' />                      
                    </ItemColumnIcon>
                    <ItemColumnDesc>Nossa equipe atua a quase 10 anos com desenvolvimento de aplicações de alta performance.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
              <Column>
                <ItemDesc>
                  <ItemTop color='#F25757'>Outras empresas</ItemTop>
                  <BoxItem>
                    <ItemColumnIcon>
                      <Icone src='/negative.svg' />
                    </ItemColumnIcon>
                    <ItemColumnDesc>Algumas empresas podem ter pouca experiência com desenvolvimento, além de não atuarem com sistemas focados em alta performance.</ItemColumnDesc>
                  </BoxItem>
                </ItemDesc>
              </Column>
            </Zoom>
          </ServicosArea>
          
        </Container>
      </PageContainer>
    )
  }
}

export default Vantagens;