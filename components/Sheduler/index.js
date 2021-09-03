import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Router from 'next/router';
import Cookie from 'js-cookie';
import moment from 'moment'; 
import Modal from '../../components/Modal';
import ModalNovo from '../../components/ModalNovo';
import ModalSm from '../../components/ModalSm'; 
import ModalBlock  from '../../components/ModalBlock';
import { 
    Atualizacao,
    Container,
    Box,
    BoxCalendario,
    BoxHorarioInter,
    BtnAction,
    CalendarioArea,
    Calendario,
    Corpo,
    ColunaHorarios,
    ColunaProfissional,
    Concluido,
    Horario,
    HorarioDesc,
    HorarioPro,
    HorarioProDesc,
    Label,
    Linha,
    ParagrafoNm,
    ParagrafoDestaque,
    ProId,
    Subtitulo,
    Topo,

} from './styled';
import osAPI from '../../services/osAPI';
 
class Sheduler extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      horarios:[
        '08:00',
        '08:30',
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00'
      ],
      data:moment().format('YYYY-MM-DD'),
      modalVisible:false,
      modalNovoVisible:false,
      modalSmVisible:false,
      modalBlockVisible:false,
      profissionais:[],
      agendadia:[],
      id:'', 
      hora:'', 
      horafim:'', 
      barbeiro:'', 
      servico:'', 
      cliente:'', 
      idcliente:'', 
      phone:'',
      status:'',
      atualizacao:'',
      nomeProfissionalBloqueio:'',
      horarioBloqueio:'',
      idProfissionalBloqueio:'',
      preco:''
    }    
    this.getAgenda = this.getAgenda.bind(this);
    this.getProfessionals = this.getProfessionals.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleModalNovo = this.handleModalNovo.bind(this);
    this.handleModalSm = this.handleModalSm.bind(this);
    this.handleModalBlock = this.handleModalBlock.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handlePreco = this.handlePreco.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalNovo = this.closeModalNovo.bind(this);
  }

componentDidMount(){
  this.getProfessionals();
  this.getAgenda(this.state.data);
  window.setInterval(this.getAgenda, 120000, this.state.data); // 2 minutos
}

clickHorario(profissional, horario, idprofissinal){
  this.handleModalSm();
  this.setState({nomeProfissionalBloqueio:profissional})
  this.setState({horarioBloqueio:horario})
  this.setState({idProfissionalBloqueio:idprofissinal})
  // alert(idprofissinal)
}

getProfessionals(){
  osAPI.getProfessionals(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({profissionais:json.data});
  })
}

getAgenda(data){
  osAPI.getAgenda(Cookie.get('token'), data)
  .then(r=>r.json())
  .then(json=>{
    this.setState({agendadia:json.data})
    this.setState({atualizacao:moment().format()})
    // this.setState({profissionais:json.data});
  })
}

handleData(e){
  this.setState({data:e})
  this.getAgenda(e);
}

handleModal(){
  this.setState({modalVisible:!this.state.modalVisible})
}

closeModal(){
  this.setState({id:''});
  this.setState({hora:''});
  this.setState({horafim:''});
  this.setState({barbeiro:''});
  this.setState({servico:''});
  this.setState({cliente:''});
  this.setState({idcliente:''});
  this.setState({phone:''});
  this.handleModal();
}

handleModalNovo(){
  this.setState({modalNovoVisible:!this.state.modalNovoVisible})
}

handleModalSm(){
  this.setState({modalSmVisible:!this.state.modalSmVisible});
}

handlePreco(e){
  this.setState({preco:e})
}

handleModalBlock(){
  this.setState({modalBlockVisible:!this.state.modalBlockVisible});
}

closeModalNovo(){
  this.handleModalNovo();
}

showDetails(id, hora, horafim, barbeiro, servico, cliente, idcliente, phone, status, preco){
  this.setState({id:id}); //id da agenda
  this.setState({hora:hora});
  this.setState({horafim:horafim});
  this.setState({barbeiro:barbeiro});
  this.setState({servico:servico});
  this.setState({cliente:cliente});
  this.setState({idcliente:idcliente});
  this.setState({phone:phone});
  this.setState({status:status});
  this.setState({preco:preco})
  this.handleModal();
}

    render(){     
      let obj = this.state.agendadia;
      let values='';
      if(obj != undefined){
          values = Object.keys(obj).map(function(e) {
          return obj[e]
        })
      }
      console.log(values)
        return(    
          <Container>
            <Topo>
              <Subtitulo>Gestão da Agenda</Subtitulo>
            </Topo>
            <Corpo>
              <CalendarioArea>
                <BoxCalendario>
                  <Label>Alterar Data</Label>
                  <Calendario type='date' onChange={e=>this.handleData(e.target.value)} />
                </BoxCalendario>
                <ParagrafoDestaque>Data selecionada: {moment(this.state.data).format('DD/MM/YY')}</ParagrafoDestaque>
                <BtnAction onClick={e=>this.handleModalNovo()} bgColor={'#2B5277'}>Novo Agendamento</BtnAction>
                <Atualizacao onClick={e=>this.getAgenda(this.state.data)}>
                  {'Atualizado às '+moment(this.state.atualizacao).format('HH:mm')}
                </Atualizacao>
                {/* <Erro>{this.state.errorAlert}</Erro> */}
              </CalendarioArea> 
              <CalendarioArea>
                <BtnAction bgColor={'#573535'} onClick={this.handleModalBlock}>Bloquear Horário</BtnAction>
              </CalendarioArea>
              <ColunaHorarios>
                  {this.state.horarios.map((i, index) => ( 
                    <Linha>
                      <Horario>
                        <HorarioDesc>{i}</HorarioDesc>
                      </Horario>
                      
                    {this.state.agendadia.map((l, lindex) => (
                      <Box>
                        {this.state.agendadia[lindex].agenda.map((j, jindex) => (
                          <>
                            {i == j.hora && j.servicoid != 100 &&
                              <HorarioPro height={((j.duracao.replace(':', '.') * 60) / 30)} bgColor={'#fff'} p={'unset'} > {/* FÓRMULA: ((DURAÇÃO * ALTURA MÍNIMA) / INTERVALO EM MINUTOS) */}
                                <BoxHorarioInter height={((parseInt(j.duracao_hora) * 60 + parseInt(j.duracao_minutos)) * 60) / 30} bgColor={l.cor} p={'absolute'} tp={j.minuto_inicio >= 30 ? (j.minuto_inicio - 30)*2 : j.minuto_inicio} onClick={e=>this.showDetails(j.id, j.hora, j.horafim, j.barbeiro, j.servico, j.cliente, j.idcliente, j.phone, j.status, j.preco)}>
                                  <HorarioProDesc>{j.hora+' àsx '+j.horafim}</HorarioProDesc>
                                  <ParagrafoNm>{j.servico}</ParagrafoNm>
                                  <ParagrafoNm>{j.cliente}</ParagrafoNm>
                                  <ProId>{j.barbeiro}</ProId>
                                  {j.status == 2 &&
                                    <Concluido>Concluído</Concluido>
                                  }
                                </BoxHorarioInter>
                              </HorarioPro>
                            }   
                            {i == j.hora && j.servicoid == 100 &&
                              <HorarioPro height={((j.duracao.replace(':', '.') * 60) / 30)} bgColor={'#fff'} p={'unset'} > {/* FÓRMULA: ((DURAÇÃO * ALTURA MÍNIMA) / INTERVALO EM MINUTOS) */}
                                <BoxHorarioInter height={((parseInt(j.duracao_hora) * 60 + parseInt(j.duracao_minutos)) * 60) / 30} bgColor={'#800000'} p={'absolute'} tp={j.minuto_inicio >= 30 ? (j.minuto_inicio - 30)*2 : 0} onClick={e=>this.showDetails(j.id, j.hora, j.horafim, j.barbeiro, j.servico, j.cliente, j.idcliente, j.phone, j.status)}>
                                  <ParagrafoNm>Bloqueado</ParagrafoNm>
                                  <ProId>{j.barbeiro}</ProId>
                                </BoxHorarioInter>
                              </HorarioPro>
                            }                        
                            
                            {j.hora > this.state.horarios[index] && j.hora < this.state.horarios[index + 1] && j.servicoid != 100 &&
                              <HorarioPro height={((j.duracao.replace(':', '.') * 60) / 30)} bgColor={'#fff'} p={'unset'}>
                                <BoxHorarioInter height={((parseInt(j.duracao_hora) * 60 + parseInt(j.duracao_minutos)) * 60) / 30} bgColor={l.cor} p={'absolute'} tp={j.minuto_inicio > 30 ? (j.minuto_inicio - 60)*(-1) : (j.minuto_inicio - 60)*(-1)} onClick={e=>this.showDetails(j.id, j.hora, j.horafim, j.barbeiro, j.servico, j.cliente, j.idcliente, j.phone, j.status, j.preco)}>
                                  <HorarioProDesc>{j.hora+' às '+j.horafim}</HorarioProDesc>
                                  <ParagrafoNm>{j.servico}</ParagrafoNm>
                                  <ParagrafoNm>{j.cliente}</ParagrafoNm>
                                  <ProId>{j.barbeiro}</ProId>
                                  {j.status == 2 &&
                                    <Concluido>Concluído</Concluido>
                                  }
                                </BoxHorarioInter>
                              </HorarioPro>
                            }

                            {j.hora > this.state.horarios[index] && j.hora < this.state.horarios[index + 1] && j.servicoid == 100 &&
                              <HorarioPro height={((j.duracao.replace(':', '.') * 60) / 30)} bgColor={'#fff'} p={'unset'} > {/* FÓRMULA: ((DURAÇÃO * ALTURA MÍNIMA) / INTERVALO EM MINUTOS) */}
                                <BoxHorarioInter height={((parseInt(j.duracao_hora) * 60 + parseInt(j.duracao_minutos)) * 60) / 30} bgColor={'#800000'} p={'absolute'} tp={j.minuto_inicio} onClick={e=>this.showDetails(j.id, j.hora, j.horafim, j.barbeiro, j.servico, j.cliente, j.idcliente, j.phone, j.status)}>
                                <ParagrafoNm>Bloqueado</ParagrafoNm>
                                <ProId>{j.barbeiro}</ProId>
                                </BoxHorarioInter>
                              </HorarioPro>
                            }

                            {j.hora > this.state.horarios[index] && j.hora > this.state.horarios[index + 1] && j.servicoid != 100 &&
                              <HorarioPro height={60} bgColor={'#FFF'} p={'unset'}>
                                <BoxHorarioInter height={60} bgColor={'#FFF'} p={'unset'} onClick={e=>this.clickHorario(j.barbeiro, i, l.id)}> {/* Enviando: Nome do Profissinoal, horário, Id do Profissional */}
                                  <HorarioProDesc>{''}</HorarioProDesc>
                                </BoxHorarioInter>
                              </HorarioPro>
                            }
                            {/* A condição abaixo pega o último horário do array da agenda do funcionario no momento que estiver percorrendo o array e comparar com o horario atual do array horarios*/}
                            {this.state.agendadia[lindex].agenda[this.state.agendadia[lindex].agenda.length - 1].hora < this.state.horarios[index] && j.servicoid != 100 &&
                              <HorarioPro height={60} bgColor={'#FFF'} p={'unset'}>
                                <BoxHorarioInter height={60} bgColor={'#FFF'} p={'unset'} onClick={e=>this.clickHorario(j.barbeiro, i, l.id)}>
                                  <HorarioProDesc>{''}</HorarioProDesc>
                                  {/* <ParagrafoNm>{this.state.agendadia[lindex].agenda.length+' - '+this.state.horarios[18]}</ParagrafoNm> */}
                                </BoxHorarioInter>
                              </HorarioPro> 
                            }
                            
                          </>
                        ))}
                      </Box>                      
                    ))}
                      
                    </Linha>
                  ))}
              </ColunaHorarios> 
              <Modal 
                visible={this.state.modalVisible}
                handleModal={this.handleModal}
                handlePreco={this.handlePreco}
                closeModal={this.closeModal}
                id={this.state.id} //id da agenda
                hora={this.state.hora}
                horafim={this.state.horafim}
                barbeiro={this.state.barbeiro}
                cliente={this.state.cliente}
                phone={this.state.phone}
                getAgenda={this.getAgenda}
                dataselecionada={this.state.data}
                status={this.state.status}
                servico={this.state.servico}
                preco={this.state.preco}
              />
              <ModalNovo 
                visible={this.state.modalNovoVisible}
                handleModal={this.handleModalNovo}
                closeModal={this.closeModalNovo}
                getAgenda={this.getAgenda}
                data={this.state.data}
              />
              <ModalSm 
                visible={this.state.modalSmVisible}
                handleModal={this.handleModalSm}
                nome={this.state.nomeProfissionalBloqueio}
                id={this.state.idProfissionalBloqueio}
                horario={this.state.horarioBloqueio}
                horarios={this.state.horarios}
                data={this.state.data}
                getAgenda={this.getAgenda}
              />
              <ModalBlock 
                visible={this.state.modalBlockVisible}
                handleModal={this.handleModalBlock}
                horarios={this.state.horarios}
                data={this.state.data}
                profissionais={this.state.profissionais}
                getAgenda={this.getAgenda}
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

export default Sheduler;