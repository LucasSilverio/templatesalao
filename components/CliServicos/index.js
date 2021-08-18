import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import ModalAgenda from '../ModalAgenda'; 
import moment from 'moment';
import { 
    Box,
    BoxService,
    Container,
    Coluna,
    ColunaFixa,
    InfosArea,
    LogoArea,
    Logo,
    Titulo,
    PageArea,
    Servico,
    Preco,
    SubTitulo,
    ServiceInfo,
    ServicePreco
} from './styled';

class CliServicos extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      data:'',
      modalAgendaVisible:false,

      idservico:'',
      nomeservico:'',
      precoservico:'',
      temposervico:'',
    }
    this.handleModalAgenda = this.handleModalAgenda.bind(this);
    this.selectService = this.selectService.bind(this)
  }

  componentDidMount(){
    // console.log(this.props.infos)
    // console.log(this.props.servicos)
    this.setState({data:new Date()})
  }

  

  selectService(id, nome, preco, tempo){
    this.setState({idservico:id})
    this.setState({nomeservico:nome})
    this.setState({precoservico:preco})
    this.setState({temposervico:tempo})
    this.handleModalAgenda();
  }

  handleModalAgenda(){
    this.setState({modalAgendaVisible:!this.state.modalAgendaVisible})
  }

  render(){     
    return(       
      <Container bgcolor={'#FFF'} altura={this.props.altura}> 
          <PageArea>
            <Coluna>
              <Box>
                <Titulo>Serviços</Titulo>
                {this.props.servicos.map((i, index) => (
                  <BoxService>
                    <ServiceInfo>
                      <Servico>{i.nome}</Servico>
                      <SubTitulo color='#333' fontsz='14px'>{i.descricao}</SubTitulo>
                    </ServiceInfo>
                    <ServicePreco onClick={e=>this.selectService(i.id, i.nome, i.preco, i.tempo)}>
                      <SubTitulo color='#FFF' fontsz='13px'>{'R$'+i.preco}</SubTitulo>
                      <SubTitulo color='#FFF' fontsz='14px'>Agendar</SubTitulo>
                    </ServicePreco>
                  </BoxService>
                ))}
                
              </Box>
              <ModalAgenda
                visible={this.state.modalAgendaVisible}
                handleModal={this.handleModalAgenda}
                action_lead={()=>{}}
                idservico={this.state.idservico}
                nomeservico={this.state.nomeservico}
                precoservico={this.state.precoservico}
                temposervico={this.state.temposervico}
                profissionais={this.props.profissionais}
                slug={this.props.slug}
              />
            </Coluna>
            {/* <ColunaFixa>
            </ColunaFixa> */}
          </PageArea>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default CliServicos;