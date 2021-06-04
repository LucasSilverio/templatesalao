import React, { Component } from 'react';
import App from 'next/app';
import Cookie from 'js-cookie';
import Head from 'next/head'
import Link from 'next/link';
import { withRouter } from 'next/router';
import osAPI from '../../services/osAPI';

import { Container } from '../../components/MainStyled';
import FormLogin from '../../components/FormLogin';   
import FormRecover from '../../components/FormRecover';
import MenuLogin from '../../components/MenuLogin';


class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      logged:0,
      signIn:true,
      signUp:false,
      recover:false
    }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleRecover = this.handleRecover.bind(this);
  }

  componentDidMount(){
  }

  handleSignUp(){
    this.setState({signIn:false});
    this.setState({signUp:true});
    this.setState({recover:false});
  }

  handleSignIn(e = ''){
    this.setState({signIn:true});
    this.setState({signUp:false});
    this.setState({recover:false});
  }

  handleRecover(){
    this.setState({signIn:false});
    this.setState({signUp:false});
    this.setState({recover:true});
  }

  render(){
    return(
      <Container>
        <Head>
         <meta charset='utf-8' />
         <meta http-equiv='X-UA-Compatible' content='IE=edge' />
         <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
         <meta name='description' content='Description' />
         <meta name='keywords' content='Keywords' />
         <meta name="robots" content="noindex" />
         <title>Login</title>
         <link rel="manifest" href="/manifest.json" />
         <meta name="theme-color" content="#5C6BF2"/>
       </Head>
       <MenuLogin />
       {this.state.signIn &&
        <FormLogin
            handleRecover = {this.handleRecover}
        />
       }
       {this.state.recover &&
        <FormRecover 
          handleSignIn = {this.handleSignIn}
        />
       }
      </Container>
    )
  }
}


export default Login;
