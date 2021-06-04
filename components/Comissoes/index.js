import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment';
import Modal from '../../components/Modal';
import { 
    Avatar,
    AlertArea,
    AreaBotoes,
    BoxParagrafo,
    BoxCalendario,
    BtnAction,
    BotaoC,
    CalendarioArea,
    Calendario,
    Container,
    Corpo,
    Erro,
    Label,
    Paragrafo,
    ProfissionaisArea,
    ProfissionalBox,
    ResumoArea,
    Subtitulo,
    SubtituloCorpo,
    Tabela,
    Topo,

} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';


 
class Comissoes extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      comissoes:[],
      valortotal:0,
      comissaototal:0,
      comissaltotalpaga:0,
      datainicial:'',
      datafinal:'',
      modalVisible:false,
      profissionais:[],
      agendadia:[],
      profissionalNome:'',
      profissionalId:'',
      totalcomi:0,
      errorAlert:''
    }    
    this.getProfessionals = this.getProfessionals.bind(this);
    this.getParceiroComissoes = this.getParceiroComissoes.bind(this);
    this.handleProfessional = this.handleProfessional.bind(this)
    this.handleDataInicial = this.handleDataInicial.bind(this)
    this.handleDataFinal = this.handleDataFinal.bind(this)
    this.submit = this.submit.bind(this)
  }

componentDidMount(){
  this.getProfessionals();
}

check = (e) =>{
  // e.preventDefault();
  if(this.state.comissaototal > 0){
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Deseja contabilizar o pagamento no valor de R${this.state.comissaototal}?</h1>
            <p>Ao clicar em sim, o valor será contabilizado como pagamento de comissão. E a saída será registrada na data de hoje.</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.submit(e);
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
            <h1>Não há comissão a ser paga neste perído informado</h1>
            <p>Clique em cancelar e informe um novo período.</p>
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

getProfessionals(){
  osAPI.getProfessionals(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({profissionais:json.data})
  })
}

getParceiroComissoes(id, datainicial, datafinal){ // recebe o id do parceiro e busca todos os atendimentos realizados no dia em questao
  this.setState({profissionalId:id})
  if(id != ''){
    if(datainicial != ''){
      if(datafinal != ''){
        osAPI.getParceiroComissoes(Cookie.get('token'), id, datainicial, datafinal) //TOKEN, id do profissional, data inicial do filtro e data final do filtro
        .then(r=>r.json())
        .then(json=>{
          this.setState({comissoes:json.data})
          this.setState({valortotal:json.total.valortotal})
          this.setState({comissaototal:json.total.comissaototal})
          this.setState({comissaototalpaga:json.total.comissaototalpaga})
          this.setState({errorAlert:''})
        })
      }else{
        this.setState({errorAlert:'Não se esqueça de informar a data final.'})
      }
    }else{
      this.setState({errorAlert:'Não se esqueça de informar a data inicial.'})
    }
  }else{
    this.setState({errorAlert:'Não se esqueça de informar o parceiro.'})
  }
  
} 

handleDataInicial(e){
  this.setState({datainicial:e})
  this.getParceiroComissoes(this.state.profissionalId, e, this.state.datafinal);
}

handleDataFinal(e){
  this.setState({datafinal:e})
  this.getParceiroComissoes(this.state.profissionalId, this.state.datainicial, e);
}

handleProfessional(id, nome){
  this.setState({profissionalNome:nome})
  this.setState({profissionalId:id})
  this.getParceiroComissoes(id, this.state.datainicial, this.state.datafinal); 
}

submit(e){
  fetch(ecommerceAPI.BASE_URL_API+'agenda/pagarComissoes', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        parceiro:this.state.profissionalId,
        datainicial:this.state.datainicial,
        datafinal:this.state.datafinal
    })
  })
  .then(r=>r.json())
  .then(json=>{
    if(json.success){
      this.getParceiroComissoes(this.state.profissionalId, this.state.datainicial, this.state.datafinal)
    }
  })
}

    render(){     
      let totalcomissao = 0;
        return(    
          <Container>
            <Topo>
              <Subtitulo>Comissões Parceiros</Subtitulo>
            </Topo>
            <Corpo>
              <ProfissionaisArea>
                {this.state.profissionais.map((i, index) => (
                  <ProfissionalBox onClick={e=>this.handleProfessional(i.id, i.name)} destaque={i.id == this.state.profissionalId ? true : false}>
                    <Avatar src={i.avatar} />
                    {i.name}
                  </ProfissionalBox>
                ))}                
              </ProfissionaisArea>
              {this.state.profissionalNome == '' &&
                <SubtituloCorpo>Selecione um parceiro</SubtituloCorpo>
              }

              {this.state.profissionalNome != '' &&
                <SubtituloCorpo>{'Parceiro selecionado: '+this.state.profissionalNome}</SubtituloCorpo>
              }
              <SubtituloCorpo>Informe a data inicial e final</SubtituloCorpo>
              <CalendarioArea>
                <BoxCalendario>
                  <Label>Data Inicial</Label>
                  <Calendario type='date' onChange={e=>this.handleDataInicial(e.target.value)} />
                </BoxCalendario>
                <BoxCalendario>
                  <Label>Data Final</Label>
                  <Calendario type='date' onChange={e=>this.handleDataFinal(e.target.value)}/>
                </BoxCalendario>
                <Erro>{this.state.errorAlert}</Erro>
              </CalendarioArea>  
              <ResumoArea>
                <Paragrafo><strong>Resumo de Atendimentos - {moment(this.state.datainicial).format('DD/MM/YY')+' à '+moment(this.state.datafinal).format('DD/MM/YY')}</strong></Paragrafo>
                <Paragrafo>Profissional: <strong>{this.state.profissionalNome}</strong></Paragrafo>
                <BoxParagrafo>
                  <Paragrafo>Total em Serviços Realizados: <strong>R${this.state.valortotal}</strong></Paragrafo>
                  <Paragrafo>Comissão a ser paga ao Profissional: <strong>R${this.state.comissaototal != null ? this.state.comissaototal : 0}</strong></Paragrafo>
                  <Paragrafo>Valor de comissão pago: <strong>R${this.state.comissaototalpaga != null ? this.state.comissaototalpaga : 0}</strong></Paragrafo>
                </BoxParagrafo>
                <BoxParagrafo>
                  <BtnAction onClick={e=>this.check()}>
                    Dar retirada nas comissões à serem pagas
                  </BtnAction>
                </BoxParagrafo>
              </ResumoArea>            
              <Tabela>
                <thead>
                  <th>Id</th>
                  <th>Profissional</th>
                  <th>Cliente</th>
                  <th>Serviço</th>
                  <th>Data</th>
                  <th>Valor</th>
                  <th>Comissão</th>
                  <th>Forma Pag.</th>
                </thead>
                <tbody>
                  {this.state.comissoes.map((i, index) => (
                    <>
                      <tr key={index}>
                        <td>{i.id}</td>
                        <td>{i.profissional}</td>
                        <td>{i.name}</td>
                        <td>{i.nome}</td> {/* serviço */}
                        <td>{moment(i.data).format('DD/MM/YY')+' '+i.hora}</td>
                        <td>{'R$'+i.valor}</td>
                        <td>{'R$'+i.comissao}<small>{i.comissaopaga == 1 ? ' pago em '+moment(i.datapagamentocomissao).format('DD/MM') : ''}</small></td>
                        <td>{i.descricao}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </Tabela>
            </Corpo>
            
          </Container>
        )
    }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Comissoes;