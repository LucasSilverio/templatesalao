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
      ReactPixel.init('306492637840498'); 
      ReactPixel.pageView();
      ReactPixel.track('ViewContent',{
        content_name:'Salao'
      })

      Router.events.on('routeChangeComplete', () => {
        // ReactPixel.pageView();
        // ReactPixel.track('ViewContent',{
        // })
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
          <meta name='description' content='Aplicativo completo para gestão do seu salão. Controle sua agenda e ofereça um aplicativo próprio de auto agendamento paraa seus clientes. Cadastre-se gratuitamente!' />
          <meta name='keywords' content='Keywords' />
          <title>Aplicativo de Gestão e Agendamento para Salão de Beleza | TheShave</title>
          <meta name="theme-color" content="#716FF2"/>
       </Head>
       <TopBar 
        bgcolor={'#343261'}
        altura={this.state.altura_atual}
       />
       <Banner
        bg={'salao.jpg'}
        textoPrincipal={'O aplicativo ideal para Salão de Beleza. Gerencie sua agenda e suas finanças através do nosso aplicativo no seu celular.'}
        textoSecundario={'Vamos te ajudar a crescer, automatizando os processos burocráticos da sua barbearia, assim sobra mais tempo para você ganhar mais dinheiro!'}
       />
       <Divisao />
       <Example />
       <Divisao />
       <Recursos />
       <Vantagens />
       <PrecoLp />
       <Bottom />
      </>
    )
  }
}

export default Home;
