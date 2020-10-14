import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Cookie from 'js-cookie'
import { Carousel } from 'react-responsive-carousel';
import { 
    Container,
    ItemPic,
    MobItemArea,
    MobItemPicArea,
    MobItemTitleArea,
    MobItemTitleText,

    MobItemOptionsArea,
    MobItemPriceArea,
    MobPriceText,
    MobItemIncrementArea,
    QtdBox,
    QtdEl,
    MobItemRemoveArea,
    RemoveIcon,
    PriceArea,
    SubtotalArea,
    Subtotal,
    Valor

} from './styled';
import Loader from 'react-loader-spinner'
import osAPI from '../../services/osAPI';

class Carrinho extends Component {

  constructor(props){
    super(props);
    this.state={
      qtd:1
    }
  } 

  componentDidMount(){
      // console.log(this.props.produto)
  }

  render(){
    return(
        <Container>
            {this.props.cartItems.map((i, index) => (
                <div key={index}>
                    <MobItemArea>
                        <MobItemPicArea>
                          <ItemPic src={i.img} />
                        </MobItemPicArea>
                        <MobItemTitleArea>
                          <MobItemTitleText>
                            {i.nome}
                          </MobItemTitleText>
                        </MobItemTitleArea>
                      </MobItemArea>

                      <MobItemOptionsArea>
                        <MobItemPriceArea>
                          <MobPriceText>{'R$'+i.valor}</MobPriceText>
                        </MobItemPriceArea>
                        <MobItemIncrementArea>
                            <QtdBox>
                              <QtdEl onClick={e=>this.minus(i.id)}>-</QtdEl>
                              <QtdEl>
                                {JSON.parse(Cookie.get('cart')).map((e, el) => (
                                  <>
                                  {e.id === i.id &&
                                    e.qtd
                                  }
                                  </>
                                ))}
                              </QtdEl>
                              <QtdEl onClick={e=>this.plus(i.id)}>+</QtdEl>
                            </QtdBox>
                        </MobItemIncrementArea>
                        <MobItemRemoveArea>
                          <RemoveIcon onClick={e=>this.remove(index)} src='/remover.png' />
                        </MobItemRemoveArea>
                      </MobItemOptionsArea>
                </div>
            ))}
            <PriceArea>
                <SubtotalArea>
                    <Subtotal>Subtotal</Subtotal>
                    {this.props.loading &&
                      <Valor>
                        <Loader
                          type="TailSpin"
                          color="#E887B2"
                          height={24}
                          width={24}
                          // timeout={1000}
                        />
                      </Valor>
                    }
                    {!this.props.loading &&
                      <Valor>{'R$'+this.props.subtotal.toFixed(2)}</Valor>
                    }                    
                </SubtotalArea>                 
            </PriceArea>
        </Container>
    )
  }
}

export default Carrinho;