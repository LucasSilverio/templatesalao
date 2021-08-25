import React, { Component } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css 
import { 
    Container,
    Corpo,
    Iframe,
    Subtitulo,
    SubtituloSm,
    SubtituloUsm,
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
          <Topo>
            <Subtitulo>Integre seu Whatsapp para envio de lembretes e notificações para seus clientes.</Subtitulo>
            <SubtituloSm>Abra o Leitor QR Code do Whatsapp no seu celular e aponte para o QR Code abaixo:</SubtituloSm>
            <SubtituloUsm>* Não é possível realizar a integração de mais de 1 dispositivo.</SubtituloUsm>
            <SubtituloUsm>* Segurança em primeiro lugar. As notificações e lembretes ficaram salvas diretamente no seu celular e serão acessíveis somente por você.</SubtituloUsm>
            <SubtituloUsm>* Após o escaneamento, informar nossa equipe através do chat ou telefone para que possamos aprovar a alteração.</SubtituloUsm>
          </Topo>
          <Corpo>
            <Iframe width="800" height="800" src="http://ec2-18-229-143-33.sa-east-1.compute.amazonaws.com:3002/" ></Iframe>

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
