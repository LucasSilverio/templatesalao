import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment'; 
import Loader from 'react-loader-spinner';
import Cookie from 'js-cookie';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Switch from "react-switch";
import { 
    AlertArea,
    AreaBotoes,
    BackArea,
    BotaoC,
    Container,
    ResumoArea,
    BottomArea,
    BtnAction,
    Login,
    Input,
    Label,
    LoaderArea,
    Titulo,
    TipoLogin,
    SubTitulo,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {onlyNumbers, phone} from '../../services/formMask';

class ModalIdentificacao extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      editavel:false,
      alert:'',
      alertaLogin:'',
      nome:'',
      email:'',
      celular:'',
      pass:'',
      formSend:false,
      profissional:'',
      dataEscolhida:'',
      diaSemana:'',
      horarioSelecionado:'',
      horarios:[],
      loginVisible:true,
      signUpVisible:false,
      confirmCodeVisible:false,
      resetSenha:false,
      resetSenhaOk:false,
      sucessoVisible:false,
      codigo:'',
      checked:true,
    } 
    this.handleEdit = this.handleEdit.bind(this);
    this.listarHorarios = this.listarHorarios.bind(this)
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.handleHorario = this.handleHorario.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleCriarConta = this.handleCriarConta.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleConfirmCode = this.handleConfirmCode.bind(this)
    this.sendCode = this.sendCode.bind(this)
    this.handleSenha = this.handleSenha.bind(this)
    this.recuperarSenha = this.recuperarSenha.bind(this)
    this.confirmReset = this.confirmReset.bind(this)
    this.doLogin = this.doLogin.bind(this)
    this.resetSenhaBack = this.resetSenhaBack.bind(this)
    this.resend = this.resend.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.salvarDados = this.salvarDados.bind(this);
  }

  componentDidMount(){
  }

  alerta = (e) =>{
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>{e}</h1>
            <AreaBotoes>
              <BotaoC onClick={onClose}>OK</BotaoC>
            </AreaBotoes>
          </AlertArea>
        );
      }
    });
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

  listarHorarios(data, diasemana, profissional){
    
    osAPI.getHorariosSite(data, profissional, this.props.idservico, this.props.temposervico, diasemana, this.props.slug)
    .then(r=>r.json())
    .then(json=>{
      console.log(json)
      this.setState({horarios:json.data})
    })
  }

  handleEdit(){
    this.setState({editavel:!this.state.editavel})
  }

  handleCelular(e){
    this.setState({celular:phone(e)});
  }

  handleHorario(e){
    this.setState({horarioSelecionado:e})
  }

  handleCodigo(e){
    if(e.length < 5){
      this.setState({codigo:onlyNumbers(e)})
    }
  }

  handleSignUp(){
    this.setState({loginVisible:false})
    this.setState({signUpVisible:true})
    this.setState({confirmCodeVisible:false})
  }

  handleLogin(){
    this.setState({loginVisible:true})
    this.setState({signUpVisible:false})
    this.setState({confirmCodeVisible:false})
    this.setState({resetSenha:false})
    this.setState({resetSenhaOk:false})
    this.setState({sucessoVisible:false})
  }

  handleConfirmCode(){
    this.setState({loginVisible:false})
    this.setState({signUpVisible:false})
    this.setState({confirmCodeVisible:true})
  }

  handleProfissional(id){
    this.setState({profissional:id})
    this.listarHorarios(this.state.dataEscolhida, this.state.diaSemana, id);
  }

  handleCriarConta(){
    this.setState({loading:true})
    if(this.state.email != '' && this.state.nome != '' && this.state.celular != '' && this.state.senha != ''){
      fetch(ecommerceAPI.BASE_URL_API+'users/newUser', {
        method:'POST',
        body:JSON.stringify({
            nome:this.state.nome,
            email:this.state.email,
            senha:this.state.pass,
            celular:this.state.celular,
            slug:this.props.slug
        })
      })
      .then(r=>r.json())
      .then(json=>{
        if(json.success){
          Cookie.set('token', json.jwt, {expires:0.05});
          this.handleConfirmCode();
          this.setState({loading:false})
        }else{
          this.setState({alert:json.alert});
        }
        this.setState({loading:false})
      })
    }else{
      
      this.alerta("Os campos com (*) são de preenchimento obrigatório!");
      this.setState({loading:false})
    }
  }

  handleSenha(){
    this.setState({loginVisible:false})
    this.setState({resetSenha:!this.state.resetSenha})
  }

  resetSenhaBack(){
    this.setState({loginVisible:true})
    this.setState({resetSenha:false});
  }

  sendCode(){
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/confirmV2', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          codigo:this.state.codigo
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        Cookie.set('token', json.jwt, {expires:700});
        this.alerta("Cadastro confirmado com sucesso!");
        this.props.handleModal();
      }
    })
  }

  recuperarSenha(){
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/recoverSite', {
      method:'POST',
      body:JSON.stringify({
          celular:this.state.celular,
          slug:this.props.slug
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.setState({resetSenha:false})
        this.setState({resetSenhaOk:true})
        this.setState({loading:false})
      }
      this.setState({loading:false})
    })
  }

  resend(){
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/recoverSite', {
      method:'POST',
      body:JSON.stringify({
          celular:this.state.celular,
          slug:this.props.slug
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.setState({loading:false})
      }
      this.setState({loading:false})
    })
  }

  confirmReset(){
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/confirmReset', {
      method:'POST',
      body:JSON.stringify({
          telefone:this.state.celular,
          codigo:this.state.codigo,
          senha:this.state.senha,
          slug:this.props.slug
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.setState({resetSenha:false})
        this.setState({resetSenhaOk:false})
        this.setState({sucessoVisible:true})
        this.setState({codigo:''})
        this.setState({celular:''})
        this.setState({loading:false})
      }
      this.setState({loading:false})
    })
  }

  doLogin(){
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/loginSite', {
      method:'POST',
      body:JSON.stringify({
          email:this.state.email,
          pass:this.state.pass,
          slug:this.props.slug,
          celular:this.state.celular
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.setState({resetSenha:false})
        this.setState({resetSenhaOk:false})
        this.setState({sucessoVisible:false})
        // this.setState({loginVisible:false})
        this.setState({signUpVisible:false})
        this.setState({confirmCodeVisible:false})
        this.setState({email:''})
        this.setState({celular:''})
        this.setState({pass:''})
        this.props.handleModal();
        this.alerta("Bem vindo. Login efetuado com suceso!");
        Cookie.set('token', json.jwt, {expires:700})
      }else{
        this.alerta(json.error);
      }
      this.setState({loading:false})
    })
  }

  salvarDados(){
    this.setState({loading:true})
    if(this.state.nome != '' && this.state.celular != ''){
      Cookie.set('anw_nome', this.state.nome, {expires:1000})
      Cookie.set('anw_celular', this.state.celular, {expires:1000})
      this.setState({loading:false})
      this.props.handleModal();
      this.alerta("Bem vindo(a) "+Cookie.get('anw_nome')+".");
    }else{
      alert("Preencha os campos nome e telefone");
    }
  }

  onChange(e){
    this.setState({dataEscolhida: moment(e).format('YYYY-MM-DD')});
    this.setState({diaSemana: moment(e).format('ddd')});
    this.listarHorarios(moment(e).format('YYYY-MM-DD'), moment(e).format('ddd'), this.state.profissional);
  }

  submit(e){
    e.preventDefault();
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/newLead', {
      method:'POST',
      body:JSON.stringify({
          nome:this.state.nome,
          email:this.state.email,
          negocio:this.state.negocio,
          celular:this.state.celular
      })
    })
    .then(r=>r.json())
    .then(json=>{
      this.setState({loading:false})
      if(json.success){
        this.setState({formSend:true})
        this.props.action_lead();
      }
    })
  }

  handleChange(checked) {
    this.setState({ checked });
  }


  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
            <Container visible={this.props.visible}> 
              {this.state.loginVisible &&  
                <Login> 
                  <Titulo>INFORME SEUS DADOS</Titulo>
                  <SubTitulo>Necessário apenas no primeiro agendamento</SubTitulo>
                  <ResumoArea>
                    <>
                      <Label>Seu Nome</Label>
                      <Input type='email' value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})}/>
                    </>
                    <>
                      <Label>Seu Celular (Whatsapp)</Label>
                      <Input type='email' placeholder={'(99)999999999'} value={this.state.celular} onChange={e=>this.setState({celular:phone(e.target.value)})} />
                    </>
                    
                  </ResumoArea>
                  <BottomArea>
                    {this.state.loading &&
                      <LoaderArea>
                        <Loader
                            type="TailSpin"
                            color="#5C6BF2"
                            height={48}
                            width={48}
                        />
                      </LoaderArea>
                    }
                    {!this.state.loading &&
                      <>
                        <BtnAction onClick={this.salvarDados}>SALVAR</BtnAction>
                      </>
                    }
                  </BottomArea>
                </Login>
              }
              
              
              
              
            </Container>
        </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default ModalIdentificacao;