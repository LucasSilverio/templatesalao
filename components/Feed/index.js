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
import osAPI from '../../services/osAPI';

class Feed extends Component {

  constructor(props){
    super(props);
    this.state={
        comentarios:[],
        produtos:[],
        offset:0,
        limit:10
    }
    this.requestProduts = this.requestProduts.bind(this);
  } 

  componentDidMount(){
    // this.getProdutos();
    this.requestProduts();
  }

  getProdutos(){
    osAPI.getProdutos(this.props.slug)
    .then(r=>r.json())
    .then(json=>{
        console.log(json.data)
        this.setState({produtos:json.data})
    })
    
  }

  requestProduts(){
    osAPI.getProdutos(this.props.slug, this.state.offset, this.state.limit)
    .then(r=>r.json())
    .then(json=>{
        this.setState({produtos:this.state.produtos.concat(json.data)});
    })
    this.setState({offset:parseInt(this.state.offset) + parseInt(this.state.limit)});
  }

  render(){
      console.lo
    return(
        <Container>
            <FeedArea>
                <InfiniteScroll 
                    dataLength={this.state.produtos.length}
                    next={this.requestProduts}
                    hasMore={true}
                    className='ScrollArea'
                >
                    {this.state.produtos.map((i, index) => (
                        <Link href='/' key={index}>
                            <FeedItem>
                                <ImagemArea>
                                    <Imagem src={i.img} />
                                </ImagemArea>
                                <ProdTitleArea>
                                    <ProdTitle>
                                        {i.nome}
                                    </ProdTitle>
                                </ProdTitleArea>
                                <PrecoArea>
                                    <Preco>
                                        {'R$'+i.valor}
                                    </Preco>
                                </PrecoArea>                           
                            </FeedItem>
                        </Link>
                    ))}
                </InfiniteScroll>
                {/* <Link href='/'>
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
                </Link> */}
            </FeedArea>
        </Container>
    )
  }
}

export default Feed;