import React, { Component } from 'react';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Container, Desk, Mob, Tab, TabB, PageArea, PageAreaContainer, Parcele, PageContainer, ProdTitleArea, ProdTitle, PrecoArea, Precode, Preco, Title, Teste } from './styled';

// import TagProduct from '../TagProduct';
// import osAPI from '../../services/osAPI';
 
class Destaques extends Component {

  constructor(props){
    super(props);
    this.state={
      prods:[],
      sizeProds:0
    }
  }

  componentDidMount(){
    // osAPI.getNovidades(this.props.highlightType)
    // .then(r=>r.json())
    // .then(json=>{
    //   console.log(json);
    //     this.setState({prods:json.data}); 
    //     this.setState({sizeProds:json.data.length});
    // });
  }

  render(){ 
    return(      
      <> 
        <PageContainer>
           <PageArea>
             <Desk>
                <Title>Alguns de nossos trabalhos</Title>
                <CarouselProvider
                naturalSlideWidth={30}
                naturalSlideHeight={35}
                // totalSlides={parseInt(this.state.sizeProds) + 1}
                totalSlides={6}
                visibleSlides={5}
                step={1}
                infinite={true}
                >
                    <Container>
                        <Slider className='slider-area'>
                              <div key={1}>
                                  <Link href={'/produto/'}>
                                    <a>
                                      <Slide index={1} className='slide-item'>   
                                        <Teste />                                     
                                      </Slide>
                                    </a>
                                </Link>
                              </div>
                              <div key={2}>
                                  <Link href={'/produto/'}>
                                    <a>
                                      <Slide index={2} className='slide-item'>   
                                        <Teste />                                     
                                      </Slide>
                                    </a>
                                </Link>
                              </div>
                              <div key={3}>
                                  <Link href={'/produto/'}>
                                    <a>
                                      <Slide index={3} className='slide-item'>   
                                        <Teste />                                     
                                      </Slide>
                                    </a>
                                </Link>
                              </div>
                              <div key={3}>
                                  <Link href={'/produto/'}>
                                    <a>
                                      <Slide index={3} className='slide-item'>   
                                        <Teste />                                     
                                      </Slide>
                                    </a>
                                </Link>
                              </div>
                              <div key={3}>
                                  <Link href={'/produto/'}>
                                    <a>
                                      <Slide index={3} className='slide-item'>   
                                        <Teste />                                     
                                      </Slide>
                                    </a>
                                </Link>
                              </div>
                              <div key={3}>
                                  <Link href={'/produto/'}>
                                    <a>
                                      <Slide index={3} className='slide-item'>   
                                        <Teste />                                     
                                      </Slide>
                                    </a>
                                </Link>
                              </div>
                            {/* {this.state.prods.map((i, index) => (
                              <div key={index}>
                                <Link href={'/produto/'+i.slug}>
                                  <a>
                                    <Slide index={index} className='slide-item'>
                                      <div className='image-area'>
                                        <img src={i.img} />
                                        <TagProduct
                                          highlightType={this.props.highlightType}
                                        />
                                      </div>
                                      <div className='infos-area'> 
                                        <ProdTitleArea>
                                          <ProdTitle>{i.titulo}</ProdTitle>
                                        </ProdTitleArea>
                                        <PrecoArea>
                                          <Precode>
                                            {'R$ '+i.precode}
                                          </Precode>
                                          <Preco>
                                            {'R$ '+i.preco}                                              
                                          </Preco>
                                        </PrecoArea>
                                        <Parcele>
                                          Parcele em 4x
                                        </Parcele>
                                      </div>                                        
                                    </Slide>
                                  </a>
                                </Link>
                              </div>
                            ))} */}
                        </Slider>
                        <ButtonBack className='buttonBack'><img src='/prev.svg'/></ButtonBack>
                        <ButtonNext className='buttonNext'><img src='/next.svg'/></ButtonNext>
                    </Container>                    
                </CarouselProvider>
             </Desk>
             <Mob>
                <Title>{this.props.title}</Title>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={60}
                totalSlides={parseInt(this.state.sizeProds)+1}
                visibleSlides={2}
                step={1}
                infinite={true}
                >
                    <Container> 
                        <Slider className='slider-area'>
                            {this.state.prods.map((i, index) => (
                              <div key={index}>
                                <Link href={'/'}>
                                  <a>
                                    <Slide index={index} className='slide-item'>
                                      <div className='image-area'>
                                        <img src={i.img} />
                                        <TagProduct
                                          highlightType={this.props.highlightType}
                                        />
                                      </div>
                                      <div className='infos-area'>
                                        <ProdTitleArea>
                                          <ProdTitle>{i.titulo}</ProdTitle>
                                        </ProdTitleArea>
                                        <PrecoArea>
                                          <Precode>
                                            {'R$ '+i.precode}
                                          </Precode>
                                          <Preco>
                                            {'R$ '+i.preco}                                              
                                          </Preco>
                                        </PrecoArea>
                                        <Parcele>
                                          Parcele em 4x
                                        </Parcele>
                                      </div>                                        
                                    </Slide>
                                  </a>
                                </Link>
                              </div>
                            ))}
                        </Slider>
                        <ButtonBack className='buttonBack'><img src='/prev.svg'/></ButtonBack>
                        <ButtonNext className='buttonNext'><img src='/next.svg'/></ButtonNext>
                    </Container>                    
                </CarouselProvider>              
             </Mob>
             <Tab>
                <Title>{this.props.title}</Title>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={60}
                totalSlides={this.state.sizeProds}
                visibleSlides={3}
                step={1}
                infinite={true}
                >
                    <Container>
                        <Slider className='slider-area'>
                            {this.state.prods.map((i, index) => (
                              <div key={index}>
                                <Link href={'/'}>
                                  <a>
                                    <Slide index={index} className='slide-item'>
                                      <div className='image-area'>
                                        <img src={i.img} />
                                        <TagProduct
                                          highlightType={this.props.highlightType}
                                        />
                                      </div>
                                      <div className='infos-area'>
                                        <ProdTitleArea>
                                          <ProdTitle>{i.titulo}</ProdTitle>
                                        </ProdTitleArea>
                                        <PrecoArea>
                                          <Precode>
                                            {'R$ '+i.precode}
                                          </Precode>
                                          <Preco>
                                            {'R$ '+i.preco}                                              
                                          </Preco>
                                        </PrecoArea>
                                        <Parcele>
                                          Parcele em 4x
                                        </Parcele>
                                      </div>                                        
                                    </Slide>
                                  </a>
                                </Link>
                              </div>
                            ))}
                        </Slider>
                        <ButtonBack className='buttonBack'><img src='/prev.svg'/></ButtonBack>
                        <ButtonNext className='buttonNext'><img src='/next.svg'/></ButtonNext>
                    </Container>                    
                </CarouselProvider>              
             </Tab>
             <TabB>
                <Title>{this.props.title}</Title>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={this.state.sizeProds}
                visibleSlides={2}
                step={1}
                infinite={true}
                >
                    <Container>
                        <Slider className='slider-area'>
                            {this.state.prods.map((i, index) => (
                              <div key={index}>
                                <Link href={'/'}>
                                  <a>
                                    <Slide index={index} className='slide-item'>
                                      <div className='image-area'>
                                        <img src={i.img} />
                                        <TagProduct
                                          highlightType={this.props.highlightType}
                                        />
                                      </div>
                                      <div className='infos-area'>
                                        <ProdTitleArea>
                                          <ProdTitle>{i.titulo}</ProdTitle>
                                        </ProdTitleArea>
                                        <PrecoArea>
                                          <Precode>
                                            {'R$ '+i.precode}
                                          </Precode>
                                          <Preco>
                                            {'R$ '+i.preco}                                              
                                          </Preco>
                                        </PrecoArea>
                                        <Parcele>
                                          Parcele em 4x
                                        </Parcele>
                                      </div>                                        
                                    </Slide>
                                  </a>
                                </Link>
                              </div>
                            ))}
                        </Slider>
                        <ButtonBack className='buttonBack'><img src='/prev.svg'/></ButtonBack>
                        <ButtonNext className='buttonNext'><img src='/next.svg'/></ButtonNext>
                    </Container>                    
                </CarouselProvider>              
             </TabB>
             {/* <PageAreaContainer>
                <Title>{this.props.title}</Title>
                    <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={this.state.sizeProds}
                    visibleSlides={4}
                    step={1}
                    infinite={true}
                    >
                        <Container>
                            <Slider className='slider-area'>
                                {this.state.prods.map((i, index) => (
                                  <div key={index}>
                                    <Link href={'/'}>
                                      <a>
                                        <Slide index={index} className='slide-item'>
                                          <div className='image-area'>
                                            <img src={i.img} />
                                            <TagProduct
                                              highlightType={this.props.highlightType}
                                            />
                                          </div>
                                          <div className='infos-area'>
                                            <ProdTitleArea>
                                              <ProdTitle>{i.titulo}</ProdTitle>
                                            </ProdTitleArea>
                                            <PrecoArea>
                                              <Precode>
                                                {'R$ '+i.precode}
                                              </Precode>
                                              <Preco>
                                                {'R$ '+i.preco}                                              
                                              </Preco>
                                            </PrecoArea>
                                            <Parcele>
                                              Parcele em 4x
                                            </Parcele>
                                          </div>                                        
                                        </Slide>
                                      </a>
                                    </Link>
                                  </div>
                                ))}
                            </Slider>
                            <ButtonBack className='buttonBack'><img src='/prev.svg'/></ButtonBack>
                            <ButtonNext className='buttonNext'><img src='/next.svg'/></ButtonNext>
                        </Container>                    
                    </CarouselProvider>
             </PageAreaContainer> */}
           </PageArea>             
        </PageContainer>
      </>
    )
  }
}

export default Destaques;