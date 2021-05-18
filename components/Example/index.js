import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { 
    Area,
    BrandArea,
    ItemArea,
    ItemIcon,
    ItemText,
    ItemTitle,
    ItemDesc,
    Image,
    ImageBrand,
    PageContainer,
    Row,
    Title
} from './styled';

class Example extends Component {

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
          <Area>
            <Row>
              <ItemArea>
                <ItemIcon></ItemIcon>
                <ItemText>
                  <ItemTitle>Fortaleça sua marca. Ganhe em eficiência e tempo</ItemTitle>
                  <ItemDesc>Tenha sua marca na PlayStore, AppStore e Google. Não perca mais minutos e até horas tentando organizar sua agenda. Tenha esse processo automatizado da forma mais eficiente para seu negócio e ganhe mais tempo livre.</ItemDesc>
                </ItemText>
              </ItemArea>
              <ItemArea>
                <ItemIcon>
                  <Image src={'/phone.png'} />
                </ItemIcon>
                <BrandArea>
                  <ImageBrand src={'/appstore.png'} />
                  <ImageBrand src={'/playstore.png'} />
                </BrandArea>
              </ItemArea>
              
            </Row>
          </Area>          
        </PageContainer>
      </>
    )
  }
}

export default Example;