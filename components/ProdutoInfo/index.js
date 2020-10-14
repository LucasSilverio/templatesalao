import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Cookie from 'js-cookie'
import { Carousel } from 'react-responsive-carousel';
import { 
    BtnCart,
    BtnIcon,
    Container,
    ImagemArea,
    Img,
    Icon,
    InfoArea,
    Texto,
    TextoL,
    TopArea,
    ProdArea
} from './styled';
import Loader from 'react-loader-spinner'
import osAPI from '../../services/osAPI';

class Feed extends Component {

  constructor(props){
    super(props);
    this.state={
      qtd:1
    }

    this.addCart = this.addCart.bind(this);
  } 

  addCart(e){
    if(Cookie.get('cart') == undefined){
      Cookie.set('cart', JSON.stringify([]));
    }
    
    let objCart = JSON.parse(Cookie.get('cart'));
    let newProduct = true;

    objCart.map((children, index)=>{
      if(children.id === e){
          objCart[index].qtd += this.state.qtd;
          Cookie.set('cart', JSON.stringify(objCart));
          // this.props.addCart(objCart);
          console.log(objCart);
          newProduct = false;
      }
    });

    if(newProduct){
      objCart.push({
          id: e,
          qtd: this.state.qtd,
      });
      Cookie.set('cart', JSON.stringify(objCart));
      // this.props.addCart(objCart);
      console.log(objCart)
      // this.props.updateCartQtd(this.state.qt);
    }
    Router.push('/template/cart');

  }

  componentDidMount(){
      // console.log(this.props.produto)
  }

  render(){
      console.log(this.props.produto)
    return(
        <Container>
            <TopArea>
              <BtnIcon onClick={()=>Router.back()}><Icon src='/back.png' /></BtnIcon>
            </TopArea>
            <ProdArea>
                <ImagemArea>
                  <Img src={this.props.produto.img} />
                </ImagemArea>
                <InfoArea>
                  <Texto>{this.props.produto.nome}</Texto>
                  <TextoL>{'R$'+this.props.produto.valor}</TextoL>
                  <Link href={'https://api.whatsapp.com/send?phone=5534996960659'+'&text=Olá, fiquei interessado no produto '+this.props.produto.nome}>
                    <a target="_blank" rel="noreferrer">
                      <BtnCart>Chamar no Zap</BtnCart> 
                    </a>
                  </Link>
                </InfoArea>
            </ProdArea>
        </Container>
    )
  }
}

export default Feed;