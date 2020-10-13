import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { 
    Container,
    ImagemArea,
    InfoArea,
    ProdArea
} from './styled';
import Loader from 'react-loader-spinner'
import osAPI from '../../services/osAPI';

class Feed extends Component {

  constructor(props){
    super(props);
    this.state={}
  } 

  componentDidMount(){
  }

  render(){
      console.lo
    return(
        <Container>
            asdf
            <ProdArea>
                <ImagemArea>

                </ImagemArea>
                <InfoArea>
xxx
                </InfoArea>
            </ProdArea>
        </Container>
    )
  }
}

export default Feed;