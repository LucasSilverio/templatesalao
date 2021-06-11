import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment'; 
import Loader from 'react-loader-spinner';
import Cookie from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {phone} from '../../services/formMask'
import { 
    AlertArea,
    AreaBotoes,
    Avatar,
    BackArea,
    BotaoC,
    Box,
    BoxTop,
    BoxEdit,
    BoxLinha,
    BoxColuna,
    BoxOpcoes,
    BtnAction,
    Container,
    Icone,
    Input,
    Item,
    Label,
    Opcoes,
    Paragrafo,
    ParagrafoSm,
    Top,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class ModalNovoCliente extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      editavel:false,
      nome:'',
      email:'',
      celular:'',
      datanascimento:''
    } 
    this.cleanStates = this.cleanStates.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount(){
  }

  check = (e) =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Deseja Concluir o Serviço?</h1>
            <p>Ao clicar em sim, o valor será contabilizado no caixa.</p>
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
  }

  cleanStates(){
    this.setState({nome:''})
    this.setState({email:''})
    this.setState({celular:''})
    this.setState({datanascimento:''})
  }

  close(){
    this.cleanStates();
    this.props.handleModal();
  }

  submit(){
    fetch(ecommerceAPI.BASE_URL_API+'users/newuserpro', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          nome:this.state.nome,
          email:this.state.email,
          telefone:this.state.celular,
          datanascimento:this.state.datanascimento
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.cleanStates();
        this.props.handleModal();
        this.props.getClientes(0, 0);
      }
    })
  }
  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
          <Container visible={this.props.visible}>
            <BoxEdit>
              {/* <Avatar src={this.props.infos.avatar != null ? this.props.infos.avatar : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} /> */}
              <Paragrafo>Cadastrar novo cliente</Paragrafo>
              <BoxTop>
                <Label>Nome</Label>
                <Input type='text' value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})}/>
                <BoxLinha>
                  <BoxColuna>
                    <Label>E-mail</Label>
                    <Input type='text' value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>                    
                  </BoxColuna>
                  <BoxColuna>
                    <Label>Celular</Label>
                    <Input type='text' value={this.state.celular} onChange={e=>this.setState({celular:phone(e.target.value)})}/>
                  </BoxColuna>
                </BoxLinha>
                <BoxLinha>
                  <BoxColuna>
                    <Label>Data de Nascimento</Label>
                    <Input type='date' value={this.state.datanascimento} onChange={e=>this.setState({datanascimento:e.target.value})}/>
                  </BoxColuna>
                </BoxLinha>
              </BoxTop>
              <BoxOpcoes>
                <BtnAction onClick={this.close} bgColor={'#6E3534'}>Cancelar</BtnAction>
                <BtnAction bgColor={'#63ADF2'} onClick={e=>this.submit()}>Salvar</BtnAction>
              </BoxOpcoes>
            </BoxEdit>
          </Container>
        </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default ModalNovoCliente;