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
import {onlyNumbers, horario, preco} from '../../services/formMask';

class ModalServicoNovo extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      editavel:false,
      nome:'',
      descricao:'',
      preco:'',
      tempo:'',
      pontosservico:'',
      pontostroca:'',
      img:''
    } 
    this.handleEdit = this.handleEdit.bind(this);
    this.submit = this.submit.bind(this);
    this.cleanStates = this.cleanStates.bind(this);
    this.close = this.close.bind(this);
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

  close(){
    this.cleanStates();
    this.props.closeModal();
  }

  cleanStates(){
    this.setState({nome:''})
    this.setState({descricao:''})
    this.setState({preco:''})
    this.setState({tempo:''})
    this.setState({pontosservico:''})
    this.setState({pontostroca:''})
    this.setState({img:''})
  }

  handleEdit(){
    this.setState({editavel:!this.state.editavel})
  }

  submit(){
    if(this.state.nome != '' && this.state.preco != '' && this.state.descricao != '' && this.state.tempo != ''){
      this.setState({loading:true})
      fetch(ecommerceAPI.BASE_URL_API+'services/add', {
        method:'POST',
        body:JSON.stringify({
            jwt: Cookie.get('token'),
            nome:this.state.nome,
            preco:this.state.preco,
            tempo:this.state.tempo,
            descricao:this.state.descricao
        })
      })
      .then(r=>r.json())
      .then(json=>{
        this.setState({loading:false})
        this.cleanStates();
        this.props.closeModal();
        this.props.getServicos();
      })
    }
    
  }
  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.close}/> 
          <Container visible={this.props.visible}>
            <BoxEdit>
              <Avatar src={this.props.img != null ? this.props.img : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
              <BoxTop>
                <BoxLinha>
                  <BoxColuna>
                    <Label>Nome</Label>
                    <Input type='text' value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})}/>
                  </BoxColuna>
                  <BoxColuna>
                    <Label>Descrição</Label>
                    <Input type='text' value={this.state.descricao} onChange={e=>this.setState({descricao:e.target.value})}/>                    
                  </BoxColuna>
                </BoxLinha>
                <BoxLinha>                  
                  <BoxColuna>
                    <Label>Preço</Label>
                    <Input type='text' value={this.state.preco} onChange={e=>this.setState({preco:preco(e.target.value)})}/>
                  </BoxColuna>
                  <BoxColuna>
                    <Label>Tempo</Label>
                    <Input type='text' value={this.state.tempo} onChange={e=>this.setState({tempo:horario(e.target.value)})}/>
                  </BoxColuna>
                </BoxLinha>
                <BoxLinha>                  
                  <BoxColuna>
                    <Label>Pontos Serviço</Label>
                    <Input type='text' value={this.state.pontosservico} onChange={e=>this.setState({pontosservico:onlyNumbers(e.target.value)})}/>
                  </BoxColuna>
                  <BoxColuna>
                    <Label>Pontos Troca</Label>
                    <Input type='text' value={this.state.pontostroca} onChange={e=>this.setState({pontostroca:onlyNumbers(e.target.value)})}/>
                  </BoxColuna>
                </BoxLinha>
                <BoxLinha>
                  {/* <Upload
                    servico={this.props.servico}                  
                  /> */}
                </BoxLinha>
              </BoxTop>
              <BoxOpcoes>
                <BtnAction onClick={e=>this.close()} bgColor={'#F22E33'}>Cancelar</BtnAction>
                {this.props.loading &&
                  <Loader
                      type="TailSpin"
                      color="#716FF2"
                      height={24}
                      width={24}
                  />
                }
                {!this.props.loading &&
                  <BtnAction bgColor={'#5C6BF2'} onClick={e=>this.submit()}>Salvar</BtnAction>
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

export default ModalServicoNovo;