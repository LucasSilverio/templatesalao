import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Container
} from './styled';
import osAPI from '../../services/osAPI';
import ecommerceAPI from '../../services/ecommerceAPI';



class AlertaErro extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    } 
    
  }
  
  render(){     
      
    return(      
        <Container onClick={e=>this.props.closeAlerta()} visible={this.props.visible}>
          {this.props.alertaMsg}
        </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default AlertaErro;