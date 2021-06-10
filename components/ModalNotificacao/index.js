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
    AlertMsg,
    BackArea,
    BotaoC,
    BodyModal,
    BoxCliente,
    Box,
    BtnAction,
    Container,
    Label,
    Paragrafo,
    Result,
    TopModal,
    TextArea,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class ModalNotificacao extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      errorAlert:'',
      mensagem:''
    } 
    this.close = this.close.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount(){
  }

  close(){
    this.setState({mensagem:''});
    this.props.handleModal();
  }

  check = () =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Deseja Confirmar o envio?</h1>
            <p>Certifique-se de o WhatsappWeb vinculado ao sistema não estar aberto no navegado. Caso esteja, feche-o e aguarde pelo menos 30 minutos antes de enviar uma notificação.</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.submit();
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
  
  submit(){
    if(this.state.mensagem != ''){
      this.setState({loading:true})
      fetch(ecommerceAPI.BASE_URL_API+'notifica/sendLembretePromocional', {
        method:'POST',
        body:JSON.stringify({
            jwt:Cookie.get('token'),
            mensagem:this.state.mensagem,
            titulo:'Notificação',
            datainicial:this.props.dataInicioReq,
            datafinal:this.props.dataFimReq
        })
      })
      .then(r=>r.json())
      .then(json=>{
        if(json.data){
          this.setState({loading:false})
          this.close();
        }
        this.setState({loading:false})
      })
    }
  }

  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.close}/>
          <Container visible={this.props.visible}>
            <TopModal>
              <Paragrafo>Enviar Notificação Via Whatsapp - {'Clientes completando '+this.props.datadesc}</Paragrafo>
            </TopModal>
            <BodyModal>
              <BoxCliente>
                <Box>
                  {this.state.errorAlert != '' &&
                    <AlertMsg>{this.state.errorAlert}</AlertMsg>
                  }
                </Box>
              </BoxCliente>
              <BoxCliente>
                <Box>
                  <Label>Insira a mensagem desejada</Label>
                  <TextArea value={this.state.mensagem} onChange={e=>this.setState({mensagem:e.target.value})} />
                </Box>
                <Box>
                {this.state.loading &&
                  <Loader
                      type="TailSpin"
                      color="#716FF2"
                      height={24}
                      width={24}
                  />
                }
                {!this.state.loading &&
                  <BtnAction onClick={this.check}>Enviar</BtnAction>
                }
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

export default ModalNotificacao;