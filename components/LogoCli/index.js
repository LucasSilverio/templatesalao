import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    Brand,
    Container,
    PageArea
} from './styled';

class LogoCli extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){     

    return(       
      <Container bgcolor={'#FFF'} altura={this.props.altura}>
          <PageArea>
            <Link href={'/'+this.props.infos.slug}>
              <Brand src={this.props.infos.logo} />
            </Link>
          </PageArea>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default LogoCli;