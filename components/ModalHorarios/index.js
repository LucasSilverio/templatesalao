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
    BackArea,
    BotaoC,
    Container,
    Coluna,
    Cancel,
    BoxArea,
    HorariosArea,
    Horario,
    Item,
    Linha,
    ProfissionaisArea,
    ResumoArea,
    BottomArea,
    BtnAction,
    SubTitulo,
    ServiceInfo,
    ServicePreco,
    Servico,
    LoaderArea,
    Titulo,
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
      modalLoginVisible:false
    } 
    
    this.submit = this.submit.bind(this);
  }

  componentDidMount(){
    
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

  handleCancel(id){
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'agenda/cancelarSite', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          idagenda:id,
          slug:this.props.slug,

      })
    })
    .then(r=>r.json())
    .then(json=>{
      this.setState({loading:false})
      if(json.success){
        this.props.getHistorico();
      }
    })
  }

  


  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
            <Container visible={this.props.visible}>     
             <Titulo>{this.props.nome}</Titulo>
             <Titulo><small>{this.props.telefone}</small></Titulo>
             <Linha />
              {this.props.historico != undefined &&
                  <BoxArea>   
                    {this.props.historico.map((i, index) => (
                      <Item key={index} bgColor={index % 2 === 0 ? '#EEE' : '#FFF'} loading={this.state.loading}>
                        <Coluna flex={2} color={i.statusval == 3 ? '#333' : '#333'}>
                          <strong color={i.statusval == 3 ? '#333' : '#333'}>{i.servico}</strong>
                          <div>{i.data+' '+i.hora}</div>
                        </Coluna>
                        <Coluna flex={2} color={i.statusval == 3 ? '#c16262' : '#333'}>
                          <strong >{i.status}</strong>
                          <div>{i.profissional}</div>
                        </Coluna>
                        <Coluna flex={1} color={i.statusval == 3 ? '#333' : '#333'}>
                          {i.statusval == 1 &&
                            <Cancel onClick={e=>this.handleCancel(i.id)} loading={this.state.loading}>Desmarcar</Cancel>
                          }
                        </Coluna>
                      </Item>
                    ))}
                  </BoxArea>    
                }
              {/* <BottomArea onClick={this.checkConfirm}>
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
              </BottomArea> */}
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