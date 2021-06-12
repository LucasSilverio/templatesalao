import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment'; 
import Loader from 'react-loader-spinner';
import Cookie from 'js-cookie';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { 
    AlertArea,
    Avatar,
    AvatarPro,
    AvatarServico,
    AreaBotoes,
    AreaResult,
    AlertMsg,
    BackArea,
    BotaoC,
    BodyModal,
    BoxCliente,
    Box,
    Container,
    IptBusca,
    Item,
    ItemServico,
    ItemHorario,
    Label,
    Paragrafo,
    ResultItem,
    Result,
    TopModal
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class ModalNovo extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      nomeCliente:'',
      titulo:'',
      slug:'',
      status:'',
      codRastreio:'',
      sendMail:false,
      profissionais:[],
      resultado:[],
      servicos:[],
      horarios:[],
      clientId:'',
      clientName:'',
      clientAvatar:'',
      profissionalId:'',
      profissionalNome:'',
      servicoId:'',
      servicoNome:'',
      servicoTempo:'',
      horario:'',
      errorAlert:''
    } 
    this.cleanStates = this.cleanStates.bind(this);
    this.close = this.close.bind(this);
    this.getServicos = this.getServicos.bind(this);
    this.handleCliente = this.handleCliente.bind(this);
    this.selectClient = this.selectClient.bind(this);
    this.selectProfissional = this.selectProfissional.bind(this);
    this.selectServico = this.selectServico.bind(this);
  }

  componentDidMount(){
    this.getProfessionals();
    this.getServicos();
  }

  check = (e) =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Deseja Confirmar o Agendamento?</h1>
            <p>Data: <strong>{moment(this.props.data).format('DD/MM/YY')}</strong></p>
            <p>Horário: <strong>{e}</strong></p>
            <p>Cliente: <strong>{this.state.clientName}</strong></p>
            <p>Serviço: <strong>{this.state.servicoNome}</strong></p>
            <p>Profissional: <strong>{this.state.profissionalNome}</strong></p>
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
    this.setState({nomeCliente:''});
    this.setState({clientId:''});
    this.setState({profissionalId:''})
    this.setState({servicoId:''}) 
    this.setState({resultado:[]})
    this.setState({horarios:[]})
  }

  close(){
    this.cleanStates();
    this.props.handleModal();
  }

  getProfessionals(){
    osAPI.getProfessionals(Cookie.get('token'))
    .then(r=>r.json())
    .then(json=>{
      this.setState({profissionais:json.data})
    })
  }

  getServicos(){
    osAPI.getServicosAgenda(Cookie.get('token'))
    .then(r=>r.json())
    .then(json=>{
      this.setState({servicos:json.data})
    })
  }

  handleCliente(e){
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
        this.setState({resultado:json.data})
      })
    }else{
      this.setState({resultado:[]})
    }
  }

  listarHorarios(tempo, profissional){
    // alert(moment(this.props.data).format('ddd'))
    if(tempo != '' && profissional != ''){
      osAPI.listarHorarios(Cookie.get('token'), profissional, this.props.data, tempo, moment(this.props.data).format('ddd'))
      .then(r=>r.json())
      .then(json=>{
        this.setState({horarios:json.data})
      })
    }
  }

  selectClient(id, nome, avatar){
    this.setState({clientId:id})
    this.setState({clientName:nome})
    this.setState({clientAvatar:avatar})   
    this.setState({nomeCliente:nome}) //state do input
    this.setState({errorAlert:''})
    this.setState({resultado:[]})
  }

  selectProfissional(id, nome){
    this.setState({profissionalId:id});   
    this.setState({profissionalNome:nome}) 
    this.listarHorarios(this.state.servicoTempo, id)
  }

  selectServico(id, nome, tempo){
    this.setState({servicoId:id})
    this.setState({servicoNome:nome})
    this.setState({servicoTempo:tempo})
    this.listarHorarios(tempo, this.state.profissionalId)
  }

  selectHorario(horario){
    this.setState({horario:horario});
    if(this.state.clientId != ''){
      this.check(horario);
    }else{
      this.setState({errorAlert:'*Selecione o cliente antes de confirmar o agendamento.'});
    }
  }
  
  submit(){
    fetch(ecommerceAPI.BASE_URL_API+'agenda/agendarPro', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          dateStr:this.props.data,
          servico:this.state.servicoId,
          horario:this.state.horario,
          profissional:this.state.profissionalId,
          selectedClient:this.state.clientId
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.cleanStates();
        this.props.closeModal();
        this.props.getAgenda(this.props.data);
      }
    })
  }

  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.close}/>
          <Container visible={this.props.visible}>
            <TopModal>
              <Paragrafo>Verificar agenda para o dia {moment(this.props.data).format('DD/MM/YY')}</Paragrafo>
            </TopModal>
            <BodyModal>
              <BoxCliente>
                <Box>
                  <Label>Informe o cliente</Label>
                  <IptBusca type='text' value={this.state.nomeCliente} onChange={e=>this.handleCliente(e.target.value)}/>
                  <AreaResult>
                    {this.state.resultado.map((i, index) => (
                      <ResultItem onClick={e=>this.selectClient(i.id, i.name, i.avatar)}>
                        <Avatar src={i.avatar} />
                        {i.name+' - '+i.celular}
                      </ResultItem>
                    ))}
                  </AreaResult>
                </Box>
                <Box>
                  {this.state.errorAlert != '' &&
                    <AlertMsg>{this.state.errorAlert}</AlertMsg>
                  }
                </Box>
              </BoxCliente>
              <BoxCliente>
                <Box>
                  <Label>Selecione o Profissional</Label>
                  <Result>
                      {this.state.profissionais.map((i, index) => (
                        <Item onClick={e=>this.selectProfissional(i.id, i.name)} destaque={this.state.profissionalId == i.id ? true : false}>
                          <AvatarPro src={i.avatar} />
                          {i.name}
                        </Item>
                      ))}
                  </Result>
                </Box>
              </BoxCliente>
              <BoxCliente>
                <Box>
                  <Label>Selecione o serviço</Label>
                  <Result>
                      {this.state.servicos.map((i, index) => (
                        <ItemServico onClick={e=>this.selectServico(i.id, i.nome, i.tempo)} destaque={this.state.servicoId == i.id ? true : false}>
                          <AvatarServico src={i.img} />
                          {i.nome}
                        </ItemServico>
                      ))}
                  </Result>
                </Box>
              </BoxCliente>
              <BoxCliente>
                <Box>
                  <Label>Selecione o horário</Label>
                  <Result>
                      {this.state.horarios.map((i, index) => (
                        <ItemHorario onClick={e=>this.selectHorario(i.horario)}>
                          {i.horario}
                        </ItemHorario>
                      ))}
                  </Result>
                </Box>
              </BoxCliente>
            </BodyModal>
          </Container>
        </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default ModalNovo;