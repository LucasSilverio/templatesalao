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
    AlertSm,
    Avatar,
    BackArea,
    BotaoC,
    Box,
    BoxTop,
    BoxEdit,
    BoxLinha,
    BoxColuna,
    BoxOpcoes,
    BtnAction,
    Container,
    ContainerTks,
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
    Selector
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {onlyNumbers, phone} from '../../services/formMask';

class ModalLead extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      editavel:false,
      nome:'',
      email:'',
      celular:'',
      negocio:'',
      formSend:false
    } 
    this.handleEdit = this.handleEdit.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount(){
    // this.setState({nome:this.props.infos.name})
    // this.setState({email:this.props.infos.email})
    // this.setState({celular:this.props.infos.celular})
    // this.setState({datanascimento:this.props.infos.datanascimento})
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

  handleEdit(){
    this.setState({editavel:!this.state.editavel})
  }

  handleCelular(e){
    this.setState({celular:phone(e)});
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
      }
    })
  }
  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
          {!this.state.formSend &&
            <Container visible={this.props.visible}>
              
                <form onSubmit={e=>this.submit(e)}>
                  <BoxEdit>
                    <Titulo>Informe seus dados.</Titulo>
                    <Titulo>Em alguns minutos entraremos em contato com você.</Titulo>
                    <BoxTop>
                      <Label>Nome*</Label>
                      <Input type='text' value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})} placeholder='Informe seu nome completo'/>
                    <BoxColuna>
                        <Label>Celular*</Label>
                        <Input type='text' value={this.state.celular} onChange={e=>this.handleCelular(e.target.value)} placeholder='(99)99999-9999'/>
                      </BoxColuna>
                      <BoxColuna>
                        <Label>E-mail</Label>
                        <Input type='email' value={this.state.email} onChange={e=>this.setState({email:e.target.value})} placeholder='seuemail@email.com'/>                    
                      </BoxColuna>
                      <BoxColuna>
                        <Label>Tipo de Negócio*</Label>
                        <Selector onChange={e=>this.setState({negocio:e.target.value})}>
                          <option value='' disabled selected>Selecione</option>
                          <option value='1'>Barbearia</option>
                          <option value='2'>Salão de Beleza</option>
                          <option value='3'>Centro de Estética</option>
                          <option value='4'>Manicure</option>
                        </Selector>                 
                      </BoxColuna>
                      <BoxColuna>
                        <AlertSm>Os campos com (*) são obrigatórios.</AlertSm>
                      </BoxColuna>
                    </BoxTop>
                    <BoxOpcoes>
                      {this.state.loading &&
                        <LoaderArea>
                            <Loader
                                type="TailSpin"
                                color="#FFF"
                                height={24}
                                width={24}
                            />
                          </LoaderArea>
                      }
                      {!this.state.loading &&
                        <BtnAction bgColor={'#30C61B'} >QUERO CRESCER MEU NEGÓCIO</BtnAction>
                      }
                      
                    </BoxOpcoes>
                  </BoxEdit>
              </form>          
            </Container>
          }
          {this.state.formSend &&
            <ContainerTks visible={this.props.visible}>
              <TksTitle>Sucesso!</TksTitle>
              <TextTks>Olá, agradecemos o contato.</TextTks>
              <TextTks>Parabéns por dar o próximo passo para o crescimento do seu negócio. Em breve um consultor entrará em contato com você pelo Whatsapp.</TextTks>
              <TksSub>Equipe The Shave App.</TksSub>
            </ContainerTks>
          }
        </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default ModalLead;