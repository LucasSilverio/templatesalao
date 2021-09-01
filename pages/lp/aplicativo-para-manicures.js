import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Head from 'next/head';
import Router from 'next/router';

import Banner from '../../components/BannerLp'; 
import Comecar from '../../components/Comecar';
import TopBar from '../../components/TopBar'; 
import Recursos from '../../components/Recursos';
import Example from '../../components/ExampleLp';
import Divisao from '../../components/Divisao';
import Bottom from '../../components/Bottom';
import Vantagens from '../../components/Vantagens';
import PrecoLp from '../../components/PrecoLp';
import Garantias from '../../components/Garantias';

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
    import('react-facebook-pixel')
    .then((x) => x.default)
    .then((ReactPixel) => {
      ReactPixel.init('135083928579550'); 
      ReactPixel.pageView();
      ReactPixel.track('ViewContent',{
        content_name:'Manicure'
      })

      Router.events.on('routeChangeComplete', () => {
        // ReactPixel.pageView();
        // ReactPixel.track('ViewContent',{
        // })
      });
    });
  }

  action_lead(){
    import('react-facebook-pixel')
    .then((x) => x.default)
    .then((ReactPixel) => {
      ReactPixel.init('135083928579550'); 
      // ReactPixel.pageView();
      ReactPixel.track('ViewContent',{
        content_name:'Manicure'
      })

      Router.events.on('routeChangeComplete', () => {
      });
    });
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
          <meta name='description' content='Aplicativo completo para manicures. Controle sua agenda e as finanças do seu negócio através do seu celular. Cadastre-se gratuitamente!' />
          <meta name='keywords' content='Keywords' />
          <title>Aplicativo de Gestão e Agendamento para Manicures | TheShave</title>
          <meta name="theme-color" content="#716FF2"/>
       </Head>
       <TopBar 
        bgcolor={'#343261'}
        altura={this.state.altura_atual}
       />
       <Banner
        bg={'manicure.jpg'}
        textoPrincipal={'O aplicativo ideal para Mssssanicures. Gerencie sua agenda e suas finanças através do nosso aplicativo no seu celular.'}
        textoSecundario={'Vamos te ajudar a crescer, automatizando os processos burocráticos do seu negócio, assim sobra mais tempo para você ganhar mais dinheiro!'}
        action_lead={this.action_lead}
       />
       <Divisao />
       <Example />
       <Divisao />
       <Recursos />
       <Vantagens />
       <Garantias />
       <PrecoLp
         action_lead={this.action_lead}
       />
       <Bottom />
      </>
    )
  }
}

export default Home;
