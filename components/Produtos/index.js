import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment';
import Modal from '../../components/ModalProduto';
import ModalNovo from '../../components/ModalNovoProduto';
import { 
    AlertArea,
    AreaBotoes,
    Avatar,
    BtnAction,
    BotaoC,
    BoxColumn,
    Container,
    Corpo,
    Item,
    IptBusca,
    Opcoes,
    PaginacaoArea,
    Paragrafo,
    ParagrafoSm,
    Pg,
    Subtitulo,
    Topo,

} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {onlyNumbers, phone, preco} from '../../services/formMask';


 
class Produtos extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      produtos:[],
      clientInfo:[],
      historico:[],
      errorAlert:'',
      offset:0,
      limit:20,
      totalClientes:0,
      modalVisible:false,
      modalNovoVisible:false,
      nome:'',
      produto:'',
      categoria:'',
      estoque:'',
      valor:'',
      img:''
    }    
    this.closeModal = this.closeModal.bind(this);
    this.filtrarCliente = this.filtrarCliente.bind(this);
    this.getProdutos = this.getProdutos.bind(this);
    this.getProdutoInfo = this.getProdutoInfo.bind(this);
    this.getClientHistory = this.getClientHistory.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleModalNovo = this.handleModalNovo.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleValor = this.handleValor.bind(this);
    this.handleCelular = this.handleCelular.bind(this);
    this.handleNascimento = this.handleNascimento.bind(this);    
  }

componentDidMount(){
  this.getProdutos(this.state.offset, 1);
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

getProdutos(offset, action){
  let total = 0;
  osAPI.getProdutos(Cookie.get('token'), offset, this.state.limit)
  .then(r=>r.json())
  .then(json=>{
    this.setState({produtos:json.data})
    // this.setState({totalClientes:json.total})
    // total = json.total;
  })
  
  if(action == 1){
    this.setState({offset:this.state.offset+this.state.limit})
  }else if(action == 0){
    this.setState({offset:offset})
  }else if(action == -1){
    this.setState({offset:this.state.offset-this.state.limit})
  }
}

getProdutoInfo(id){
  osAPI.getProdutoInfo(Cookie.get('token'), id)
  .then(r=>r.json())
  .then(json=>{
    this.setState({nome:json.data.nome})
    this.setState({categoria:json.data.idcategoria})
    this.setState({estoque:json.data.estoque})
    this.setState({img:json.data.img})
    this.setState({valor:json.data.valor})
    this.setState({produto:id})
    // this.setState({clientInfo:json.data})
    // this.setState({nomecliente:json.data.name})
    // this.setState({emailcliente:json.data.email})
    // this.setState({celularcliente:json.data.celular})    
    // this.setState({nascimentocliente:json.data.nascimento})
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

handleProduto(id){
  this.handleModal();
  this.getProdutoInfo(id)
  // this.getClientHistory(id)
}

handleModal(){
  this.setState({modalVisible:!this.state.modalVisible})
}

handleModalNovo(){
  this.setState({modalNovoVisible:!this.state.modalNovoVisible})
}

handleName(e){
  this.setState({nome:e});
}

handleValor(e){
  this.setState({valor:preco(e)});
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
              <Subtitulo>Gestão de Estoque de Produtos</Subtitulo>
            </Topo>
            <Corpo>
              <Opcoes>
                <Paragrafo>
                  {/* {this.state.totalClientes+' clientes cadastrados.'} */}
                </Paragrafo>
                <BtnAction bgColor={'#63ADF2'} onClick={this.handleModalNovo}>+ Novo Cadastro</BtnAction>
                <IptBusca type='text' value={this.state.nomeCliente} onChange={e=>this.filtrarCliente(e.target.value)} placeholder={'Buscar cliente por nome'}/>
              </Opcoes>
              {this.state.produtos.map((i, index) => (
                <Item onClick={e=>this.handleProduto(i.id)}>
                  <Avatar src={i.img != null ? i.img : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                  <BoxColumn>
                    <ParagrafoSm>{i.nome}</ParagrafoSm>
                    <ParagrafoSm><small>{'Estoque atual: '+i.estoque}</small></ParagrafoSm>
                  </BoxColumn>
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
                nome={this.state.nome}
                categoria={this.state.categoria}
                estoque={this.state.estoque}
                img={this.state.img}
                valor={this.state.valor}
                id={this.state.produto}
                handleNome={this.handleName}
                handleValor={this.handleValor}
                getProdutos={this.getProdutos}
                getProdutoInfo={this.getProdutoInfo}
              />
              <ModalNovo
                visible={this.state.modalNovoVisible}
                handleModal={this.handleModalNovo}
                closeModal={this.closeModalNovo}
                getProdutos={this.getProdutos}
              
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

export default Produtos;