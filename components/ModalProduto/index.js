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
    Botao,
    BotaoTexto,
    BtnAction,
    BtnActionLg,
    Container,
    Icone,
    Input,
    InputSm,
    IconeBotao,
    Item,
    Label,
    Linha,
    Opcoes,
    Paragrafo,
    ParagrafoSm,
    Top,
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import {preco, onlyNumbers} from '../../services/formMask';
import Upload from '../../components/UploadProduct';

class ModalProduto extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false,
      editavel:false,
      compra:false,
      venda:false,
      nome:'',
      email:'',
      celular:'',
      datanascimento:'',
      dataEntrada:moment().format('YYYY-MM-DD'),
      quantidade:0,
      valorpago:0
    } 
    this.cleanStates = this.cleanStates.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCompras = this.handleCompras.bind(this);
    this.handleVendas = this.handleVendas.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount(){
  }

  checkAjuste = (e) =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Realizar Ajuste de Estoque?</h1>
            <p>Ao clicar em sim, o ajuste será realizado, entretanto não será realizado lançamento de saída no caixa. Caso queira lançar a saída, clique na opção "Ajustar Estoque e Realizar Lançamento Fornecedor".</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.ajuste(e);
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

  checkAjusteVenda = (e) =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Realizar Ajuste de Estoque?</h1>
            <p>Ao clicar em sim, o ajuste será realizado, entretanto não será realizado lançamento de entrada no caixa. Caso queira lançar a entrada do valor, clique em uma forma de pagamento.</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.ajusteVenda(e);
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

  checkLancamento = (e) =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Realizar Lançamento?</h1>
            <p>Ao clicar em sim, o ajuste será realizado, e será lançado uma saída no caixa no valor correspondente como "Saída Fornecedor"".</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.lancamento(e);
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

  checkLancamentoVenda = (e) =>{
    // e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertArea>
            <h1>Realizar Lançamento?</h1>
            <p>Ao clicar em sim, o ajuste no estoque será realizado, e será lançado uma entrada no caixa no valor correspondente à forma de pagamento.</p>
            <AreaBotoes>
              <BotaoC onClick={onClose}>NÃO</BotaoC>
              <BotaoC
                onClick={() => {
                  this.lancamentoVenda(e);
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
    this.setState({quantidade:0})
    this.setState({valor:0})
    this.setState({valorpago:0})
    this.setState({dataEntrada:moment().format('YYYY-MM-DD')});
  }

  handleEdit(){
    this.setState({editavel:!this.state.editavel})
    this.setState({compra:false})  
    this.setState({venda:false}) 
  }

  handleCompras(){
    this.setState({compra:!this.state.compra})
    this.setState({venda:false})    
    this.setState({editavel:false})
  }

  handleVendas(){
    this.setState({venda:!this.state.venda})
    this.setState({compra:false})    
    this.setState({editavel:false})
  }

  submit(){
    fetch(ecommerceAPI.BASE_URL_API+'produtos/edit', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          produto:this.props.id,
          nome:this.props.nome,
          valor:this.props.valor,
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.handleEdit();
        this.props.getProdutos(0, 1)
      }
    })
  }

  // lançamento de compra
  lancamento(){
    fetch(ecommerceAPI.BASE_URL_API+'produtos/compra', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          produto:this.props.id,
          quantidade:this.state.quantidade,
          valor:this.state.valorpago,
          data:this.state.dataEntrada
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.cleanStates()
        this.handleCompras();
        this.props.getProdutos(0, 1)
        this.props.getProdutoInfo(this.props.id)
      }
    })
  }

  // lançamento de venda
  lancamentoVenda(e){
    if(this.state.quantidade > 0 && this.state.valorpago > 0){
      this.setState({loading:true})
      fetch(ecommerceAPI.BASE_URL_API+'produtos/venda', {
        method:'POST',
        body:JSON.stringify({
            jwt:Cookie.get('token'),
            produto:this.props.id,
            quantidade:this.state.quantidade,
            valor:this.state.valorpago,
            data:this.state.dataEntrada,
            formapg:e
        })
      })
      .then(r=>r.json())
      .then(json=>{
        if(json.success){
          this.cleanStates()
          this.handleVendas();
          this.props.getProdutoInfo(this.props.id)
          this.setState({loading:false})
          this.props.getProdutos(0, 1)
          alert('OPERAÇÃO REALIZADA COM SUCESSO!');
        }
      })
    }else{
      alert('ATENÇÃO! O VALOR PAGO E A QUANTIDADE NÃO PODEM SER 0.');
    }
  }

  // ajuste de compra (adicionar produtos no estoque)
  ajuste(){
    fetch(ecommerceAPI.BASE_URL_API+'produtos/AjusteEstoque', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          produto:this.props.id,
          quantidade:this.state.quantidade,
          valor:this.state.valorpago,
          data:this.state.dataEntrada
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.cleanStates()
        this.handleCompras();
        this.props.getProdutoInfo(this.props.id)
        this.props.getProdutos(0, 1)
      }
    })
  }

  // ajuste de venda ou uso interno (subtrair produtos do estoque) 
  ajusteVenda(){
    fetch(ecommerceAPI.BASE_URL_API+'produtos/AjusteEstoqueReduzir', {
      method:'POST',
      body:JSON.stringify({
          jwt:Cookie.get('token'),
          produto:this.props.id,
          quantidade:this.state.quantidade,
          valor:this.state.valorpago,
          data:this.state.dataEntrada
      })
    })
    .then(r=>r.json())
    .then(json=>{
      if(json.success){
        this.cleanStates()
        this.handleVendas();
        this.props.getProdutoInfo(this.props.id)
        this.props.getProdutos(0, 1)
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
                  <Avatar src={this.props.img != null ? this.props.img : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                  <BoxTop>
                    <Paragrafo>{this.props.nome}</Paragrafo>
                    <BoxLinha>
                      <ParagrafoSm>{'Estoque atual: '+this.props.estoque}</ParagrafoSm>
                    </BoxLinha>
                    <BoxLinha>
                      <ParagrafoSm>R${this.props.valor}</ParagrafoSm>
                    </BoxLinha>
                  </BoxTop>
                </Top>
                <Opcoes>
                  <BtnAction bgColor={'#F2A57C'} onClick={e=>this.handleEdit()}>Editar Cadastro</BtnAction>
                  <BtnAction bgColor={'#6E3534'} onClick={e=>this.handleCompras()}>Compras</BtnAction>
                  <BtnAction bgColor={'#63ADF2'} onClick={e=>this.handleVendas()}>Venda</BtnAction>
                </Opcoes>
                <Box>
                  {/* {this.props.historico.map((i, index) => (
                    <Item bgColor={i.statusval == 2 ? '#63ADF2' : '#6E3534'}>
                      <ParagrafoSm><strong>{i.data}</strong></ParagrafoSm>
                      <ParagrafoSm>{'Profissional: '+i.profissional}</ParagrafoSm>
                      <ParagrafoSm>{i.servico}</ParagrafoSm>
                      <ParagrafoSm>{i.status}</ParagrafoSm>
                    </Item>
                  ))} */}
                </Box>
              </>
            }
            {this.state.editavel &&
              <BoxEdit>
                <Avatar src={this.props.img != null ? this.props.img : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                <BoxTop>
                  <BoxLinha>
                    <BoxColuna>
                      <Label>Nome</Label>
                      <Input type='text' value={this.props.nome} onChange={e=>this.props.handleNome(e.target.value)}/>
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Valor</Label>
                      <Input type='text' value={this.props.valor} onChange={e=>this.props.handleValor(e.target.value)}/>                    
                    </BoxColuna>
                  </BoxLinha>
                </BoxTop>                
                <Opcoes>
                  <Upload
                    id={this.props.id}
                    getProdutoInfo={this.props.getProdutoInfo}
                  />
                </Opcoes>
                <BoxOpcoes>
                  <BtnAction onClick={e=>this.handleEdit()} bgColor={'#6E3534'}>Cancelar</BtnAction>
                  <BtnAction bgColor={'#63ADF2'} onClick={e=>this.submit()}>Salvar</BtnAction>
                </BoxOpcoes>
              </BoxEdit>
            }
            {this.state.compra &&
              <BoxEdit>
                <BoxTop>
                  <BoxLinha>
                    <Paragrafo>Lançar Compra / Ajustar Estoque</Paragrafo>
                  </BoxLinha>
                    <Linha />
                  <BoxLinha>
                    <BoxColuna>
                      <Label>Data de Entrada</Label>
                      <InputSm type='date' value={this.state.dataEntrada} onChange={e=>this.setState({dataEntrada:e.target.value})}/>
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Quantidade</Label>
                      <InputSm type='text' value={this.state.quantidade} onChange={e=>this.setState({quantidade:onlyNumbers(e.target.value)})}/>                    
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Valor Pago</Label>
                      <InputSm type='text' value={this.state.valorpago} onChange={e=>this.setState({valorpago:preco(e.target.value)})}/>                    
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Total</Label>
                      <InputSm type='text' readOnly value={'R$'+(this.state.quantidade * this.state.valorpago).toFixed(2)} />                    
                    </BoxColuna>
                  </BoxLinha>
                </BoxTop>
                <BoxOpcoes>
                  <BtnActionLg onClick={e=>this.handleCompras()} bgColor={'#6E3534'}>Cancelar</BtnActionLg>
                  <BtnActionLg bgColor={'#716FF2'} onClick={e=>this.checkAjuste()}>Ajustar Estoque</BtnActionLg>
                  <BtnActionLg bgColor={'#63ADF2'} onClick={e=>this.checkLancamento()}>Ajustar Estoque e Realizar Lançamento Fornecedor</BtnActionLg>
                </BoxOpcoes>
              </BoxEdit>
            }
            {this.state.venda &&
              <BoxEdit>
                <BoxTop>
                  <BoxLinha>
                    <Paragrafo>Lançar Venda / Ajustar Estoque</Paragrafo>
                  </BoxLinha>
                    <Linha />
                  <BoxLinha>
                    <BoxColuna>
                      <Label>Data de Venda</Label>
                      <InputSm type='date' value={this.state.dataEntrada} onChange={e=>this.setState({dataEntrada:e.target.value})}/>
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Quantidade</Label>
                      <InputSm type='text' value={this.state.quantidade} onChange={e=>this.setState({quantidade:onlyNumbers(e.target.value)})}/>                    
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Valor Pago (unidade)</Label>
                      <InputSm type='text' value={this.state.valorpago} onChange={e=>this.setState({valorpago:preco(e.target.value)})}/>                    
                    </BoxColuna>
                    <BoxColuna>
                      <Label>Total</Label>
                      <InputSm type='text' readOnly value={'R$'+(this.state.quantidade * this.state.valorpago).toFixed(2)} />                    
                    </BoxColuna>
                  </BoxLinha>
                </BoxTop>
                {!this.state.loading &&
                  <>
                    <BoxOpcoes>
                      <BtnActionLg onClick={e=>this.handleVendas()} bgColor={'#6E3534'}>Cancelar</BtnActionLg>
                      <BtnActionLg bgColor={'#716FF2'} onClick={e=>this.checkAjusteVenda()}>Ajustar Estoque</BtnActionLg>                  
                    </BoxOpcoes>
                    <BoxOpcoes>
                      <Botao onClick={e=>this.checkLancamentoVenda(1)}>
                        <IconeBotao src='/dinheiro.png' />
                        <BotaoTexto>Dinheiro</BotaoTexto>
                      </Botao>
                      <Botao onClick={e=>this.checkLancamentoVenda(2)}>
                    <IconeBotao src='/cheque.png' />
                    <BotaoTexto>Cheque</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.checkLancamentoVenda(3)}>
                    <IconeBotao src='/cartao.png' />
                    <BotaoTexto>Débito</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.checkLancamentoVenda(4)}>
                    <IconeBotao src='/cartao.png' />
                    <BotaoTexto>Crédito</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.checkLancamentoVenda(5)}>
                    <IconeBotao src='/outro.png' />
                    <BotaoTexto>Outro</BotaoTexto>
                    </Botao>
                    <Botao onClick={e=>this.checkLancamentoVenda(e)}>
                    <IconeBotao src='/pontos.png' />
                    <BotaoTexto>Pontuação</BotaoTexto>
                    </Botao>
                    </BoxOpcoes>
                  </>
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

export default ModalProduto;