import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
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
import {onlyNumbers, horario} from '../../services/formMask';


 
class Horarios extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      errorAlert:'',
      modalVisible:false,
      selectedDay:'Mon',
      selectedDayDesc:'Segunda',
      abertura:'',
      intervalo:'',
      fimIntervalo:'',
      encerramento:'',
      profissionais:[],
      profissional:'',
      horariosVisible:false,
      horarios:[],
      horario:''
    }    
    this.closeModal = this.closeModal.bind(this);
    this.disableHour = this.disableHour.bind(this);
    this.getProfessionals = this.getProfessionals.bind(this);
    this.handleModal = this.handleModal.bind(this);  
    this.handleDay = this.handleDay.bind(this);
    this.handleHorarios = this.handleHorarios.bind(this)
    this.submit = this.submit.bind(this);
    this.submitNewHour = this.submitNewHour.bind(this)
  }

componentDidMount(){
  this.getAtendimentos(this.state.selectedDay, this.state.profissional)
  this.getProfessionals();
  this.getHorarios(this.state.profissional)
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

disableHour(id){
  fetch(ecommerceAPI.BASE_URL_API+'horarios/disableHour', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        horario:id,
        profissional:this.state.profissional
    })
  })
  .then(r=>r.json())
  .then(json=>{
    if(json.success){
      this.getHorarios(this.state.profissional)
    }
  })
}

handlePage(offset, action){
  if(offset >= 0 && offset <= this.state.totalClientes && this.state.totalClientes > this.state.limit){
    this.getClientes(offset, action);
  }
}

handleModal(){
  this.setState({modalVisible:!this.state.modalVisible})
}

handleDay(dia, desc){
  this.setState({selectedDay:dia});
  this.setState({selectedDayDesc:desc});
  this.getAtendimentos(dia, this.state.profissional)
}

handleProfissional(id){
  this.setState({profissional:id})
  this.getAtendimentos(this.state.selectedDay, id)
  this.getHorarios(id)
}

handleHorarios(){
  this.setState({horariosVisible:!this.state.horariosVisible})
}

getAtendimentos(dia, profissional){
  fetch(ecommerceAPI.BASE_URL_API+'atendimento/listar', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        dia,
        profissional
    })
  })
  .then(r=>r.json())
  .then(json=>{
    
    if(json.abertura.horario != undefined){
      this.setState({abertura:json.abertura.horario})
    }else{
      this.setState({abertura:'00:00'});
    }
    if(json.intervalo.horario != undefined){
      this.setState({intervalo:json.intervalo.horario})
    }else{
      this.setState({intervalo:'00:00'});
    }

    if(json.fimintervalo.horario != undefined){
      this.setState({fimIntervalo:json.fimintervalo.horario})
    }else{
      this.setState({fimIntervalo:'00:00'});
    }

    if(json.encerramento.horario != undefined){
      this.setState({encerramento:json.encerramento.horario})
    }else{
      this.setState({encerramento:'00:00'});
    }
  })
}

getProfessionals(){
  osAPI.getProfessionals(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({profissionais:json.data})
  })
}

getHorarios(profissional){
  fetch(ecommerceAPI.BASE_URL_API+'horarios/getHorariosPro', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        profissional
    })
  })
  .then(r=>r.json())
  .then(json=>{
    this.setState({horarios:json.data})
  })
}

closeModal(){
  this.handleModal();
}

submit(){
  this.setState({loading:true})
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
      alert('Adicionado sucesso!');
      this.getAtendimentos(this.state.selectedDay, this.state.profissional)
    }else{
      alert(json.error);
    }
    this.setState({loading:false})
  })
}

submitNewHour(e){
  e.preventDefault();
  if(this.state.profissional != '' && this.state.horario != ''){
    fetch(ecommerceAPI.BASE_URL_API+'horarios/addHorario', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          horario:this.state.horario,
          profissional:this.state.profissional
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.setState({horario:''})
        this.getHorarios(this.state.profissional)
      }
    })
  }else{
    alert('Informe o profissional e o horário');
  }
}


    render(){   
        return(    
          <Container>
            <Topo>
              <Subtitulo>Configuração dos Horários de Atendimento</Subtitulo>
            </Topo>
            <Corpo>
              <Opcoes>
                {this.state.profissionais.map((i, index) => (
                  <Item onClick={e=>this.handleProfissional(i.id)}>
                    <Avatar src={i.avatar} destaque={this.state.profissional == i.id ? true : false} />
                  </Item>
                ))}
              </Opcoes>
              {!this.state.horariosVisible &&
                <Box>
                  <BoxTop>
                    <Paragrafo>Informe os horários de abertura, intervalo (caso houver) e fechamento de cada dia da semana.</Paragrafo>
                    <BoxRow>
                      <Dia bgColor={this.state.selectedDay == 'Sun' ? '#63ADF2' : '#F2A57C'} onClick={e=>this.handleDay('Sun', 'Domingo')}>Domingo</Dia>
                      <Dia bgColor={this.state.selectedDay == 'Mon' ? '#63ADF2' : '#F2A57C'} onClick={e=>this.handleDay('Mon', 'Segunda')}>Segunda</Dia>
                      <Dia bgColor={this.state.selectedDay == 'Tue' ? '#63ADF2' : '#F2A57C'} onClick={e=>this.handleDay('Tue', 'Terça')}>Terça</Dia>
                      <Dia bgColor={this.state.selectedDay == 'Wed' ? '#63ADF2' : '#F2A57C'} onClick={e=>this.handleDay('Wed', 'Quarta')}>Quarta</Dia>
                      <Dia bgColor={this.state.selectedDay == 'Thu' ? '#63ADF2' : '#F2A57C'} onClick={e=>this.handleDay('Thu', 'Quinta')}>Quinta</Dia>
                      <Dia bgColor={this.state.selectedDay == 'Fri' ? '#63ADF2' : '#F2A57C'} onClick={e=>this.handleDay('Fri', 'Sexta')}>Sexta</Dia>
                      <Dia bgColor={this.state.selectedDay == 'Sat' ? '#63ADF2' : '#F2A57C'} onClick={e=>this.handleDay('Sat', 'Sábado')}>Sábado</Dia>
                    </BoxRow>
                  </BoxTop>
                  <ItemDia>
                    <Paragrafo>{this.state.selectedDayDesc}</Paragrafo>
                    <BoxRow>
                      <BoxInput>
                        <Label>Horário de Abertura</Label>
                        <Input type='text' value={this.state.abertura} onChange={e=>this.setState({abertura:horario(e.target.value)})}/>
                      </BoxInput>
                      <BoxInput>
                        <Label>Início Intervalo</Label>
                        <Input type='text' value={this.state.intervalo} onChange={e=>this.setState({intervalo:horario(e.target.value)})}/>
                      </BoxInput>
                      <BoxInput>
                        <Label>Fim Intervalo</Label>
                        <Input type='text' value={this.state.fimIntervalo} onChange={e=>this.setState({fimIntervalo:horario(e.target.value)})}/>
                      </BoxInput>
                      <BoxInput>
                        <Label>Horário de Fechamento</Label>
                        <Input type='text' value={this.state.encerramento} onChange={e=>this.setState({encerramento:horario(e.target.value)})}/>
                      </BoxInput>
                    </BoxRow>
                  </ItemDia>
                  <Opcoes>
                    {this.state.loading &&
                      <Loader
                        type="TailSpin"
                        color="#5C6BF2"
                        height={24}
                        width={24}
                      />
                    }
                    {!this.state.loading && 
                      <>
                        <BtnAction bgColor={'#63ADF2'} onClick={this.submit}>Salvar Alterações</BtnAction>
                        <BtnAction bgColor={'#F2A57C'} onClick={this.handleHorarios}>Próximo Passo</BtnAction>
                      </>
                    }
                  </Opcoes>
                </Box>
              }
              {this.state.horariosVisible &&
                <Box>
                  <BoxTop>
                    <Paragrafo>Cadastre os horários de atendimento, considerando o serviço oferecido cuja realização demanda menor tempo.</Paragrafo>
                    <Paragrafo>Por exemplo, suponhamos que ofereça o serviço de "Corte de Cabelo" com duração de 40 minutos e "Fazer a Barba", com duração de 30 minutos. Você irá considerar a duração de 30 minutos, pois é o serviço que demanda menor tmepo de realização. </Paragrafo>
                    <Paragrafo>Você pode contar com nosso suporte a qualquer momento para realizar este cadastro com você, caso  haja dúvidas. </Paragrafo>
                  </BoxTop>
                  <Opcoes>
                    <Input type='text' value={this.state.horario} onChange={e=>this.setState({horario:horario(e.target.value)})}/>
                    <BtnAction bgColor={'#57F2EB'} onClick={this.submitNewHour}>Adicionar</BtnAction>
                  </Opcoes>
                  <BoxHorarios>
                    {this.state.horarios.map((i, index) => (
                      <Horario onClick={e=>this.disableHour(i.id)}>
                        {i.horario}
                      </Horario>
                    ))}
                  </BoxHorarios>
                  <Opcoes>
                    <BtnAction bgColor={'#F2A57C'} onClick={this.handleHorarios}>Voltar</BtnAction>
                  </Opcoes>
                </Box>
              }
            </Corpo>
            
          </Container>
        )
    }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Horarios;