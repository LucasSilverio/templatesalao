import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';

import { Container, PageContainer, Logo, Top } from './styled';

import osAPI from '../../services/osAPI'; 

class MenuCart extends Component {

  constructor(props){
    super(props);
    this.state={
      x:0,
      y:0
    }
  }

  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  render(){
    
    return(
      <> 
        <PageContainer>
            <Container> 
              <Top>
                <Logo>
                    <Link href='/'>
                        <a>
                            <img src='/logoteste.svg' />
                        </a>
                    </Link>
                </Logo>
              </Top>
            </Container>
        </PageContainer>
      </>
    )
  }
}

const mapStateToProps = (state) => {
    return {
    };    
  };

export default MenuCart;