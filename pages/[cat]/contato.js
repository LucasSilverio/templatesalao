import React, { Component } from 'react';
import Head from 'next/head'
import Cookie from 'js-cookie';
import Router from 'next/router';
import osAPI from '../../services/osAPI';

import {AreaSite} from '../../components/MainStyled';
import Bottom from '../../components/Bottom';
import ContatoForm from '../../components/Templates/Tp01/Contato';
import MenuFixed from '../../components/MenuFixed';
import Maps from '../../components/Maps';

// Template 02 ***************
import ContatoFormTp02 from '../../components/Templates/Tp02/Contato';
// ***************************

class Contato extends Component {

  constructor(props){
    super(props);
    this.state={
      logged:0,
      exibirModal:false,
      popup:false,
    }
  }
 
  static async getInitialProps({query}) {
    let el = query.cat
    const res = await osAPI.getInfos(el);
    const info = await res.json();
    return {
      info:info.data,
      el
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
        <title>{'Renove Escritório de Contabilidade | Contato'}</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={'#FFF'}/>
       </Head>
       <AreaSite onMouseLeave={e=>this.handleModal()}>
            <MenuFixed
                infos={this.props.info}
                clientslug={this.props.el}
            />
            <Maps />
            <ContatoFormTp02
              infos={this.props.info}
              clientslug={this.props.el}
            />
            <Bottom
              infos={this.props.info}
            />
       </AreaSite>
      </>
    )
  }
} 

export default Contato;
 