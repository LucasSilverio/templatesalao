import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Head from 'next/head';

import AppArea from '../components/AppArea';
import Banner from '../components/Banner';
import Comentarios from '../components/Comentarios';
import Destaques from '../components/Destaques';
import TopBar from '../components/TopBar';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
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
          <title>Home | Nome do Estabelecimento</title>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="theme-color" content="#E887B2"/>
       </Head>
       <TopBar 
        bgcolor={'#343261'}
       />
       <Banner />
       <Destaques />
       <Comentarios />
       <AppArea />
      </>
    )
  }
}

export default Home;
