import React, { Component } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css 
import { 
    Container,
    Corpo,
    Coluna,
    Iframe,
    Subtitulo,
    SubtituloUsm,
    AreaIframe,
    Topo,

} from './styled';
 
class WhatsApp extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      loading:false
    }    
  }

componentDidMount(){
}
  render(){   
      return(    
        <Container>
          <Topo></Topo>
          {/* <Topo>
            <Subtitulo>Integre seu Whatsapp para envio de lembretes e notificações para seus clientes.</Subtitulo>
            <SubtituloSm>Abra o Leitor QR Code do Whatsapp no seu celular e aponte para o QR Code abaixo:</SubtituloSm>
            <SubtituloUsm>* Não é possível realizar a integração de mais de 1 dispositivo.</SubtituloUsm>
            <SubtituloUsm>* Segurança em primeiro lugar. As notificações e lembretes ficaram salvas diretamente no seu celular e serão acessíveis somente por você.</SubtituloUsm>
            <SubtituloUsm>* Após o escaneamento, informar nossa equipe através do chat ou telefone para que possamos aprovar a alteração.</SubtituloUsm>
          </Topo> */}
          <Corpo>
            <AreaIframe>
              <Coluna>
                <Subtitulo>Integre seu Whatsapp para envio de lembretes e notificações para seus clientes.</Subtitulo>
                <SubtituloUsm>1. Abra o Whatsapp em seu telefone.</SubtituloUsm>
                <SubtituloUsm>2. Toque em <strong>Menu</strong> ou <strong>Configurações</strong> e selecione <strong>WhatsApp Web</strong>.</SubtituloUsm>
                <SubtituloUsm>3. Aponte seu telefone para esta tela para capturar o código.</SubtituloUsm>
              </Coluna>
              <Coluna>
                <Iframe width="300" height="800" src={this.props.link} ></Iframe> 
              </Coluna>
            </AreaIframe>
            {/* <Iframe width="800" height="800" src={this.props.link} ></Iframe> */}
            {/* <Iframe width="800" height="800" src={"https://translate.google.com/translate?sl=ja&tl=en&u=http://ec2-18-229-32-206.sa-east-1.compute.amazonaws.com:3002"} /> */}

          </Corpo>            
        </Container>
      )
  }
}

const mapStateToProps = (state) => {
  return {
  };    
};

export default WhatsApp;
