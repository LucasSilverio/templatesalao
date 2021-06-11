import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import zxcvbn from 'zxcvbn';
import Router from 'next/router';
import {  
    BoxForm,
    BtnLogin,
    BoxTitle,
    BoxBody,
    BtnOpt,
    BoxTitleArea,
    Container,
    Ipt,
    Lk,
    Msg,
    LoaderArea,
    PassLabel,
    Voltar
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
 
class FormReset extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      pass:'',
      passConfirm:'',
      msgVisible:false,
      loading:false,
      score:0,
      error:'',
      alert:'',
    }
    
  }

  componentDidMount(){
  }

  handleSubmit(e){
      this.setState({loading:true});
      this.setState({error:''});
      e.preventDefault();
        if(this.state.pass !== '' && this.state.pass == this.state.passConfirm){
          const r = zxcvbn(this.state.pass);
          if(r.score >= 2){
            fetch(ecommerceAPI.BASE_URL_API+'users/setPassPanel', {
                method:'POST',
                body:JSON.stringify({
                    token:this.props.token,
                    pass:this.state.pass,
                    passConfirm:this.state.passConfirm
                })
            })
            .then(r=>r.json())
            .then(json=>{
              if(json.success){
                this.setState({msgVisible:true})
                this.setState({loading:false});
              }else{
                this.setState({error:json.error})
              }
              this.setState({loading:false});
            })
          }else{
            // alert('A senha informada não atende os requisitos mínimos de segurança!');
            this.setState({error:'A senha informada não atende os requisitos mínimos de segurança!'});
            this.setState({loading:false});
          }
        }
  }

  passwordLevel(e){
    switch (e) {
        case 0:
          return 'Fraca';
        case 1:
          return 'Fraca';
        case 2:
          return 'Ok';
        case 3:
          return 'Boa';
        case 4:
          return 'Forte';
        default:
          return 'Fraca';
      }
  }

  render(){     
    const r = zxcvbn(this.state.pass);
    return(      
      <Container>
        <BoxForm>
            <BoxTitleArea>
              <BoxTitle bgColor="#716FF2"> CADASTRAR NOVA SENHA</BoxTitle>
            </BoxTitleArea>
            <BoxBody>
              {!this.state.successMsg != '' &&
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <Ipt type='password' required value={this.state.pass} onChange={e=>this.setState({pass:e.target.value})} placeholder='SENHA'/>
                    <Ipt type='password' required value={this.state.passConfirm} onChange={e=>this.setState({passConfirm:e.target.value})} placeholder='CONFIRMAR SENHA'/>
                    {this.state.alert == '' &&
                        <PassLabel score={r.score}>Força da senha:{' '+this.passwordLevel(r.score)}</PassLabel>
                    }                    
                    <PassLabel score={1}>{this.state.error}</PassLabel>
                    {this.state.alert != '' &&
                      <PassLabel score={1}>{this.state.alert}</PassLabel>
                    }     
                    {!this.state.msgVisible &&
                      <>
                      {!this.state.loading &&
                        <BtnLogin bgColor={'#F2A57C'}>ENVIAR</BtnLogin> 
                      }
                      {this.state.loading &&
                        <LoaderArea>
                          <Loader
                            type="TailSpin"
                            color="#716FF2"
                            height={24}
                            width={24}
                            // timeout={1000}
                          />
                        </LoaderArea>
                      }
                      </>
                    }
                </form>
              }
              {this.state.msgVisible &&
                <Msg>
                  Senha alterada com Sucesso. Acesse o aplicativo e faça login.
                </Msg>
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

export default FormReset;