import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment';
import Modal from '../../components/ModalCliente';
import ModalNovo from '../../components/ModalNovoCliente';
import { 
    AlertArea,
    AreaBotoes,
    Avatar,
    BtnAction,
    BotaoC,
    Container,
    Corpo,
    Item,
    IptBusca,
    Opcoes,
    OpcoesMob,
    PaginacaoArea,
    Paragrafo,
    Pg,
    Subtitulo,
    Topo,

} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {onlyNumbers, phone} from '../../services/formMask';


 
class Clientes extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      clientes:[],
      clientInfo:[],
      historico:[],
      errorAlert:'',
      offset:0,
      limit:20,
      totalClientes:0,
      modalVisible:false,
      modalNovoVisible:false,
      nomecliente:'',
      emailcliente:'',
      celularcliente:'',
      nascimentocliente:'',
      nomeCliente:''
    }    
    this.closeModal = this.closeModal.bind(this);
    this.filtrarCliente = this.filtrarCliente.bind(this);
    this.getClientes = this.getClientes.bind(this);
    this.getClientInfo = this.getClientInfo.bind(this);
    this.getClientHistory = this.getClientHistory.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleModalNovo = this.handleModalNovo.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCelular = this.handleCelular.bind(this);
    this.handleNascimento = this.handleNascimento.bind(this);    
  }

componentDidMount(){
  this.getClientes(this.state.offset, 1);
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

filtrarCliente(e){
  this.setState({nomeCliente:e})
  if(e.length > 2){
    fetch(ecommerceAPI.BASE_URL_API+'users/findClient', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          nome:e
      })
    })
    .then(r=>r.json())
    .then(json=>{
      this.setState({clientes:json.data})
    })
  }else{
    // this.setState({resultado:[]})
    this.getClientes();
  }
}

getClientes(offset, action){
  let total = 0;
  osAPI.getClientes(Cookie.get('token'), offset, this.state.limit)
  .then(r=>r.json())
  .then(json=>{
    this.setState({clientes:json.data})
    this.setState({totalClientes:json.total})
    total = json.total;
  })
  
  if(action == 1){
    this.setState({offset:this.state.offset+this.state.limit})
  }else if(action == 0){
    this.setState({offset:offset})
  }else if(action == -1){
    this.setState({offset:this.state.offset-this.state.limit})
  }
}

getClientInfo(id){
  osAPI.getClienteInfo(Cookie.get('token'), id)
  .then(r=>r.json())
  .then(json=>{
    this.setState({clientInfo:json.data})
    this.setState({nomecliente:json.data.name})
    this.setState({emailcliente:json.data.email})
    this.setState({celularcliente:json.data.celular})    
    this.setState({nascimentocliente:json.data.nascimento})
  })
}

getClientHistory(id){
  osAPI.getHistorico(Cookie.get('token'), id)
  .then(r=>r.json())
  .then(json=>{
    this.setState({historico:json.data})
  })
}

handlePage(offset, action){
  if(offset >= 0 && offset <= this.state.totalClientes && this.state.totalClientes > this.state.limit){
    this.getClientes(offset, action);
  }
}

handleClient(id){
  this.handleModal();
  this.getClientInfo(id)
  this.getClientHistory(id)
}

handleModal(){
  this.setState({modalVisible:!this.state.modalVisible})
}

handleModalNovo(){
  this.setState({modalNovoVisible:!this.state.modalNovoVisible})
}

handleName(e){
  this.setState({nomecliente:e});
}

handleEmail(e){
  this.setState({emailcliente:e});
}

handleCelular(e){
  this.setState({celularcliente:onlyNumbers(e)});
}

handleNascimento(e){
  this.setState({nascimentocliente:e});
}

closeModal(){
  this.handleModal();
}


    render(){     
        return(    
          <Container>
            <Topo>
              <Subtitulo>Gestão dos Clientes</Subtitulo>
            </Topo>
            <Corpo>
              <Opcoes>
                <Paragrafo> 
                  {this.state.totalClientes+' clientes cadastrados.'}
                </Paragrafo>
                <BtnAction bgColor={'#5C6BF2'} onClick={this.handleModalNovo}>+ Novo Cadastro</BtnAction>
                <IptBusca type='text' value={this.state.nomeCliente} onChange={e=>this.filtrarCliente(e.target.value)} placeholder={'Buscar cliente por nome'}/>
              </Opcoes> 
              <OpcoesMob>
                <Paragrafo> 
                  {this.state.totalClientes+' clientes cadastrados.'}
                </Paragrafo>
                <BtnAction bgColor={'#5C6BF2'} onClick={this.handleModalNovo}>+ Novo Cadastro</BtnAction>
              </OpcoesMob>
              <OpcoesMob>
                <IptBusca type='text' value={this.state.nomeCliente} onChange={e=>this.filtrarCliente(e.target.value)} placeholder={'Buscar cliente por nome'}/>
              </OpcoesMob>
              {this.state.clientes.map((i, index) => (
                <Item onClick={e=>this.handleClient(i.id)}>
                  <Avatar src={i.avatar != null ? i.avatar : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                  {i.name}
                </Item>
              ))}
              <PaginacaoArea>
                <Pg onClick={e=>this.handlePage(Math.ceil(this.state.offset / this.state.limit)-1, -1)}>Anterior</Pg>
                <Pg>{Math.ceil(this.state.offset / this.state.limit)}</Pg>
                <Pg onClick={e=>this.handlePage(Math.ceil(this.state.offset / this.state.limit)+1, 1)}>Próximo</Pg>
              </PaginacaoArea>
              <Modal 
                visible={this.state.modalVisible}
                handleModal={this.handleModal}
                closeModal={this.closeModal}
                infos={this.state.clientInfo}
                getClientInfo={this.getClientInfo}
                handleNome={this.handleName}
                handleEmail={this.handleEmail}
                handleCelular={this.handleCelular}
                handleNascimento={this.handleNascimento}
                nomecliente={this.state.nomecliente}
                emailcliente={this.state.emailcliente}
                celularcliente={this.state.celularcliente}
                nascimentocliente={this.state.nascimentocliente}
                historico={this.state.historico}
              />
              <ModalNovo 
                visible={this.state.modalNovoVisible}
                handleModal={this.handleModalNovo}
                getClientes={this.getClientes}
              />
            </Corpo>
            
          </Container>
        )
    }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Clientes;