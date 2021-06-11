import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Container,
    Drawer,
    Line,
    Lk,
    LineSoft,
    Logo,
    PageArea,
    Suporte
} from './styled';
// import osAPI from '../../services/osAPI';
// import ecommerceAPI from '../../services/ecommerceAPI';

class TopBar extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
      slug:''
    }
    this.getInfos = this.getInfos.bind(this);
  }

  componentDidMount(){  
    // this.getInfos();
  }

  getInfos(){
    // osAPI.getInfosPanel(Cookie.get('token'))
    // .then(r=>r.json())
    // .then(json=>{
    //   this.setState({slug:json.data.slug})
    // })
  }

  handleLogout(){
    Cookie.remove('token');
    Router.replace('/login');
  }

  render(){     
 
    return(   
      <PageArea> 
        <Container>
          <ul className='vendasArea'>
            <Link href={'/gestao'}>
              <a>Agenda</a>
            </Link>
          </ul>         
          <Line />
          <ul className='vendasArea'>
            <Link href={'/gestao/agenda-lotada'}>
              <a>Agenda Lotada</a>
            </Link>
          </ul>           
          <Line />
          <ul className='vendasArea'>
            <Link href={'/gestao/comissoes'}>
              <a>Comissões</a>
            </Link>
          </ul>        
          <Line />
          <ul className='vendasArea'>
            <Link href={'/gestao/clientes'}>
              <a>Clientes</a>
            </Link>
          </ul>    
          <Line />
          <ul className='vendasArea'>
            <Link href={'/gestao/financeiro'}>
              <a>Gestão Financeira</a>
            </Link>
          </ul>
          <Line />
          <ul className='vendasArea'>
            <Link href={'/gestao/produtos'}>
              <a>Produtos</a>
            </Link>
          </ul>    
          <Line />
            <ul className='produtosArea'>
              <Lk icon={'produtos.png'}>Configurações</Lk>
              <ul className='subProdutos'>
                <LineSoft />
                  <Link href='/gestao/horarios'>
                    <Lk>
                      <li>Horários de Atendimento</li>
                    </Lk>
                  </Link>
                <LineSoft />
                <LineSoft />
                  <Link href='/gestao/servicos'>
                    <Lk>
                      <li>Serviços Oferecidos</li>
                    </Lk>
                  </Link>
                <LineSoft />
                <Link href='/gestao/profissionais'>
                    <Lk>
                      <li>Profissionais</li>
                    </Lk>
                  </Link>
                <LineSoft />
                <Lk onClick={this.handleLogout}>
                  <li>Sair</li>
                </Lk>
                {/* <LineSoft /> */}
              </ul>
            </ul>
          <Line />
        </Container>
      </PageArea>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default TopBar;