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
    Icone,
    Input,
    Item,
    Label,
    Opcoes,
    Paragrafo,
    ParagrafoSm,
    Selector,
    Top,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class ModalProfissional extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      editavel:false,
      nome:'',
      email:'',
      celular:'',
      datanascimento:''
    } 
    this.handleEdit = this.handleEdit.bind(this);
    // this.submit = this.submit.bind(this);
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

  handleEdit(){
    this.setState({editavel:!this.state.editavel})
  }

  submit(){
    fetch(ecommerceAPI.BASE_URL_API+'professionals/edit', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          id:this.props.id,
          email:this.props.email,
          nome:this.props.nome,
          celular:this.props.celular,
          comissionado:this.props.comissionado,
          taxacomissao:this.props.taxacomissao
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.handleEdit();
        this.props.getProInfo(this.props.id);
        this.props.getProfissionais();
      }
    })
  }
  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
          <Container visible={this.props.visible}>
            {!this.state.editavel &&
              <>
                <Top>
                  <Avatar src={this.props.avatar != null ? this.props.avatar : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                  <BoxTop>
                    <Paragrafo>{this.props.nome}</Paragrafo>
                    <BoxLinha>
                      <ParagrafoSm>{this.props.email}</ParagrafoSm>
                      {this.props.celular &&
                        <>
                          <Icone src='/whatsapp.png' />
                          <Link href={'//wa.me/55'+this.props.celular.replace(/[()-]/g, '')} > 
                              <a target={"_blank"}>
                                  <ParagrafoSm>{this.props.celular}</ParagrafoSm>
                              </a>
                          </Link>
                        </>
                      }
                    </BoxLinha>   
                    <BoxLinha>
                      <ParagrafoSm>{this.props.comissionado == 0 ? 'Não Comissionado' : 'Comissionado - '+this.props.taxacomissao+'%'}</ParagrafoSm>
                    </BoxLinha>                 
                  </BoxTop>
                </Top>
                <Opcoes>
                  <BtnAction bgColor={'#F2A57C'} onClick={e=>this.handleEdit()}>Editar Cadastro</BtnAction>
                </Opcoes>
              </>
            }
            {this.state.editavel &&
              <BoxEdit>
                <Avatar src={this.props.avatar != null ? this.props.avatar : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                <BoxTop>
                  <Label>Nome</Label>
                  <Input type='text' value={this.props.nome} onChange={e=>this.props.handleNome(e.target.value)}/>
                  <BoxLinha>
                    <BoxColuna>
                      <Label>E-mail</Label>
                      <Input type='text' value={this.props.email} onChange={e=>this.props.handleEmail(e.target.value)}/>                    
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Celular</Label>
                      <Input type='text' value={this.props.celular} onChange={e=>this.props.handleCelular(e.target.value)}/>
                    </BoxColuna>
                  </BoxLinha>
                  <BoxLinha>
                    <BoxColuna>
                      <Label>Comissionado</Label>
                      <Selector onChange={e=>this.props.handleComissionado(e.target.value)}>
                        {/* <option value='' disabled selected>Selecione</option> */}
                        <option value='1' selected={this.props.comissionado == 1 ? true : false}>Sim</option>
                        <option value='0' selected={this.props.comissionado == 0 ? true : false}>Não</option>
                      </Selector>
                      {/* <Input type='date' value={this.props.nascimentocliente} onChange={e=>this.props.handleNascimento(e.target.value)}/> */}
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Taxa Comissão</Label>
                      <Input type='text' value={this.props.taxacomissao} onChange={e=>this.props.handleTxComissao(e.target.value)} />
                    </BoxColuna>
                  </BoxLinha>
                  <BoxLinha>
                    
                  </BoxLinha>
                </BoxTop>
                <BoxOpcoes>
                  <BtnAction onClick={e=>this.handleEdit()} bgColor={'#6E3534'}>Cancelar</BtnAction>
                  <BtnAction bgColor={'#63ADF2'} onClick={e=>this.submit()}>Salvar</BtnAction>
                </BoxOpcoes>
              </BoxEdit>
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

export default ModalProfissional;