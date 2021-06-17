import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment'; 
import Loader from 'react-loader-spinner';
import Cookie from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { 
    AlertArea,
    AreaBotoes,
    BackArea,
    BoxLinha,
    BoxOpcoes,
    Botao,
    BotaoTexto,
    BotaoC,
    BtnAction,
    BtnDisabled,
    Container,
    Icone,
    IconeBotao,
    Paragrafo,
    ParagrafoSm,
    Selector,
    Texto,
    TextoStatus
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class ModalBlock extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      titulo:'',
      slug:'',
      status:'',
      codRastreio:'',
      sendMail:false,
      horariofinal:'',
      horarioinicial:'',
      idprofissional:'',
    } 
    
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDesmarcar = this.handleDesmarcar.bind(this)
    
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

  checkDesmarcar = (e) =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Deseja realmente cancelar este agendamento?</h1>
            <p>Ao clicar em sim, o horário será liberado na agenda.</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.handleDesmarcar(e);
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

  checkBloquear = (e) =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Deseja realmente bloquear estes horários?</h1>
            <p>Ao clicar em sim, os horários serão bloqueados na agenda.</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.handleBloquear(e);
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

  close(){
    this.setState({idprofissional:''})
    this.setState({horarioinicial:''})
    this.setState({horariofinal:''})
    this.props.handleModal();
  }

  handleSubmit(e){
    e.preventDefault();;
    let sm = 0;
    if(this.props.titulo != '' && this.props.descricao != ''){
      this.props.handleSubmit();
    }
  } 

  handleDesmarcar(){
    fetch(ecommerceAPI.BASE_URL_API+'agenda/cancelar', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          idagenda:this.props.id, //id da agenda
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.props.closeModal();
        this.props.getAgenda(this.props.dataselecionada);
      }
    })
  }

  handleBloquear(){
    fetch(ecommerceAPI.BASE_URL_API+'agenda/blockHours', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          idbarbeiro:this.state.idprofissional,
          dateStr:this.props.data,
          horarioinicial:this.state.horarioinicial,
          horariofinal:this.state.horariofinal,
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.close();
        this.props.getAgenda(this.props.data);
      }
    })
  }
  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
          <Container visible={this.props.visible}>
            <Paragrafo>Bloquear Horários - {moment(this.props.data).format('DD/MM/YY')}</Paragrafo>
            <BoxLinha>
              <ParagrafoSm> Profissional </ParagrafoSm>
              <Selector onChange={e=>this.setState({idprofissional:e.target.value})}>
                <option value='' selected disabled>Selecione</option>
                {this.props.profissionais.map((i, index) => (
                  <option value={i.id}>{i.name}</option>
                ))}
              </Selector>
            </BoxLinha>
            <BoxLinha>
              <Selector onChange={e=>this.setState({horarioinicial:e.target.value})}>
              <option value='' selected disabled>Horário Inicial</option>
              {this.props.horarios.map((i, index) => (
                <option value={i}>{i}</option>
              ))}
              </Selector>
              <ParagrafoSm> às </ParagrafoSm>
              <Selector onChange={e=>this.setState({horariofinal:e.target.value})}>
                <option value='' selected disabled>Horário Final</option>
                {this.props.horarios.map((i, index) => (
                  <option value={i}>{i}</option>
                ))}
              </Selector>
              {/* <ParagrafoSm>{' '+moment(this.props.data).format('DD/MM/YY')}</ParagrafoSm> */}
            </BoxLinha>
            <BoxOpcoes>
              <BtnAction onClick={e=>this.checkBloquear()}>Bloquear Horários</BtnAction>
            </BoxOpcoes>
          </Container>
        </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default ModalBlock;