import React, { Component } from 'react';
import Link from 'next/link';
import { BgDesk, Container, PageContainer, Title, Traco  } from './styled';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Garantias extends Component {

  constructor(props){
    super(props);
    this.state={
      banners:[]
    }
  } 

  componentDidMount(){
  }

  handleScroll(){
    scroll.scrollTo(3700);
  }

  render(){ 
    return(
      <PageContainer>
        <Container>
          <Title>100% de Satisfação Garantida ou Você Não Precisa Pagar Nada</Title>
          <Traco />
          <BgDesk src={'/garantiadk.png'} onClick={this.handleScroll}/>
        </Container>
      </PageContainer>
    )
  }
}

export default Garantias;