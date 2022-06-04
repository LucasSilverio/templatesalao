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
    InputLg,
    Item,
    Label,
    Opcoes,
    Paragrafo,
    ParagrafoSm,
    Top,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import { LoaderArea } from '../ModalNovoCliente/styled';

class ModalCliente extends Component {
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
    this.submit = this.submit.bind(this);
  }

  componentDidMount(){
    this.setState({nome:this.props.infos.name})
    this.setState({email:this.props.infos.email})
    this.setState({celular:this.props.infos.celular})
    this.setState({datanascimento:this.props.infos.datanascimento})
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
    this.setState({loading:true})
    fetch(ecommerceAPI.BASE_URL_API+'users/updateUserPainel', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          cliente:this.props.infos.id,
          email:this.props.emailcliente,
          name:this.props.nomecliente,
          celular:this.props.celularcliente,
          datanascimento:this.props.nascimentocliente
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.handleEdit();
        this.props.getClientInfo(this.props.infos.id)
        // this.props.closeModal();
        // this.props.getAgenda(this.props.dataselecionada);
      }

      this.setState({loading:false})
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
                  <Avatar src={this.props.infos.avatar != null ? this.props.infos.avatar : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                  <BoxTop>
                    <Paragrafo>{this.props.infos.name}</Paragrafo>
                    {/* <Input type='text' value={this.state.nome} /> */}
                    <BoxLinha>
                      <ParagrafoSm>{this.props.infos.email}</ParagrafoSm>
                      {this.props.infos.celular &&
                        <>
                          <Icone src='/whatsapp.png' />
                          <Link href={'//wa.me/55'+this.props.infos.celular.replace(/[()-]/g, '')} > 
                              <a target={"_blank"}>
                                  <ParagrafoSm>{this.props.infos.celular}</ParagrafoSm>
                              </a>
                          </Link>
                        </>
                      }
                    </BoxLinha>
                    <BoxLinha>
                      <ParagrafoSm>Data de nascimento: {this.props.infos.nascimento != null ? moment(this.props.infos.nascimento).format('DD/MM/YY') : 'Não informado'}</ParagrafoSm>
                    </BoxLinha>
                  </BoxTop>
                </Top>
                <Opcoes>
                  <BtnAction bgColor={'#5C6BF2'} onClick={e=>this.handleEdit()}>Editar Cadastro</BtnAction>
                </Opcoes>
                <Box>
                  {this.props.historico.map((i, index) => (
                    <Item bgColor={i.statusval == 2 ? '#709BFF' : '#F22E33'}>
                      <ParagrafoSm><strong>{i.data}</strong></ParagrafoSm>
                      <ParagrafoSm>{'Profissional: '+i.profissional}</ParagrafoSm>
                      <ParagrafoSm>{i.servico}</ParagrafoSm>
                      <ParagrafoSm>{i.status}</ParagrafoSm>
                    </Item>
                  ))}
                </Box>
              </>
            }
            {this.state.editavel && !this.state.loading &&
              <BoxEdit>
                <Avatar src={this.props.infos.avatar != null ? this.props.infos.avatar : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                <BoxTop>
                  <Label>Nome</Label>
                  <InputLg type='text' value={this.props.nomecliente} onChange={e=>this.props.handleNome(e.target.value)}/>
                  <BoxLinha>
                    <BoxColuna>
                      <Label>E-mail</Label>
                      <Input type='text' value={this.props.emailcliente} onChange={e=>this.props.handleEmail(e.target.value)}/>                    
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Celular</Label>
                      <Input type='text' value={this.props.celularcliente} onChange={e=>this.props.handleCelular(e.target.value)}/>
                    </BoxColuna>
                  </BoxLinha>
                  <BoxLinha>
                    <BoxColuna>
                      <Label>Data de Nascimento</Label>
                      <Input type='date' value={this.props.nascimentocliente} onChange={e=>this.props.handleNascimento(e.target.value)}/>
                    </BoxColuna>
                  </BoxLinha>
                </BoxTop>
                <BoxOpcoes>
                  <BtnAction onClick={e=>this.handleEdit()} bgColor={'#F22E33'}>Cancelar</BtnAction>
                  <BtnAction bgColor={'#5C6BF2'} onClick={e=>this.submit()}>Salvar</BtnAction>
                </BoxOpcoes>
              </BoxEdit>
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

export default ModalCliente;