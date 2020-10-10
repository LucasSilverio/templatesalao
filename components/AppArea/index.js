import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Container,
    Icone,
    IconesArea,
    LabelArea,
    PageArea
} from './styled';

class AppArea extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){     

    return(       
      <Container>
          <PageArea>
              <LabelArea>
                  Baixe nosso App e realize agendamentos com facilidade, além de receber descontos e receber pontos para trocar por serviços ou produtos.
              </LabelArea>
              <IconesArea>
                <Icone src='/playstore.png' />
                <Icone src='/appstore.png' />
              </IconesArea>
          </PageArea>
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default AppArea;