import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment';
import Modal from '../../components/ModalProfissional';
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
    PaginacaoArea,
    Paragrafo,
    Pg,
    Subtitulo,
    Topo,

} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {onlyNumbers, phone} from '../../services/formMask';


 
class Profissionais extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      profissionais:[],
      modalVisible:false,
      nome:'',
      email:'',
      celular:'',
      avatar:'',
      nivel:'',
      comissionado:'',
      cor:'',
      taxacomissao:'',
      profissional:''
    }    
    this.closeModal = this.closeModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleNome = this.handleNome.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCelular = this.handleCelular.bind(this);
    this.getProfissionais = this.getProfissionais.bind(this)
    this.getProInfo = this.getProInfo.bind(this);
    this.handleTxComissao = this.handleTxComissao.bind(this)
    this.handleComissionado = this.handleComissionado.bind(this)
  }

componentDidMount(){
  this.getProfissionais();
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

handleModal(){
  this.setState({modalVisible:!this.state.modalVisible})
}

handlePro(id){
  this.handleModal();
  this.getProInfo(id);
  this.setState({profissional:id})
}

handleNome(e){
  this.setState({nome:e})
}

handleEmail(e){
  this.setState({email:e})
}

handleCelular(e){
  this.setState({celular:e})
}

handleTxComissao(e){
  this.setState({taxacomissao:e})
}

handleComissionado(e){
  this.setState({comissionado:e})
}

closeModal(){
  this.handleModal();
}

getProfissionais(){
  osAPI.getProfessionals(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({profissionais:json.data})
  })
}

getProInfo(id){
  osAPI.getProInfo(Cookie.get('token'), id)
  .then(r=>r.json())
  .then(json=>{
    // this.setState({profissionais:json.data})
    this.setState({nome:json.data.name})
    this.setState({email:json.data.email})
    this.setState({celular:json.data.celular})
    this.setState({avatar:json.data.avatar})
    this.setState({nivel:json.data.nivel})
    this.setState({comissionado:json.data.comissionado})
    this.setState({cor:json.data.cor})
    this.setState({taxacomissao:json.data.taxacomissao})
  })
}


    render(){  
      console.log('offset '+this.state.offset)   
        return(    
          <Container>
            <Topo>
              <Subtitulo>Gestão dos Profissionais</Subtitulo>
            </Topo>
            <Corpo>
              <Opcoes>
                <Paragrafo>
                </Paragrafo>
                <BtnAction bgColor={'#63ADF2'} onClick={this.handleModalNovo}>+ Novo Cadastro</BtnAction>
              </Opcoes>
              {this.state.profissionais.map((i, index) => (
                <Item onClick={e=>this.handlePro(i.id)}>
                  <Avatar src={i.avatar != null ? i.avatar : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                  {i.name}
                </Item>
              ))}
              <PaginacaoArea>
              </PaginacaoArea>
              <Modal 
                visible={this.state.modalVisible}
                handleModal={this.handleModal}
                closeModal={this.closeModal}
                nome={this.state.nome}
                email={this.state.email}
                celular={this.state.celular}
                avatar={this.state.avatar}
                nivel={this.state.nivel}
                comissionado={this.state.comissionado}
                cor={this.state.cor}
                taxacomissao={this.state.taxacomissao}
                handleTxComissao={this.handleTxComissao}
                handleComissionado={this.handleComissionado}
                handleNome={this.handleNome}
                handleCelular={this.handleCelular}
                handleEmail={this.handleEmail}
                getProInfo={this.getProInfo}
                getProfissionais={this.getProfissionais}
                id={this.state.profissional}
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

export default Profissionais;