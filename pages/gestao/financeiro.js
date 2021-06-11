import React, { Component } from 'react';
import Head from 'next/head'
import Cookie from 'js-cookie';
import Router from 'next/router';

import MenuLeft from '../../components/MenuLeft';
import TopBar from '../../components/TopBar';
import { InfoAreaUnder } from '../../components/MainStyled';
import Financeiro from '../../components/Financeiro';
import osAPI from '../../services/osAPI';
 
class Painel extends Component {

  constructor(props){
    super(props);
    this.state={
      logged:0,
      exibirModal:false,
      popup:false,
    }
  }

  componentDidMount(){
  }

  checkPopup(){
  }

  handleModal(){

  }

  render(){
    return(
      <>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <meta name='description' content={'Escritório de contabilidade em Frutal-Mg.'}/>
          <meta name='keywords' content='Keywords' />
          <title>Contonline - Painel</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content={'#FFF'}/>
         {/* <script src="//code.jivosite.com/widget/kKrv7B4GQd" async></script> */}
       </Head>
       <TopBar />
       <MenuLeft />
       <InfoAreaUnder>
         <Financeiro />
       </InfoAreaUnder>   
      </>
    )
  }
} 

export default Painel;
