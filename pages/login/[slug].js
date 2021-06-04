import App from 'next/app';
import React, { Component } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Cookie from 'js-cookie';
import osAPI from '../../services/osAPI';

import { Container } from '../../components/MainStyled';
import FormReset from '../../components/FormReset';
import MenuLogin from '../../components/MenuLogin';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
    } 
  } 

  static async getInitialProps({query, res, req}) {
    const el = query.slug
    const r = await osAPI.passManager(el);
    const json = await r.json()
    if(!json.success){
        res.writeHead(301, {
          Location:'/login'
        });
        res.end();
    }
    
    return {
      data:json.data,
      query,
      item:el,
      info:json
    }
  }

  render(){
      console.log(this.props.info.success)
    return(
      <Container>
        <Head>
         <meta charset='utf-8' />
         <meta http-equiv='X-UA-Compatible' content='IE=edge' />
         <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
         <meta name='description' content='Description' />
         <meta name='keywords' content='Keywords' />
         <meta name="robots" content="noindex" />
         <title>{'Redefinir Senha'}</title>
         <meta name="theme-color" content="#5C6BF2"/>
       </Head>
       <MenuLogin />
       <FormReset 
        token={this.props.item}
       />       
      </Container>
    )
  }
}


export default Login;
