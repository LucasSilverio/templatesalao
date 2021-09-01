import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Head from 'next/head';
import Router from 'next/router';

import Banner from '../../components/BannerLp'; 
import Comecar from '../../components/Comecar';
import TopBar from '../../components/TopBarFeed'; 
import Recursos from '../../components/Recursos';
import Example from '../../components/ExampleLp';
import Divisao from '../../components/Divisao';
import Bottom from '../../components/Bottom';
import FeedEstabelecimentos from '../../components/FeedEstabelecimentos';
import Vantagens from '../../components/Vantagens';
import Garantias from '../../components/Garantias';
import PrecoLp from '../../components/PrecoLp';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      altura_atual:0
    } 
    this.scrollTest = this.scrollTest.bind(this);
  }

  static async getInitialProps({query, res, req}) {
    let cidade = query.slug
       
 
    return {
      cidade
    }
  }  

  componentDidMount(){
    console.log(this.props.el)
    window.addEventListener('scroll', this.scrollTest);
    // import('react-facebook-pixel')
    // .then((x) => x.default)
    // .then((ReactPixel) => {
    //   ReactPixel.init('135083928579550'); 
    //   ReactPixel.pageView();
    //   ReactPixel.track('ViewContent',{
    //     content_name:'Barbearia'
    //   })

    //   Router.events.on('routeChangeComplete', () => {
    //     // ReactPixel.pageView();
    //     // ReactPixel.track('ViewContent',{
    //     // })
    //   });
    // });
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
          <meta name='description' content='Aplicativo completo para gestão da sua barbearia. Controle sua agenda e ofereça um aplicativo próprio de auto agendamento paraa seus clientes. Cadastre-se gratuitamente!' />
          <meta name='keywords' content='Keywords' />
          <title>As melhores barbearias em {this.props.cidade} | TheShave</title>
          <meta name="theme-color" content="#716FF2"/>
       </Head>
       <TopBar 
        bgcolor={'#343261'}
        tipo={1}
        cidade={this.props.cidade}
        altura={this.state.altura_atual}
       />
       <FeedEstabelecimentos
        categoria={'Barbearia'}
        tipo={1}
        cidade={this.props.cidade}
       />
       {/* <Banner
        bg={'barbearia.jpg'}
        textoPrincipal={'O aplicativo ideal para Barbearias. Gerencie sua agenda e suas finanças através do nosso aplicativo no seu celular.'}
        textoSecundario={'Vamos te ajudar a crescer, automatizando os processos burocráticos da sua barbearia, assim sobra mais tempo para você ganhar mais dinheiro!'}
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
       /> */}
       <Bottom />
      </>
    )
  }
}

export default Home;
