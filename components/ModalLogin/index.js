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
    Alerta,
    AreaBotoes,
    AlertaRetorno,
    Avatar,
    BackArea,
    BotaoC,
    Container,
    LinkArea,
    Lk,
    Imagem,
    CalendarioArea,
    Profissional,
    HorariosArea,
    Horario,
    ProfissionaisArea,
    ResumoArea,
    BottomArea,
    BtnAction,
    BtnAction2,
    BtnActionLg,
    BtnActionSm,
    Login,
    SignUp,
    SubTitulo,
    ServiceInfo,
    ServicePreco,
    Servico,
    Icone,
    Input,
    InputLg,
    Item,
    Label,
    LoaderArea,
    Opcoes,
    Paragrafo,
    ParagrafoSm,
    Top,
    Titulo,
    TipoLogin,
    TextTks,
    TksTitle,
    TksSub,
    Selector,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {onlyNumbers, phone} from '../../services/formMask';

class ModalLogin extends Component {
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
                  <Titulo>ACESSE PARA CONTINUAR</Titulo>
                  <ResumoArea>
                    <Switch 
                      onChange={this.handleChange} 
                      checked={this.state.checked} 
                      uncheckedIcon={<TipoLogin>Login com o celular</TipoLogin>}
                      checkedIcon={<TipoLogin right={true}>Login com o e-mail</TipoLogin>}
                      width={150}
                      onColor='#5C6BF2'
                      offColor='#709BFF'
                      className='swt'
                    />
                    {this.state.checked &&
                      <>
                        <Label>Seu E-mail</Label>
                        <Input type='email' value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
                      </>
                    }
                    {!this.state.checked &&
                      <>
                        <Label>Seu Celular</Label>
                        <Input type='email' placeholder={'(99)999999999'} value={this.state.celular} onChange={e=>this.setState({celular:phone(e.target.value)})} />
                      </>
                    }
                    <Label>Sua Senha</Label>
                    <Input type='password' value={this.state.pass} onChange={e=>this.setState({pass:e.target.value})}/>
                    
                  </ResumoArea>
                  <LinkArea>
                    {/* <AlertaRetorno>Teste</AlertaRetorno> */}
                    <Lk onClick={this.handleSenha}>Esqueci a senha</Lk>
                  </LinkArea>
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
                        <BtnAction onClick={this.doLogin}>ACESSAR</BtnAction>
                        <BtnAction2 onClick={this.handleSignUp}>CRIAR CONTA</BtnAction2>
                      </>
                    }
                  </BottomArea>
                </Login>
              }
              {this.state.signUpVisible &&
                <SignUp>
                  <Titulo>CRIAR UMA CONTA</Titulo>
                  <ResumoArea>
                    <Label>* Seu E-mail</Label>
                    <Input type='email' placeholder={'Será o seu login'} value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
                    <Label>* Nome</Label>
                    <Input type='text' value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})}/>
                    <Label>Sobrenome</Label>
                    <Input type='text' value={this.state.sobrenome} onChange={e=>this.setState({sobrenome:e.target.value})}/>
                    <Label>* Seu celular (Whatsapp) - <small>Enviaremos um código de verificação gratuitamente para validar</small></Label>
                    <Input type='text' placeholder={'(99)999999999'} value={this.state.celular} onChange={e=>this.setState({celular:phone(e.target.value)})}/>
                    <Label>* Sua Senha</Label>
                    <Input type='password' onChange={e=>this.setState({pass:e.target.value})}/>
                    <Alerta>{this.state.alert}</Alerta>
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
                        <BtnAction onClick={this.handleCriarConta}>CRIAR CONTA</BtnAction>
                        <BtnAction2 onClick={this.handleLogin}>JÁ TENHO UMA CONTA - FAZER LOGIN</BtnAction2>
                      </>
                    }
                  </BottomArea>
                </SignUp>
              }
              {this.state.confirmCodeVisible &&
                <SignUp>
                  <Titulo>INSIRA O CÓDIGO DE VERIFICAÇÃO</Titulo>
                  <ResumoArea>
                    <InputLg type='text' value={this.state.codigo} onChange={e=>this.handleCodigo(e.target.value)}/>                    
                    <Paragrafo>O código de verificação será enviado pelo Whatsapp em alguns segundos</Paragrafo>
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
                      <BtnActionLg onClick={this.sendCode}>ENVIAR</BtnActionLg>
                    }
                  </BottomArea>
                </SignUp>
              }
              {this.state.resetSenha &&
                <SignUp>
                  <Titulo>RECUPERAR SENHA</Titulo>
                  <ResumoArea>
                    <Label>Informe o seu telefone (Whatsapp)</Label>
                    <Input type='text' value={this.state.celular} onChange={e=>this.setState({celular:phone(e.target.value)})} placeholder='(99)999999999'/>                    
                    <Paragrafo>O código de verificação será enviado para Whatsapp cadastrado nesta conta.</Paragrafo>
                    
                    {/* <InputLg type='text' value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder='0000'/>                     */}
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
                        <BtnAction onClick={this.recuperarSenha}>ENVIAR</BtnAction>
                        <BtnAction2 onClick={this.resetSenhaBack}>VOLTAR</BtnAction2>
                      </>
                    }
                  </BottomArea>
                </SignUp>
              }
              {this.state.resetSenhaOk &&
                <SignUp>
                  <Titulo>INFORME O CÓDIGO DE 4 DÍGITOS ENVIADO NO SEU WHATSAPP</Titulo>
                  <ResumoArea>
                    <InputLg type='text' value={this.state.codigo} onChange={e=>this.handleCodigo(e.target.value)} placeholder='0000'/>
                    {this.state.loading &&
                      <LoaderArea>
                        <Loader
                            type="TailSpin"
                            color="#800000"
                            height={48}
                            width={48}
                        />
                      </LoaderArea>
                    }
                    {!this.state.loading &&
                      <BtnActionSm color={'#800000'} onClick={this.resend}>Solicitar novo código</BtnActionSm>
                    }                    
                    <Paragrafo>Insira o código de 4 dígitos no campo acima, em seguida cadastre sua nova senha.</Paragrafo>
                    <Label>Cadastre uma nova senha</Label>
                    <Input type='password' value={this.state.senha} onChange={e=>this.setState({senha:e.target.value})} />
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
                      <BtnAction onClick={this.confirmReset}>CONFIRMAR</BtnAction>
                    }
                  </BottomArea>
                </SignUp>
              }
              {this.state.sucessoVisible &&
                <SignUp>
                  <Titulo>SENHA ATUALIZADA COM SUCESSO</Titulo>
                  <ResumoArea>
                    <Imagem src='/confirmado.svg' />
                  </ResumoArea>
                  <BottomArea>
                    {!this.state.loading &&
                      <BtnAction onClick={this.handleLogin}>FAZER LOGIN</BtnAction>
                    }
                  </BottomArea>
                </SignUp>
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

export default ModalLogin;