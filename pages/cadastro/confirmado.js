import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Head from 'next/head';

import Bg from '../../components/BgColor';
import Confirmado from '../../components/Confirmado';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      altura_atual:0
    } 
    this.scrollTest = this.scrollTest.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollTest);
  }

  scrollTest(){
    this.setState({altura_atual:window.scrollY});
  }

  render(){
    
    return(
      <>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <title>The Shave | App de Agendamento para Barbearias e Salões de Beleza</title>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="theme-color" content="#716FF2"/>
       </Head>
       <Bg />
       <Confirmado />
       {/* <TopBar 
        bgcolor={'#343261'}
        altura={this.state.altura_atual}
       />
       <Banner />
       <Divisao />
       <Recursos />
       <Divisao />
       <Example />
       <Divisao />
       <Comecar />
       <Bottom /> */}
       {/* <Destaques /> */}
       {/* <Comentarios /> */}
       {/* <AppArea /> */}
      </>
    )
  }
}

export default Home;
