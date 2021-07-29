import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { 
    Area,
    ItemArea,
    ItemIcon,
    ItemText,
    ItemTitle,
    ItemDesc,
    Icon,
    PageContainer,
    Row,
    Title,
    Traco
} from './styled';

class Recursos extends Component {

  constructor(props){
    super(props);
    this.state={
        comentarios:[]
    }
  } 

  componentDidMount(){
  }

  render(){
    return(
      <> 
        <PageContainer>
          <Area>
            <Title>Recursos que Farão seu Salão Aumentar os Lucros</Title>
            <Traco />
            <Row>
              <ItemArea>
                <ItemIcon>
                  {/* <Icon src={'/check.svg'} /> */}
                </ItemIcon>
                <ItemText>
                  <ItemTitle>Agenda Inteligente</ItemTitle>
                  <ItemDesc>Lista de Espera, atualização automática dos horários, cancelamentos.</ItemDesc>
                </ItemText>
              </ItemArea>
              <ItemArea>
                <ItemIcon></ItemIcon>
                <ItemText>
                  <ItemTitle>Controle de Frequência</ItemTitle>
                  <ItemDesc>Exclusivo sistema para aumentar seu faturamento em até 30% somente com seus atuais clientes.</ItemDesc>
                </ItemText>
              </ItemArea>
            </Row>
            <Row>
              <ItemArea>
                <ItemIcon></ItemIcon>
                <ItemText>
                  <ItemTitle>Notificações Automáticas</ItemTitle>
                  <ItemDesc>Notificações e lembretes automáticos via Whatsapp.</ItemDesc>
                </ItemText>
              </ItemArea>
              <ItemArea>
                <ItemIcon></ItemIcon>
                <ItemText>
                  <ItemTitle>Programa de Fidelidade</ItemTitle>
                  <ItemDesc>Fidelize seus clientes com nosso recurso de programa de fidelidade.</ItemDesc>
                </ItemText>
              </ItemArea>
            </Row>
            <Row>
              <ItemArea>
                <ItemIcon></ItemIcon>
                <ItemText>
                  <ItemTitle>Aplicativo Personalizado</ItemTitle>
                  <ItemDesc>Aplicativo com o nome do seu estabelecimento, logomarca e cores, na PlayStore e AppStore.</ItemDesc>
                </ItemText>
              </ItemArea>
              <ItemArea>
                <ItemIcon></ItemIcon>
                <ItemText>
                  <ItemTitle>Link de Agendamento Exclusivo</ItemTitle>
                  <ItemDesc>Link personalizado para seus clientes verem os horários disponíveis e até realizar o auto agendamento. Com ele seu estabelecimento também pode ser encontrado no Google sempre que alguem estiver procurando pelos seus serviços.</ItemDesc>
                </ItemText>
              </ItemArea>
            </Row>
            <Row>
              <ItemArea>
                <ItemIcon></ItemIcon>
                <ItemText>
                  <ItemTitle>Gestão Financeira</ItemTitle>
                  <ItemDesc>Tenha o controle dos seus gastos e ganhos diariamente na palma da sua mão.</ItemDesc>
                </ItemText>
              </ItemArea>
              <ItemArea>
                <ItemIcon></ItemIcon>
                <ItemText>
                  <ItemTitle>Fluxo de Caixa</ItemTitle>
                  <ItemDesc>Tenha o registro de quanto faturou mês a mês, de forma prática e simples.</ItemDesc>
                </ItemText>
              </ItemArea>
            </Row>
          </Area>          
        </PageContainer>
      </>
    )
  }
}

export default Recursos;