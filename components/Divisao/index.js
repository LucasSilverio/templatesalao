import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { 
    Area,
    PageContainer,
    Row,
} from './styled';

class Divisao extends Component {

  constructor(props){
    super(props);
    this.state={
        comentarios:[]
    }
  } 

  componentDidMount(){
  }

  render(){
    return(
      <> 
        <PageContainer>   
          <Row />
        </PageContainer>
      </>
    )
  }
}

export default Divisao;