import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment';
import {preco} from '../../services/formMask';
import Modal from '../../components/Modal';
import { 
    Avatar,
    AlertArea,
    AreaBotoes,
    BoxParagrafo,
    BoxCalendario,
    BoxLancamento,
    BoxLinha,
    BoxResultado,
    BoxRow,
    BotaoC,
    BtnAction,
    BoxOpcoes,
    Botao,
    BotaoTexto,
    CalendarioArea,
    Calendario,
    Container,
    Corpo,
    Erro,
    IconeBotao,
    Input,
    Label,
    Linha,
    Paragrafo,
    ParagrafoR,
    ParagrafoDestaque,
    ProfissionaisArea,
    ProfissionalBox,
    ResumoArea,
    ResultadoBox,
    Subtitulo,
    SubtituloCorpo,
    Tabela,
    TextArea,
    Topo,

} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';


 
class Financeiro extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      datainicial:moment().format('YYYY-MM-DD'),
      datafinal:moment().format('YYYY-MM-DD'),
      modalVisible:false,
      errorAlert:'',
      financialInfos:[],
      entrada:0,
      saida:0,
      valor:0,
      selectedSaida:'',
      observacao:'',
      total:0,
      detalhes:[]
    }    
    this.cleanStates = this.cleanStates.bind(this);
    this.getCalc = this.getCalc.bind(this);
    this.handleDataInicial = this.handleDataInicial.bind(this)
    this.handleDataFinal = this.handleDataFinal.bind(this)
    this.handleSaida = this.handleSaida.bind(this)
    this.handleLancar = this.handleLancar.bind(this)
    this.setObservacao = this.setObservacao.bind(this);
  }

componentDidMount(){
  this.getCalc(this.state.datainicial);
}

check = (e) =>{
  // e.preventDefault();
  if(this.state.valor > 0 && this.state.datainicial != ''){
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Confirmar lançamento de saída no valor de R${this.state.valor} para a data {moment(this.state.datainicial).format('DD/MM/YY')}?</h1>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.handleLancar(e);
                  onClose();
                }}
              >
                SIM!
              </BotaoC>
            </AreaBotoes>
          </AlertArea>
        );
      }
    });
  }else{
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>ATENÇÃO! PREENCHA TODAS AS INFORMAÇÕES!</h1>
            <AreaBotoes>
              <BotaoC onClick={onClose}>CANCELAR</BotaoC>
              <BotaoC
                onClick={() => {
                  // this.submit(e);
                  onClose();
                }}
              >
                Fechar!
              </BotaoC>
            </AreaBotoes>
          </AlertArea>
        );
      }
    });
  }
  
}

cleanStates(){
  this.setState({valor:0})
  this.setState({selectedSaida:''})
  this.setState({observacao:''})
}

getCalc(e){
  fetch(ecommerceAPI.BASE_URL_API+'lancamentos/calc', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        data:e
    })
  })
  .then(r=>r.json())
  .then(json=>{
    console.log(json);
    this.setState({entrada:json.data.entrada})
    this.setState({saida:json.data.saida})
    this.setState({total:json.total.total})
    this.setState({detalhes:json.detalhes})
  })
}

handleDataInicial(e){
  this.setState({datainicial:e})
  this.getCalc(e)
}

handleDataFinal(e){
  this.setState({datafinal:e})
  this.getParceiroComissoes(this.state.profissionalId, this.state.datainicial, e);
}

handleSaida(e){
  this.setState({selectedSaida:e})
}

handleLancar(){
  if(this.state.selectedSaida != ''){
    if(this.state.valor > 0){
      if(this.state.datainicial != ''){
        fetch(ecommerceAPI.BASE_URL_API+'lancamentos/add', {
          method:'POST',
          body:JSON.stringify({
              jwt:Cookie.get('token'),
              data:this.state.datainicial,
              lancamento:this.state.selectedSaida,
              valor:this.state.valor,
              obs:this.state.observacao
          })
        })
        .then(r=>r.json())
        .then(json=>{
          if(json.success){
            this.cleanStates();
            this.getCalc(this.state.datainicial)
          }
        })
      }else{
        alert('ATENÇÃO! INFORME UMA DATA VÁLIDA.');
      }
    }else{
      alert('ATENÇÃO! INFORME UM VALOR VÁLIDO.');
    }
  }else{
    alert('ATENÇÃO! SELECIONE UMA DAS OPÇÕES DE SAÍDA.');
  }
}

setObservacao(e){
  if(e.length <= 40){
    this.setState({observacao:e});
  }
}

    render(){     
      let totalcomissao = 0;
        return(    
          <Container>
            <Topo>
              <Subtitulo>Gestão Financeira</Subtitulo>
            </Topo>
            <Corpo>   
              <SubtituloCorpo>Informe a data</SubtituloCorpo>
              <CalendarioArea>
                <BoxCalendario>
                  <Label>Data</Label>
                  <Calendario type='date' value={this.state.datainicial} onChange={e=>this.handleDataInicial(e.target.value)} />
                </BoxCalendario>
                {/* <BoxCalendario> 
                  <Label>Data Final</Label>
                  <Calendario type='date' value={this.state.datafinal} onChange={e=>this.handleDataFinal(e.target.value)}/>
                </BoxCalendario> */}
                <Erro>{this.state.errorAlert}</Erro>
              </CalendarioArea>  
              <ResumoArea>
                <Paragrafo><strong>Data - {moment(this.state.datainicial).format('DD/MM/YY')+' à '+moment(this.state.datainicial).format('DD/MM/YY')}</strong></Paragrafo>
                <Linha />
                <BoxParagrafo>
                  <ParagrafoDestaque color={this.state.entrada - this.state.saida >= 0 ? '#57F2EB' : '#F27C7C'}>R${(this.state.entrada - this.state.saida).toFixed(2)}</ParagrafoDestaque>
                </BoxParagrafo>
                <BoxRow>
                  <BoxCalendario>
                    <Label>Entrada</Label>
                    <Paragrafo>R${this.state.entrada >= 0 ? this.state.entrada : 0.00}</Paragrafo>
                  </BoxCalendario>
                  <BoxCalendario>
                    <Label>Saída</Label>
                    <Paragrafo>R${this.state.saida >= 0 ? this.state.saida : 0.00}</Paragrafo>
                  </BoxCalendario>
                </BoxRow>
              </ResumoArea> 
              <BoxLinha>
                <BoxLancamento>
                  <Label>Lançar uma saída</Label>
                  <BoxOpcoes>
                    <Input type='text' value={this.state.valor} onChange={e=>this.setState({valor:preco(e.target.value)})} />
                    {/* <BtnAction onClick={this.handleLancar}>Lançar</BtnAction> */}
                  </BoxOpcoes>
                  <BoxOpcoes>
                    <Botao onClick={e=>this.handleSaida(7)} destaque={this.state.selectedSaida == 7 ? true : false}>
                      <IconeBotao src='/banco.png' />
                      <BotaoTexto>Transferência Bancária</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.handleSaida(8)} destaque={this.state.selectedSaida == 8 ? true : false}>
                      <IconeBotao src='/fornecedores.png' />
                      <BotaoTexto>Fornecedores</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.handleSaida(9)} destaque={this.state.selectedSaida == 9 ? true : false}>
                      <IconeBotao src='/despesas.png' />
                      <BotaoTexto>Despesas</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.handleSaida(10)} destaque={this.state.selectedSaida == 10 ? true : false}>
                      <IconeBotao src='/funcionarios.png' />
                      <BotaoTexto>Funcionário</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.handleSaida(11)} destaque={this.state.selectedSaida == 11 ? true : false}>
                      <IconeBotao src='/saque.png' />
                      <BotaoTexto>Saque</BotaoTexto>
                    </Botao>
                  </BoxOpcoes> 
                  <BoxCalendario>
                    <Label>{40 - parseInt(this.state.observacao.length)+' caracteres restantes'}</Label>
                    <TextArea value={this.state.observacao} onChange={e=>this.setObservacao(e.target.value)} placeholder={'Anotação'}/>
                    <BtnAction onClick={this.check}>Lançar</BtnAction>
                  </BoxCalendario> 
                </BoxLancamento> 
                <BoxResultado>
                  <Label>Lançamentos Realizados</Label>
                  <ResultadoBox>
                    <ParagrafoR>Total Lançamentos: {this.state.total}</ParagrafoR>
                  </ResultadoBox>
                  <Tabela>
                    <thead>
                      <th>Tipo</th>
                      <th>Valor</th>
                      <th>Serviço</th>
                      <th>Produto</th>
                      <th>Forma</th>
                      <th>Obs.</th>
                    </thead>
                    <tbody>
                      {this.state.detalhes.map((i, index) => (
                        <>
                          <tr key={index}>
                            <td>{i.tipolancamento == 1 ? 'Entrada' : 'Saída'}</td>
                            <td>{'R$'+i.valor}</td>
                            <td>{i.servico != null ? i.servico : '-'}</td>
                            <td>{i.produto != null ? i.produto : '-'}</td>
                            <td>{i.formapg}</td>
                            <td>{i.obs}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </Tabela>
                </BoxResultado>   
              </BoxLinha>     
              
            </Corpo>
            
          </Container>
        )
    }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Financeiro;