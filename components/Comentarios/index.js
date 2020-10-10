import React, { Component } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { 
    Area,
    ClienteArea,
    ElementoArea,
    EstrelasArea,
    MensagemArea,
    PageContainer,
    Title
} from './styled';

class Comentarios extends Component {

  constructor(props){
    super(props);
    this.state={
        comentarios:[]
    }
  } 

  componentDidMount(){
    // osAPI.getComentarios()
    // .then(r=>r.json())
    // .then(json=>{
    //     this.setState({comentarios:json.data});
    // })
  }

  render(){
    return(
      <> 
        <PageContainer>
            <Title>Depoimentos de alguns dos nossos clientes</Title>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} swipeable={true} emulateTouch={true}>
                <ElementoArea> 
                    <EstrelasArea>
                        {/* <Estrela total={i.nota} /> */}
                    </EstrelasArea>
                    <MensagemArea>
                        {/* "{i.mensagem}"
                          */}
                          "Depoimento escrito pelo cliente"
                    </MensagemArea>
                    <ClienteArea>
                        {/* {i.nome+' '+i.sobrenome}
                          */}
                          Fulano de Tal
                    </ClienteArea>
                </ElementoArea>
                <ElementoArea> 
                    <EstrelasArea>
                        {/* <Estrela total={i.nota} /> */}
                    </EstrelasArea>
                    <MensagemArea>
                        {/* "{i.mensagem}"
                          */}
                          "Mensagem aqui"
                    </MensagemArea>
                    <ClienteArea>
                        {/* {i.nome+' '+i.sobrenome}
                          */}
                          Ciclano da Silva
                    </ClienteArea>
                </ElementoArea>
                {/* {this.state.comentarios.map((i, index) => (
                    <ElementoArea> 
                        <EstrelasArea>
                            <Estrela total={i.nota} />
                        </EstrelasArea>
                        <MensagemArea>
                            "{i.mensagem}"
                        </MensagemArea>
                        <ClienteArea>
                            {i.nome+' '+i.sobrenome}
                        </ClienteArea>
                    </ElementoArea>
                ))}                 */}
            </Carousel>
        </PageContainer>
      </>
    )
  }
}

export default Comentarios;