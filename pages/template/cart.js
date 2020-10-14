import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Head from 'next/head';
import osAPI from '../../services/osAPI';

import Carrinho from '../../components/Carrinho';
import TopBarMobile from '../../components/TopBarMobile';

class Cart extends Component {

  constructor(props){
    super(props);
    this.state={
      cart:[],
      subtotal:0
    }
  }

//   static async getInitialProps({query, res}) {
//     const el = query.slug
//     const r = await osAPI.getProdutos(query.slug);
//     const json = await r.json();
//     if(!json.logged){
//       res.writeHead(301, {
//         Location:'/template'
//       });
//       res.end();
//     }
   
//     return {
//       info:json,
//       slug:el,
//       // teste:res
//     }
//   }

  componentDidMount(){
    this.loadCart();
  }


loadCart(){
  // this.props.setLoading(true);
  this.setState({cart:[]});
  let sbt = 0;
  JSON.parse(Cookie.get('cart')).map((i, index) => (
    osAPI.getProductById(Cookie.get('token'), i.id, i.qtd)
    .then(r=>r.json())
    .then(json=>{       
      console.log(json)
        this.setState({cart:this.state.cart.concat(json.data)});
        sbt = sbt + (json.data.valor * i.qtd);
        this.setState({subtotal:sbt});

        // this.setState({loading:false});
        // this.calcularFrete();
        // this.props.setLoading(false);
    })
  ));
  
  // this.props.setLoading(false); 
}

  render(){
    console.log(this.state.cart);
    console.log('Subtotal: '+this.state.subtotal);
    return(
      <>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <title>Cart | Template</title>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="theme-color" content="#E887B2"/>
       </Head>
       <TopBarMobile 
        bgcolor={'#343261'}
       />
       <Carrinho
        cartItems={this.state.cart}
        subtotal={this.state.subtotal}

       />
      </>
    )
  }
}

export default Cart;
