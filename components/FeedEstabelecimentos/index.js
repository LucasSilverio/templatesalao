import React, { Component } from 'react';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { 
    Area,
    BtnForm,
    ItemArea,
    ItemText,
    ItemTitle,
    ItemTitleSm,
    ItemDesc,
    ItemCheck,
    Icon,
    Input,
    IptFiltro,  
    LogoArea,
    Logo,
    LinhaArea,
    Linha,
    Preco,
    PageContainer,
    Reservar,
    VerMais,
    Row,
    Title,
    Traco
} from './styled';
import osAPI from '../../services/osAPI';

class Componente extends Component {

  constructor(props){
    super(props);
    this.state={
        comentarios:[],
        feed:[]
    }
    this.getFeed = this.getFeed.bind(this)
  } 

  componentDidMount(){
    this.getFeed();
  }

  getFeed(){
    osAPI.getFeed(this.props.tipo, this.props.cidade)
    .then(r=>r.json())
    .then(json=>{
      this.setState({feed:json.data})
    })
  }

  render(){
    return(
      <> 
        <PageContainer>
          <Area>
            <Title>{this.props.categoria+" em "+this.props.cidade[0].toUpperCase()+this.props.cidade.substr(1)}</Title>
            <Traco />
            <Row cl={true}>
              <form>
                <p>Pesquise sua cidade e encontre as melhores barbearias, salões de estética e manicúres. </p>
                <IptFiltro placeholder={this.props.cidade[0].toUpperCase()+this.props.cidade.substr(1)} required/>
                <Row justify={'initial'} alinhar='flex-start'>
                  <ItemCheck>
                    <Input type='radio' name='tipo' checked={this.props.categoria == 'Barbearia' ? true : false} />Barbearias
                  </ItemCheck>
                  <ItemCheck>
                    <Input type='radio' name='tipo' checked={this.props.categoria != 'Barbearia' ? true : false}/>Salões de Beleza e Centros de Estética
                  </ItemCheck>
                </Row>
                <BtnForm>Buscar</BtnForm>
              </form>
            </Row>
            {this.state.feed.map((i, index) => (
              <>
                <Row key={index}>
                  <ItemArea>
                    <LogoArea>
                      {i.imagens.length == 0 &&
                        <Logo src={i.logo}   />
                      }
                      {i.imagens.length > 0 &&
                        <Carousel showStatus={false}>
                            <div>
                              <Logo src={i.logo} />
                            </div>
                            {i.imagens.map((k, kindex) => (
                              <div>
                                  <Logo src={k.caminho} />
                              </div>
                            ))}
                        </Carousel>
                      }
                    </LogoArea>                  
                  </ItemArea>
                  <ItemArea>
                    <ItemText>
                      <ItemTitle>{i.nomeestabelecimento}</ItemTitle>
                      <ItemDesc>{i.logradouro+", "+i.numero+", "+i.bairro+", "+i.cidade+"/"+i.estado}</ItemDesc>
                    </ItemText>
                    {i.servicos.map((j, jindex) => (
                      <>
                        <ItemText key={jindex}>
                          <ItemTitleSm>{j.nome}</ItemTitleSm>
                          <ItemDesc>{j.descricao}</ItemDesc>
                          <LinhaArea>
                            <Preco>{'R$'+j.preco}</Preco>
                            <Link href={"/"+i.slug}>
                              <Reservar>Agendar</Reservar>
                            </Link>
                          </LinhaArea>
                        </ItemText>                    
                        <Linha/>
                      </>
                    ))}
                    <ItemText>
                      <VerMais>Ver Mais</VerMais>
                    </ItemText>
                  </ItemArea>
                </Row>
                <Linha/>
              </>
            ))}           
          </Area>          
        </PageContainer>
      </>
    )
  }
}

export default Componente;