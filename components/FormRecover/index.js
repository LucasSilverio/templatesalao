import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
// import zxcvbn from 'zxcvbn';
import { withRouter } from 'next/router'; 
import {  
    BoxForm,
    BtnLogin,
    BoxTitle,
    BoxBody,
    BtnOpt,
    BoxTitleArea,
    Container,
    LoaderArea,
    Msg,
    Ipt,
    PassStrength,
    PassLabel,
    Voltar
} from './styled';
import ecommerceAPI from '../../services/ecommerceAPI';

class FormLogin extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      email:'',
      pass:'',
      passConfirm:'',
      score:0,
      error:'',
      loading:false,
      msgResult:''
    }

    this.changeEmail = this.changeEmail.bind(this);
  }

  componentDidMount(){
  }

  changeEmail(e){
      this.setState({email:e});
  }

  handleSubmit(e){
      this.setState({loading:true})
      e.preventDefault();
      if(this.state.email){
        fetch(ecommerceAPI.BASE_URL_API+'users/recoverPanel', {
            method:'POST',
            body:JSON.stringify({
                email:this.state.email,
            })
        })
        .then(r=>r.json())
        .then(json=>{
          this.setState({msgResult:'Foi enviado o link de redefinição para o e-mail informado. Acesse e crie sua nova senha de acesso!'});
          this.setState({loading:false})
        })
      }else{
          this.setState({error:'Informe o e-mail!'});
          this.setState({loading:false})
      }
      
  }

  render(){     

    return(      
      <Container>
        <BoxForm>
            <BoxTitleArea>
              <BoxTitle>RECUPERAR SENHA</BoxTitle>
            </BoxTitleArea>
            <BoxBody>
              <form onSubmit={e=>this.handleSubmit(e)}>
                  <Ipt type='email' required value={this.state.email} onChange={e=>this.changeEmail(e.target.value)} placeholder='E-MAIL'/>
                  <BtnLogin>ENVIAR</BtnLogin>
              </form>
              {this.state.loading &&
                <LoaderArea>
                    <Loader
                        type="TailSpin"
                        color="#005a48"
                        height={24}
                        width={24}
                    />
                  </LoaderArea>
              }
              {!this.state.loading &&
                <BtnOpt onClick={this.props.handleSignIn}>FAZER LOGIN</BtnOpt>
              }
              {this.state.msgResult !== '' &&
                <Msg>{this.state.msgResult}</Msg>
              }
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