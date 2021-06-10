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
    Top,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {preco} from '../../services/formMask';

class ModalNovoProduto extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      editavel:false,
      nome:'',
      valor:0
    } 
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

  cleanStates(){
    this.setState({nome:''})
    this.setState({valor:''})
  }

  close(){
    this.cleanStates();
    this.props.handleModal();
  }

  submit(){
    if(this.state.nome != '' && this.state.valor > 0){
      this.setState({loading:true});
      fetch(ecommerceAPI.BASE_URL_API+'produtos/newProd', {
        method:'POST',
        body:JSON.stringify({
            jwt:Cookie.get('token'),
            nome:this.state.nome,
            valor:this.state.valor
        })
      })
      .then(r=>r.json())
      .then(json=>{
        if(json.success){
          this.cleanStates();
          this.props.handleModal();
          this.props.getProdutos();
          alert('Cadastro realizado com sucesso!');
          this.setState({loading:false});
        }
      })
    }else{
      alert('ATENÇÃO! CHEQUE AS INFORMAÇÕES.')
    }
  }
  
  render(){     
    
    return(   
        <>
          <BackArea visible={this.props.visible} onClick={this.props.handleModal}/>
          <Container visible={this.props.visible}>
            <BoxEdit>
              {/* <Avatar src={this.props.infos.avatar != null ? this.props.infos.avatar : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} /> */}
              <Paragrafo>Cadastrar novo produto</Paragrafo>
              <BoxTop>
                <BoxLinha>
                  <BoxColuna>
                    <Label>Nome</Label>
                    <Input type='text' value={this.state.nome} onChange={e=>this.setState({nome:e.target.value})}/>                    
                  </BoxColuna>
                  <BoxColuna>
                    <Label>Valor</Label>
                    <Input type='text' value={this.state.valor} onChange={e=>this.setState({valor:preco(e.target.value)})}/>
                  </BoxColuna>
                </BoxLinha>
                <BoxLinha>
                </BoxLinha>
              </BoxTop>
              {!this.state.loading &&
                <BoxOpcoes>
                  <BtnAction onClick={this.close} bgColor={'#6E3534'}>Cancelar</BtnAction>
                  <BtnAction bgColor={'#63ADF2'} onClick={e=>this.submit()}>Salvar</BtnAction>
                </BoxOpcoes>
              }
              {this.state.loading &&
                <BoxOpcoes>
                  <Loader
                      type="TailSpin"
                      color="#716FF2"
                      height={48}
                      width={48}
                  />
                </BoxOpcoes>
              }
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

export default ModalNovoProduto;