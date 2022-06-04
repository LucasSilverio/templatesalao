import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css 
import moment from 'moment';
import Modal from '../../components/ModalServicoEditar';
import ModalNovo from '../../components/ModalServicoNovo';
import { 
    AlertArea,
    AreaBotoes,
    Avatar,
    BtnAction,
    BotaoC,
    Box,
    BoxTop,
    BoxInput,
    BoxRow,
    BoxHorarios,
    Container,
    Corpo,
    Dia,
    Item,
    ItemDia,
    Input,
    Horario,
    Label,
    Opcoes,
    PaginacaoArea,
    Paragrafo,
    Pg,
    Subtitulo,
    Topo,

} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {onlyNumbers, horario, preco} from '../../services/formMask';


 
class Servicos extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      errorAlert:'',
      modalEditVisible:false,
      modalNovoVisible:false,
      profissionais:[],
      servicos:[],
      profissional:'',
      servico:'',
      nome:'',
      descricao:'',
      preco:'',
      tempo:'',
      img:'',
      pontosServico:'',
      pontosTroca:'',
      desativado:'',
      loading:false
    }    
    this.cleanStates = this.cleanStates.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalNovo = this.closeModalNovo.bind(this);
    this.getProfessionals = this.getProfessionals.bind(this);
    this.getServicos = this.getServicos.bind(this);
    this.handleModal = this.handleModal.bind(this);  
    this.handleModalNovo = this.handleModalNovo.bind(this);
    this.handleEdit = this.handleEdit.bind(this)
    this.handleNome = this.handleNome.bind(this)
    this.handleDescricao = this.handleDescricao.bind(this);
    this.handlePreco = this.handlePreco.bind(this);
    this.handleTempo = this.handleTempo.bind(this);
    this.handlePontosServico = this.handlePontosServico.bind(this);
    this.handlePontosTroca = this.handlePontosTroca.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.submit = this.submit.bind(this);
    this.submitEdition = this.submitEdition.bind(this)
  }

componentDidMount(){
  this.getProfessionals();
  this.getServicos();
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

cleanStates(){
  this.setState({servico:''})
  this.setState({nome:''})
  this.setState({descricao:''})
  this.setState({preco:''})
  this.setState({tempo:''});
  this.setState({img:''});
  this.setState({pontosServico:''});
  this.setState({pontosTroca:''});
  this.setState({desativado:''});
}

handleModal(){
  this.setState({modalEditVisible:!this.state.modalEditVisible})
}

handleModalNovo(){
  this.setState({modalNovoVisible:!this.state.modalNovoVisible})
}

handleProfissional(id){
  this.setState({profissional:id})
}

handleEdit(id, nome, descricao, preco, tempo, img, pontosservicos, pontostroca, desativado){
  this.setState({servico:id})
  this.setState({nome:nome})
  this.setState({descricao:descricao})
  this.setState({preco:preco})
  this.setState({tempo:tempo});
  this.setState({img:img});
  this.setState({pontosServico:pontosservicos});
  this.setState({pontosTroca:pontostroca});
  this.setState({desativado:desativado});


  this.handleModal();
}

handleNome(e){
  this.setState({nome:e});
}

handleDescricao(e){
  this.setState({descricao:e});
}

handlePreco(e){
  this.setState({preco:preco(e)})
}

handleTempo(e){
  this.setState({tempo:horario(e)})
}

handlePontosServico(e){
  this.setState({pontosServico:onlyNumbers(e)})
}

handlePontosTroca(e){
  this.setState({pontosTroca:onlyNumbers(e)})
}

handleStatus(e){
  this.setState({desativado:e})
}

submitEdition(){
  if(this.state.nome != '' && this.state.descricao != '' && this.state.preco != '' && this.state.tempo != ''){
    this.setState({loading:true});
    fetch(ecommerceAPI.BASE_URL_API+'services/updateService', {
      method:'POST',
      body:JSON.stringify({
          jwt: Cookie.get('token'),
          nome:this.state.nome,
          preco:this.state.preco,
          tempo:this.state.tempo,
          descricao:this.state.descricao,
          servico:this.state.servico,
          status:this.state.desativado,
          img:this.state.img
      })
    })
    .then(r=>r.json())
    .then(json=>{
      this.setState({loading:false});
      this.handleModal();
      this.getServicos();
    })
  }
}

getProfessionals(){
  osAPI.getProfessionals(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({profissionais:json.data})
  })
}

getServicos(){
  osAPI.getServicos(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({servicos:json.data})
  })
}

closeModal(){
  this.handleModal();
  this.cleanStates();
  this.getServicos();
}

closeModalNovo(){
  this.handleModalNovo();
}

submit(){
  fetch(ecommerceAPI.BASE_URL_API+'atendimento/addHoraPainel', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        profissional:this.state.profissional,
        dia:this.state.selectedDay,
        abertura:this.state.abertura,
        intervalo:this.state.intervalo,
        fimintervalo:this.state.fimIntervalo,
        encerramento:this.state.encerramento

    })
  })
  .then(r=>r.json())
  .then(json=>{
    if(json.success){
      this.getAtendimentos(this.state.selectedDay, this.state.profissional)
    }
  })
}


    render(){   
        return(    
          <Container>
            <Topo>
              <Subtitulo>Configuração dos Serviços Oferecidos</Subtitulo>
            </Topo>
            <Corpo>
              <Opcoes>
                <BtnAction bgColor={'#5C6BF2'} onClick={this.handleModalNovo}>Cadastrar Serviço</BtnAction>
              </Opcoes>
              <Box>
                <ItemDia>
                  {this.state.servicos.map((i, index) => (
                    <Item key={index} onClick={e=>this.handleEdit(i.id, i.nome, i.descricao, i.preco, i.tempo, i.img, i.pontosservicos, i.pontostroca, i.desativado)} status={i.desativado}>
                      <Avatar src={i.img} />
                      {i.nome}
                    </Item>
                  ))}
                </ItemDia>
              </Box>
            </Corpo>
            <Modal 
              visible={this.state.modalEditVisible}
              handleModal={this.handleModal}
              closeModal={this.closeModal}
              handleNome={this.handleNome}
              handleDescricao={this.handleDescricao}
              handlePreco={this.handlePreco}
              handleTempo={this.handleTempo}
              handlePontosServico={this.handlePontosServico}
              handlePontosTroca={this.handlePontosTroca}
              handleStatus={this.handleStatus}
              submitEdition={this.submitEdition}
              servico={this.state.servico}
              nome={this.state.nome}
              descricao={this.state.descricao}
              preco={this.state.preco}
              tempo={this.state.tempo}
              img={this.state.img}
              pontosservico={this.state.pontosServico}
              pontostroca={this.state.pontosTroca}
              desativado={this.state.desativado}
              loading={this.state.loading}
            />
            <ModalNovo 
              visible={this.state.modalNovoVisible}
              handleModal={this.handleModalNovo}
              closeModal={this.closeModalNovo}
              getServicos={this.getServicos}
            />
            
          </Container>
        )
    }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Servicos;