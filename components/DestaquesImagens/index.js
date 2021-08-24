import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { 
    BoxDesk,
    Container,
    Imagem,
    PageArea,
    Titulo
} from './styled';

class DestaquesImagens extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
    // console.log(this.props.imagens)
  }

  render(){     

    return(       
      <Container bgcolor={'#FFF'} altura={this.props.altura}>
          <PageArea>
            <Titulo>Destaques do Nosso Trabalho</Titulo>
            <BoxDesk>
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={120}
                totalSlides={this.props.imagens.length}
                visibleSlides={3.2}
              >
                <Slider>
                  {this.props.imagens.map((i, index) => (
                    <Slide index={index}>
                      <Imagem src={i.caminho} />
                    </Slide>
                  ))}
                </Slider>
              </CarouselProvider>
            </BoxDesk>
          </PageArea>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default DestaquesImagens;