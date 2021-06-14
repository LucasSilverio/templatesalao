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
    Desativar,
    Icone,
    Input,
    Item,
    Label,
    Opcoes,
    Paragrafo,
    ParagrafoSm,
    Top,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import Upload from '../../components/upload'; 

class ModalServicoEditar extends Component {
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
    })
  }
  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.closeModal}/>
          <Container visible={this.props.visible}>
            <BoxEdit>
              <Avatar src={this.props.img != null ? this.props.img : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
              <BoxTop>
                <BoxLinha>
                  <BoxColuna>
                    <Label>Nome</Label>
                    <Input type='text' value={this.props.nome} onChange={e=>this.props.handleNome(e.target.value)}/>
                  </BoxColuna>
                  <BoxColuna>
                    <Label>Descrição</Label>
                    <Input type='text' value={this.props.descricao} onChange={e=>this.props.handleDescricao(e.target.value)}/>                    
                  </BoxColuna>
                </BoxLinha>
                <BoxLinha>                  
                  <BoxColuna>
                    <Label>Preço</Label>
                    <Input type='text' value={this.props.preco} onChange={e=>this.props.handlePreco(e.target.value)}/>
                  </BoxColuna>
                  <BoxColuna>
                    <Label>Tempo</Label>
                    <Input type='text' value={this.props.tempo} onChange={e=>this.props.handleTempo(e.target.value)}/>
                  </BoxColuna>
                </BoxLinha>
                <BoxLinha>                  
                  <BoxColuna>
                    <Label>Pontos Serviço</Label>
                    <Input type='text' value={this.props.pontosservico} onChange={e=>this.props.handlePontosServico(e.target.value)}/>
                  </BoxColuna>
                  <BoxColuna>
                    <Label>Pontos Troca</Label>
                    <Input type='text' value={this.props.pontostroca} onChange={e=>this.props.handlePontosTroca(e.target.value)}/>
                  </BoxColuna>
                </BoxLinha>
                <BoxLinha>
                  <Upload
                    servico={this.props.servico}    
                    close={this.props.closeModal}              
                  />
                </BoxLinha>
                <BoxLinha>
                  {this.props.desativado == 0 &&
                    <Desativar bgColor={'#6E3534'} onClick={e=>this.props.handleStatus(1)}>
                      Desativar Serviço
                    </Desativar>
                  }
                  {this.props.desativado == 1 &&
                    <Desativar bgColor={'#716FF2'} onClick={e=>this.props.handleStatus(0)}>
                      Ativar Serviço
                    </Desativar>
                  }
                </BoxLinha>
                <BoxLinha>
                  
                </BoxLinha>
              </BoxTop>
              <BoxOpcoes>
                <BtnAction onClick={e=>this.props.closeModal()} bgColor={'#6E3534'}>Cancelar</BtnAction>
                {this.props.loading &&
                  <Loader
                      type="TailSpin"
                      color="#716FF2"
                      height={24}
                      width={24}
                  />
                }
                {!this.props.loading &&
                  <BtnAction bgColor={'#63ADF2'} onClick={e=>this.props.submitEdition()}>Salvar</BtnAction>
                }
              </BoxOpcoes>
            </BoxEdit>
          </Container>
        </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default ModalServicoEditar;