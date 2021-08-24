import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Container,
    Lk,
    Logo,
    Notificacao,
    PageArea
} from './styled';
import { Icon } from '../Bottom/styled';

class BottomCli extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){     

    return(        
      <Container bgcolor={'#333'} altura={this.props.altura}> 
          <PageArea>
            <Link href='/'>
              <Lk>
                <Logo src={'/logo.png'} />
                Crie sua agenda
              </Lk>
            </Link>
            
          </PageArea>
          <Notificacao>
            <div class='onesignal-customlink-container'></div>
          </Notificacao>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default BottomCli;