import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { BannerArea, Container, PageContainer, Logo, MenuItems, Opcoes } from './styled';

class Banner extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }  

  render(){
    return(
      <> 
        <PageContainer>
            <Carousel autoPlay infiniteLoop={true} showThumbs={false} showStatus={false} swipeable={true} emulateTouch={true}>
                <BannerArea> 
                    <img src="/banner1.jpg" />
                </BannerArea>
                <BannerArea>
                    <img src="banner2.jpg" />
                </BannerArea>
            </Carousel>
        </PageContainer>
      </>
    )
  }
}

export default Banner;