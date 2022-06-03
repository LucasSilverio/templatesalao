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
    Preco,
    LoaderArea,
    Texto,
    TextoSm,
    TextoStatus
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {preco} from '../../services/formMask';

class Modal extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      titulo:'',
      slug:'',
      status:'',
      codRastreio:'',
      sendMail:false
    } 
    
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

  checkDuplicar = (e) =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Duplicar o agendamento?</h1>
            <p>Ao clicar em sim, a agenda será duplicada em sequência.</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.handleDuplicar(e);
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

  handleSubmit(e){
    e.preventDefault();;
    let sm = 0;
    if(this.props.titulo != '' && this.props.descricao != ''){
      this.props.handleSubmit();
    }
  } 

  handleDesmarcar(){
    this.setState({loading:true})
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
      this.setState({loading:false})
    })
  }

  handleDuplicar(){
    fetch(ecommerceAPI.BASE_URL_API+'agenda/duplicar', {
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

  submit(e){
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'agenda/concluir', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          id:this.props.id, //id da agenda
          lancamento:e,
          valor:this.props.preco
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.props.closeModal();
        this.props.getAgenda(this.props.dataselecionada);
      }
      this.setState({loading:false})
    })
  }
   
  render(){     
    
    return(   
        <> 
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
          <Container visible={this.props.visible}>
            {!this.state.loading &&
              <>
                <BoxLinha>
                  <Texto color={'#333'}>{'Cliente: '+this.props.cliente}</Texto>  
                  <Texto color={'#333'}>{'Tel: '+this.props.phone}</Texto>  
                    <Link href={'//wa.me/55'+this.props.phone} >
                      <a target={"_blank"}>
                          <Icone src='/whatsapp.png' />
                      </a>
                    </Link>
                </BoxLinha>
                <BoxLinha>
                  <TextoSm color={'#555'}>{'Serviço: '+this.props.servico}</TextoSm>
                  <TextoSm color={'#555'}>{'Horário: '+this.props.hora+'h às '+this.props.horafim+'h'}</TextoSm>
                  <TextoSm color={'#555'}>{'Profissional: '+this.props.barbeiro}</TextoSm>
                </BoxLinha>
                <BoxLinha>
                  <TextoSm>Valor do Cobrado(R$): <Preco type={'text'} value={this.props.preco} onChange={e=>this.props.handlePreco(preco(e.target.value))}/></TextoSm>
                </BoxLinha>
                <BoxOpcoes>
                    <Botao onClick={e=>this.check(1)}>
                    <IconeBotao src='/dinheiro.png' />
                    <BotaoTexto>Dinheiro</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.check(2)}>
                    <IconeBotao src='/cheque.png' />
                    <BotaoTexto>Cheque</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.check(3)}>
                    <IconeBotao src='/cartao.png' />
                    <BotaoTexto>Débito</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.check(4)}>
                    <IconeBotao src='/cartao.png' />
                    <BotaoTexto>Crédito</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.check(5)}>
                    <IconeBotao src='/outro.png' />
                    <BotaoTexto>Pix</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.check(e)}>
                    <IconeBotao src='/pontos.png' />
                    <BotaoTexto>Pontuação</BotaoTexto>
                    </Botao>
                </BoxOpcoes>
                <BoxOpcoes>
                  <TextoStatus color={this.props.status == 1 ? '#333' : '#716FF2'}>{this.props.status == 1 ? 'Status atual: Confirmado' : 'Status atual: Concluído'}</TextoStatus>
                </BoxOpcoes>
                <BoxOpcoes>
                  {this.props.status == 1 &&
                    <>
                      <BtnAction onClick={e=>this.checkDesmarcar()} bgColor={'#573535'}>Desmarcar</BtnAction>
                      <BtnAction onClick={e=>this.checkDuplicar()} bgColor={'#2B5277'}>Duplicar</BtnAction>
                    </>
                  }
                  {this.props.status == 2 &&
                    <BtnDisabled>Desmarcar</BtnDisabled>
                  }
                </BoxOpcoes>
              </>
            }
            {this.state.loading &&
              <LoaderArea>
                  <Loader
                      type="TailSpin"
                      color="#5C6BF2"
                      height={80}
                      width={80}
                  />
              </LoaderArea>
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

export default Modal;