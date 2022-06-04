import React, { Component } from 'react';
import Cookie from 'js-cookie';
import moment from 'moment';
import { 
    Avatar,
    Box,
    BoxClientes,
    BtnOpcao,
    BtnAction,
    Container,
    Corpo,
    Cliente,
    ClienteInfos,
    Icone,
    Label,
    Opcoes,
    Subtitulo,
    Topo,

} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';
import ModalNotificacao from '../ModalNotificacao';
 
class AgendaLotada extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      data:moment().format('YYYY-MM-DD'),
      modalVisible:false,
      profissionais:[],
      ausentes7diashoje:[],
      ausentesDesc:'',
      ontem:moment().subtract(31, 'days').format('YYYY-MM-DD'),
      hoje7dias:moment().subtract(7, 'days').format('YYYY-MM-DD'),
      amanha7dias:moment().subtract(6, 'days').format('YYYY-MM-DD'),
      depoisDeAmanha7dias:moment().subtract(5, 'days').format('YYYY-MM-DD'),

      dataInicial:moment().subtract(30, 'days').format('YYYY-MM-DD'),
      amanha:moment().subtract(29, 'days').format('YYYY-MM-DD'),
      data2dias:moment().add(2, 'days').format('DD/MM/YY'),
      data3dias:moment().add(3, 'days').format('DD/MM/YY'),
      proximo2dias:moment().subtract(28, 'days').format('YYYY-MM-DD'),
      proximo3dias:moment().subtract(27, 'days').format('YYYY-MM-DD'),

      seisMeses:moment().subtract(180, 'days').format('YYYY-MM-DD'),

      dataInicioReq:'',
      dataFimReq:''

    }    
    this.getProfessionals = this.getProfessionals.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

componentDidMount(){
  this.getProfessionals();
  this.getAusentes(this.state.hoje7dias, this.state.hoje7dias, '7 dias hoje');
}

getProfessionals(){
  osAPI.getProfessionals(Cookie.get('token'))
  .then(r=>r.json())
  .then(json=>{
    this.setState({profissionais:json.data});
  })
}

getAusentes(inicial, final, desc){
  fetch(ecommerceAPI.BASE_URL_API+'users/getAusentes', {
    method:'POST',
    body:JSON.stringify({
        jwt:Cookie.get('token'),
        datainicial:inicial,
        datafinal:final
    })
  })
  .then(r=>r.json())
  .then(json=>{
    this.setState({ausentes7diashoje:json.data})
    this.setState({ausentesDesc:desc})
    this.setState({dataInicioReq:inicial})
    this.setState({dataFimReq:final})
  })
}

handleModal(){
  this.setState({modalVisible:!this.state.modalVisible})
}



    render(){     
        return(    
          <Container>
            <Topo>
              <Subtitulo>Agenda Lotada</Subtitulo>
            </Topo>
            <Corpo>
              <Opcoes> 
                <BtnOpcao onClick={e=>this.getAusentes(this.state.hoje7dias, this.state.hoje7dias, '7 dias hoje')} bgColor={this.state.ausentesDesc == '7 dias hoje' ? '#716FF2' : '#5C6BF2'}>
                  Completando 7 dias Hoje
                </BtnOpcao>
                <BtnOpcao onClick={e=>this.getAusentes(this.state.amanha7dias, this.state.amanha7dias, '7 dias amanhã')} bgColor={this.state.ausentesDesc == '7 dias amanhã' ? '#716FF2' : '#5C6BF2'}>
                  Completando 7 dias Amanhã
                </BtnOpcao>
                <BtnOpcao onClick={e=>this.getAusentes(this.state.depoisDeAmanha7dias, this.state.depoisDeAmanha7dias, '7 dias depois de amanhã')} bgColor={this.state.ausentesDesc == '7 dias depois de amanhã' ? '#716FF2' : '#5C6BF2'}>
                  Completando 7 dias depois de Amanhã
                </BtnOpcao>
                <BtnOpcao onClick={e=>this.getAusentes(this.state.dataInicial, this.state.dataInicial, '1 mês hoje')} bgColor={this.state.ausentesDesc == '1 mês hoje' ? '#716FF2' : '#5C6BF2'}>
                  Completando 1 mês Hoje
                </BtnOpcao>
                <BtnOpcao onClick={e=>this.getAusentes(this.state.amanha, this.state.amanha, '1 mês amanhã')} bgColor={this.state.ausentesDesc == '1 mês amanhã' ? '#716FF2' : '#5C6BF2'}>
                  Completando 1 mês Amanhã
                </BtnOpcao>
                <BtnOpcao onClick={e=>this.getAusentes(this.state.proximo2dias, this.state.proximo2dias, '1 mês dia '+this.state.data2dias)} bgColor={this.state.ausentesDesc == '1 mês dia '+this.state.data2dias ? '#716FF2' : '#5C6BF2'}>
                  Completando 1 mês dia {this.state.data2dias}
                </BtnOpcao>
                <BtnOpcao onClick={e=>this.getAusentes(this.state.proximo3dias, this.state.proximo3dias, '1 mês dia '+this.state.data3dias)} bgColor={this.state.ausentesDesc == '1 mês dia '+this.state.data3dias ? '#716FF2' : '#5C6BF2'}>
                  Completando 1 mês dia {this.state.data3dias}
                </BtnOpcao>

                <BtnOpcao onClick={e=>this.getAusentes(this.state.seisMeses, this.state.ontem, 'mais de 30 dias')} bgColor={this.state.ausentesDesc == 'mais de 30 dias' ? '#716FF2' : '#5C6BF2'}>
                  Faz Mais de 30 dias
                </BtnOpcao>
              </Opcoes>
              <Box>
                <Label>Clientes completando {this.state.ausentesDesc}</Label>
                <BoxClientes>
                  {this.state.ausentes7diashoje.map((i, index) => (
                    <Cliente>
                      <Avatar src={i.avatar != null ? i.avatar : 'https://theshave.com.br/api-barbershop/images/usersprofile/man.png'} />
                      <ClienteInfos>
                        {i.name}
                      </ClienteInfos>
                    </Cliente>
                  ))}
                </BoxClientes>
              </Box>
              <Box>
                <BtnAction onClick={this.handleModal}>
                  <Icone src='/whatsapp.png' />
                  Enviar Notificação
                </BtnAction>
              </Box>
              <ModalNotificacao 
                visible={this.state.modalVisible}
                handleModal={this.handleModal}
                datadesc={this.state.ausentesDesc}
                dataInicioReq={this.state.dataInicioReq}
                dataFimReq={this.state.dataFimReq}
              />
            </Corpo>
            
          </Container>
        )
    }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default AgendaLotada;