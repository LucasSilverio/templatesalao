import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import AlertaErro from '../AlertaErro';
import {  
    BoxForm,
    BtnLogin,
    BoxTitle,
    BoxBody,
    BtnOpt,
    BoxTitleArea,
    Container,
    Ipt,
    LoaderArea,
    Voltar
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';

class FormLogin extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      email:'',
      pass:'',
      alertaErroVisible:false,
      alertaErroMsg:'',
      loading:false,
    }

    this.changeEmail = this.changeEmail.bind(this);
    this.closeAlertaErro = this.closeAlertaErro.bind(this);
    this.changePass = this.changePass.bind(this);
  }

  componentDidMount(){
  }

  changeEmail(e){
      this.setState({email:e});
  }

  changePass(e){
    this.setState({pass:e});
  }

  closeAlertaErro(){
    this.setState({alertaErroVisible:false})
  }
  
  showErrorAlert(e){
    this.setState({alertaErroVisible:true})
    this.setState({alertaErroMsg:e})
  
    setTimeout(
    () => this.setState({ alertaErroVisible: false }), 
        4000
    );
  
  }

  handleSubmit(e){
      e.preventDefault();
      this.setState({loading:true});
      if(this.state.email !== '' && this.state.pass !== ''){
        fetch(ecommerceAPI.BASE_URL_API+'users/loginProf', {
            method:'POST',
            body:JSON.stringify({
                email:this.state.email,
                pass:this.state.pass
            })
        })
        .then(r=>r.json())
        .then(json=>{
            if(json.error == '' && json.jwt != ''){
                Cookie.set('token', json.jwt, {expires: 0.9});
                Router.replace('/gestao');
            }else{
              this.showErrorAlert(json.error);
              this.setState({loading:false});
            };
        })
      }else{
        this.setState({loading:false});
      }
      // this.setState({loading:false});
  }

  render(){     

    return(      
      <Container>
        <AlertaErro 
          visible={this.state.alertaErroVisible}
          alertaMsg={this.state.alertaErroMsg}
          closeAlerta={this.closeAlertaErro}
        />
        <BoxForm>
            <BoxTitleArea>
              <BoxTitle>LOGIN</BoxTitle> 
            </BoxTitleArea>
            <BoxBody>
              <form onSubmit={e=>this.handleSubmit(e)}>
                  <Ipt type='email' required value={this.state.email} onChange={e=>this.changeEmail(e.target.value)} placeholder='E-MAIL'/>
                  <Ipt type='password' required value={this.state.pass} onChange={e=>this.changePass(e.target.value)} placeholder='SENHA'/>
                  {this.state.loading &&
                    <LoaderArea>
                        <Loader
                            type="TailSpin"
                            color="#5C6BF2"
                            height={24}
                            width={24}
                        />
                      </LoaderArea>
                  }
                  {!this.state.loading &&
                    <BtnLogin>ENTRAR</BtnLogin>
                  }
              </form>
              <BtnOpt onClick={this.props.handleRecover}>ESQUECI A SENHA</BtnOpt>
            </BoxBody>
        </BoxForm>
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default FormLogin;