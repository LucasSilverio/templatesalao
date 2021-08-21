import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment'; 
import Loader from 'react-loader-spinner';
import Cookie from 'js-cookie';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { 
    AlertArea,
    AreaBotoes,
    Avatar,
    BackArea,
    BotaoC,
    Container,
    CalendarioArea,
    Profissional,
    HorariosArea,
    Horario,
    ProfissionaisArea,
    ResumoArea,
    BottomArea,
    BtnAction,
    BtnEspera,
    SubTitulo,
    ServiceInfo,
    ServicePreco,
    Servico,
    Icone,
    Input,
    Item,
    Label,
    LoaderArea,
    Opcoes,
    Paragrafo,
    ParagrafoSm,
    Top,
    Titulo,
    TextTks,
    TksTitle,
    TksSub,
    Selector,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import ModalLogin from '../ModalLogin';
import {onlyNumbers, phone} from '../../services/formMask';

class ModalAgenda extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      editavel:false,
      nome:'',
      email:'',
      celular:'',
      negocio:'',
      formSend:false,
      profissional:'',
      dataEscolhida:'',
      diaSemana:'',
      horarioSelecionado:'',
      horarios:[],
      modalLoginVisible:false
    } 
    this.handleEdit = this.handleEdit.bind(this);
    this.listarHorarios = this.listarHorarios.bind(this)
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.handleHorario = this.handleHorario.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  componentDidMount(){
    // console.log(this.props.profissionais)
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

  checkEspera = () =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Deseja entrar na lista de espera?</h1>
            <p>Você será informado caso alguém desmarque um horário na data selecionada.</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.listaEspera();
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

  listaEspera(){
    fetch(ecommerceAPI.BASE_URL_API+'agenda/addesperaSite', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          data:this.state.dataEscolhida,
          slug:this.props.slug
      })
    })
    .then(r=>r.json())
    .then(json=>{
      this.setState({loading:false})
      if(json.success){
        this.alerta('Você foi incluído com sucesso na lista de espera! Caso abra uma vaga para o dia selecionado, enviaremos uma mensagem para você! Obrigado.');
      }else{
        alert(json.error)
      }
    })
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

  handleProfissional(id){
    this.setState({profissional:id})
    if(this.state.dataEscolhida != ''){
      this.listarHorarios(this.state.dataEscolhida, this.state.diaSemana, id);
    }
  }

  handleConfirm(){
    this.setState({loading:true})
    if(Cookie.get('token') !== undefined){
      fetch(ecommerceAPI.BASE_URL_API+'agenda/agendarSite', {
        method:'POST',
        body:JSON.stringify({
            jwt:Cookie.get('token'),
            idbarbeiro:this.state.profissional,
            dateStr:this.state.dataEscolhida,
            horario:this.state.horarioSelecionado,
            servico:this.props.idservico,
            slug:this.props.slug
        })
      })
      .then(r=>r.json())
      .then(json=>{
        this.setState({loading:false})
        if(json.success){
          this.alerta('Agendamento realizado com sucesso!');
          this.setState({profissional:''})
          this.setState({dataEscolhida:''})
          this.setState({horarioSelecionado:''})
          this.props.handleModal();
        }else{
          alert(json.error);
        }
        
      })
    }else{
      this.setState({modalLoginVisible:true})
    }
  }

  handleModal(){
    this.setState({modalLoginVisible:!this.state.modalLoginVisible})
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

  checkConfirm = (e) =>{
    e.preventDefault();    
    if(Cookie.get('token') !== undefined){
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <AlertArea>
              <h1>Confirma o agendamento?</h1>
              <p>Ao clicar em sim, as alterações serão realizadas.</p>
              <AreaBotoes>
                <BotaoC onClick={onClose}>NÃO</BotaoC>
                <BotaoC
                  onClick={() => {
                    this.handleConfirm();
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
      this.setState({modalLoginVisible:true})
    }
    
  }


  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
            <Container visible={this.props.visible}>     
             <Titulo>ESCOLHA UMA DATA E HORA</Titulo>
              <CalendarioArea>
                <Calendar
                  onChange={this.onChange}
                  value={this.state.data}
                />     
              </CalendarioArea>    
              <ProfissionaisArea> 
                {this.props.profissionais.map((i, index) => (
                  <Profissional key={index} onClick={e=>this.handleProfissional(i.id)} destaque={this.state.profissional == i.id ? true : false}>
                    <Avatar src={i.avatar} />
                    {i.name}
                  </Profissional>
                ))}
              </ProfissionaisArea>
              <HorariosArea>
                  {this.state.horarios.map((i, index) => (
                    <Horario key={index} destaque={this.state.horarioSelecionado == i.horario ? true : false} onClick={e=>this.handleHorario(i.horario)}>
                      {i.horario}
                    </Horario>
                  ))}
              </HorariosArea>
              <BtnEspera onClick={this.checkEspera}>Entrar na Lista de Espera</BtnEspera>
              <ResumoArea>
                <ServiceInfo>
                  <Servico>{this.props.nomeservico}</Servico>
                  {/* <SubTitulo color='#333' fontsz='14px'>{i.descricao}</SubTitulo> */}
                </ServiceInfo>
                <ServicePreco>
                  <SubTitulo color='#333' fontsz='16px'>{'R$'+this.props.precoservico}</SubTitulo>
                  <SubTitulo color='#333' fontsz='12px'>{this.state.dataEscolhida != '' ? moment(this.state.dataEscolhida).format('DD/MM')+' '+this.state.horarioSelecionado : ''}</SubTitulo>
                </ServicePreco>
              </ResumoArea>
              <BottomArea onClick={this.checkConfirm}>
                {!this.state.loading &&
                  <BtnAction>CONFIRMAR AGENDAMENTO</BtnAction>
                }
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
              </BottomArea>
              <ModalLogin
                visible={this.state.modalLoginVisible}
                handleModal={this.handleModal}
                slug={this.props.slug}
              />
            </Container>
        </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default ModalAgenda;