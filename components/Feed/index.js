import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { 
    Container,
    FeedArea,
    FeedItem,
    ImagemArea,
    Imagem,
    ProdTitleArea,
    ProdTitle,
    PrecoArea,
    Preco,
    PrecoDe,
    ParceleArea,
    Parcele,
} from './styled';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner'

class Feed extends Component {

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
        <Container>
            <FeedArea>
                <Link href='/'>
                    <FeedItem>
                        <ImagemArea>
                            <Imagem  />
                        </ImagemArea>
                        <ProdTitleArea>
                            <ProdTitle>
                                Titulo Produto 
                            </ProdTitle>
                        </ProdTitleArea>
                        <PrecoArea>
                            <Preco>
                                R$89.00
                            </Preco>
                        </PrecoArea>                           
                    </FeedItem>
                </Link>

                <Link href='/'>
                    <FeedItem>
                        <ImagemArea>
                            <Imagem  />
                        </ImagemArea>
                        <ProdTitleArea>
                            <ProdTitle>
                                Titulo Produto 2
                            </ProdTitle>
                        </ProdTitleArea>
                        <PrecoArea>
                            <Preco>
                                R$89.00
                            </Preco>
                        </PrecoArea>                           
                    </FeedItem>
                </Link>

                <Link href='/'>
                    <FeedItem>
                        <ImagemArea>
                            <Imagem  />
                        </ImagemArea>
                        <ProdTitleArea>
                            <ProdTitle>
                                Titulo Produto 3
                            </ProdTitle>
                        </ProdTitleArea>
                        <PrecoArea>
                            <Preco>
                                R$89.00
                            </Preco>
                        </PrecoArea>                           
                    </FeedItem>
                </Link>

                <Link href='/'>
                    <FeedItem>
                        <ImagemArea>
                            <Imagem  />
                        </ImagemArea>
                        <ProdTitleArea>
                            <ProdTitle>
                                Titulo Produto
                            </ProdTitle>
                        </ProdTitleArea>
                        <PrecoArea>
                            <Preco>
                                R$89.00
                            </Preco>
                        </PrecoArea>                           
                    </FeedItem>
                </Link>
            </FeedArea>
        </Container>
    )
  }
}

export default Feed;