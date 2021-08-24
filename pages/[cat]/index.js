import App from 'next/app';
import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';

import Agende from '../../components/Agende';
import Bg from '../../components/Bg';
import Box from '../../components/CliBox';
import Bottom from '../../components/BottomCli';
import Maps from '../../components/Maps'; 
import Logo from '../../components/LogoCli'; 
import TopBar from '../../components/TopBarCli'; 
import Servicos from '../../components/CliServicos'; 
import InfosFuncionamento from '../../components/InfosFuncionamento';
import DestaquesImagens from '../../components/DestaquesImagens';

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
      userContact:false,
      topVisible:true,
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleContact = this.handleContact.bind(this);   
    this.scrollTest = this.scrollTest.bind(this)
    this.handleTopVisible = this.handleTopVisible.bind(this)
  }  

  static async getInitialProps({query, res, req}) {
    let el = query.cat

    const resi = await osAPI.getInfos(el);
    const info = await resi.json();    
 
    return {
      info:info.data,
      servicos:info.servicos,
      profissionais:info.profissionais,
      imagens:info.imagens,
      teste:info,
      el,
      query,
      segunda:info.segunda,
      terca:info.terca,
      quarta:info.quarta,
      quinta:info.quinta,
      sexta:info.sexta,
      sabado:info.sabado,
      domingo:info.domingo
    }
  }  
 
  componentDidMount(){
    window.addEventListener('scroll', this.scrollTest);
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
        OneSignal.init({
            appId: "d78b30f9-ad4f-451a-b24d-9328744c59ad",
            notifyButton: {
                enable: true,
            },

            allowLocalhostAsSecureOrigin: true,
        });
    });

    return () => {
        window.OneSignal = undefined;
    };
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

  handleTopVisible(){
    this.setState({topVisible:!this.state.topVisible})
  }

  scrollTest(){
    this.setState({altura_atual:window.scrollY});
  }  

  render(){ 
    // console.log(this.state.altura_atual) 
    // console.log(this.props.teste)
    return(
      <>
        <Head>
         <meta charset='utf-8' />
         <meta http-equiv='X-UA-Compatible' content='IE=edge' />
         <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
         <meta name='description' content={'Oferecemos os melhores serviços em '+this.props.info.tipo+' em '+this.props.info.cidade+'. Baixe agora nosso APP e agende seu horário.'} />
         <meta name='keywords' content='Keywords' />
         <title>{this.props.info.nomeestabelecimento+' - Barbearia em '+this.props.info.cidade}</title>
         <link rel="manifest" href={"/manifest"+this.props.query.cat+".json"} />
         <meta name="theme-color" content={'#396186'}/>
         <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
       </Head>
       <TopBar
        infos={this.props.info} 
        visible={this.state.topVisible}
        slug={this.props.query.cat}
       />
       <Box
        infos={this.props.info}
        servicos={this.props.servicos}
        segunda={this.props.segunda}
        terca={this.props.terca}
        quarta={this.props.quarta}
        quinta={this.props.quinta}
        sexta={this.props.sexta}
        sabado={this.props.sabado}
        domingo={this.props.domingo}
       /> 
       <Servicos
        infos={this.props.info}
        servicos={this.props.servicos}
        profissionais={this.props.profissionais}
        slug={this.props.query.cat}
        handleTopVisible={this.handleTopVisible}
       />
       <DestaquesImagens 
        imagens={this.props.imagens}
       />
       <InfosFuncionamento 
        infos={this.props.info}
        servicos={this.props.servicos}
        segunda={this.props.segunda}
        terca={this.props.terca}
        quarta={this.props.quarta}
        quinta={this.props.quinta}
        sexta={this.props.sexta}
        sabado={this.props.sabado}
        domingo={this.props.domingo}
       />

       <Bottom
        infos={this.props.info}  />
      </>
    )
  }
}

export default Categoria;
