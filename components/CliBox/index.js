import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import moment from 'moment'
import { 
    Brand,
    BrandBox,
    Box,
    Container,
    Coluna,
    ColunaFixa,
    Dia,
    Horarios,
    Items,
    Item,
    InfosArea,
    LogoArea,
    Logo,
    Titulo,
    PageArea,
    SubTitulo
} from './styled';

class CliBox extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
    console.log(this.props.infos)
  }

  render(){     

    return(       
      <Container bgcolor={'#FFF'} altura={this.props.altura}>
          <PageArea>
            <Coluna>
              <Box>
                  <LogoArea>
                    <Logo src={this.props.infos.logo} />
                  </LogoArea>
                  <InfosArea>
                    <Titulo>{this.props.infos.nomeestabelecimento}</Titulo>
                    <SubTitulo>{this.props.infos.tipo+' em '+this.props.infos.cidade+'/'+this.props.infos.estado}</SubTitulo>
                  </InfosArea>
              </Box>
            </Coluna>
            <ColunaFixa>
              <iframe src={this.props.infos.maps} width="100%" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
              <strong>Contato e Horários de Funcionamento</strong>
              <Horarios>
                <Dia>
                  <div>Segunda-feira</div>
                  {this.props.segunda.length > 0 &&
                    <Items>
                      {this.props.segunda.map((i, index) => (
                        <Item key={index}>
                          {i.horario}
                        </Item>
                      ))}
                    </Items>
                  }
                  {this.props.segunda.length == 0 &&
                    <Items>
                      -
                    </Items>
                  }
                </Dia>
                <Dia>
                  <div>Terça-feira</div>
                  {this.props.terca.length > 0 &&
                    <Items>
                      {this.props.terca.map((i, index) => (
                        <Item key={index}>
                          {i.horario}
                        </Item>
                      ))}
                    </Items>
                  }
                  {this.props.terca.length == 0 &&
                    <Items>
                      -
                    </Items>
                  }
                </Dia>
                <Dia>
                  <div>Quarta-feira</div>
                  {this.props.quarta.length > 0 &&
                    <Items>
                      {this.props.quarta.map((i, index) => (
                        <Item key={index}>
                          {i.horario}
                        </Item>
                      ))}
                    </Items>
                  } 
                  {this.props.quarta.length == 0 &&
                    <Items>
                      -
                    </Items>
                  }
                </Dia>
                <Dia>
                  <div>Quinta-feira</div>
                  {this.props.quinta.length > 0 &&
                    <Items>
                      {this.props.quinta.map((i, index) => (
                        <Item key={index}>
                          {i.horario}
                        </Item>
                      ))}
                    </Items>
                  }
                  {this.props.quinta.length == 0 &&
                    <Items>
                      -
                    </Items>
                  }
                </Dia>
                <Dia>
                  <div>Sexta-feira</div>
                  {this.props.sexta.length > 0 &&
                    <Items>
                      {this.props.sexta.map((i, index) => (
                        <Item key={index}>
                          {i.horario}
                        </Item>
                      ))}
                    </Items>
                  }
                  {this.props.sexta.length == 0 &&
                    <Items>
                      -
                    </Items>
                  }
                </Dia>
                <Dia>
                  <div>Sábado</div>
                  <Items>
                    {this.props.sabado.map((i, index) => (
                      <Item key={index}>
                        {i.horario}
                      </Item>
                    ))}
                  </Items>
                  {this.props.domingo.length == 0 &&
                    <Items>
                      -
                    </Items>
                  }
                </Dia>
                <Dia>
                  <div>Domingo</div>
                  {this.props.domingo.length > 0 &&
                    <Items>
                      {this.props.domingo.map((i, index) => (
                        <Item key={index}>
                          {i.horario}
                        </Item>
                      ))}
                    </Items>
                  }
                  {this.props.domingo.length == 0 &&
                    <Items>
                      -
                    </Items>
                  }
                </Dia>
              </Horarios>
            </ColunaFixa>
          </PageArea>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default CliBox;