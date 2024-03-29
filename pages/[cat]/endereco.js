import App from 'next/app';
import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';

import Agende from '../../components/Agende';
import Bg from '../../components/Bg';
import Bottom from '../../components/BottomCli';
import Maps from '../../components/Maps';
import Logo from '../../components/LogoCli';
import TopBar from '../../components/TopBarCli';

import osAPI from '../../services/osAPI';


class Categoria extends Component {

  constructor(props){
    super(props);
    this.state={
      logged:0,
      exibirModal:false,
      titulo:'',
      subtitulo:'',
      altura_atual:0,
      userContact:false
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleContact = this.handleContact.bind(this);   
    this.scrollTest = this.scrollTest.bind(this)
  } 

  static async getInitialProps({query, res, req}) {
    let el = query.cat

    const resi = await osAPI.getInfos(el);
    const info = await resi.json();    
 
    return {
      info:info.data,
      query
    }
  }
  
 
  componentDidMount(){
    window.addEventListener('scroll', this.scrollTest);
  }

  handleModal(){
    if(Cookie.get('mp') == undefined && this.state.popup){
      this.setState({exibirModal:!this.state.exibirModal});
      Cookie.set('mp', 1, { expires: 0.2 });
    }
  }

  handleContact(){
    this.setState({userContact:true});
    this.setState({exibirModal:!this.state.exibirModal});
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
         <title>{this.props.info.nomeestabelecimento+' - Barbearia em '+this.props.info.cidade}</title>
         <link rel="manifest" href="/manifest.json" />
         <meta name="theme-color" content={'#000'}/>
       </Head>
       <TopBar
        infos={this.props.info} 
       />
       <Bg />
       <Logo
        infos={this.props.info}  /> 
       <Maps
        mob={true}
        infos={this.props.info}  />
       <Bottom
        infos={this.props.info}  />
      </>
    )
  }
}

export default Categoria;
