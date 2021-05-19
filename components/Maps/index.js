import React, { Component } from 'react';
import Link from 'next/link';
import { Area, Box, BoxTitulo, Container, PageContainer, Titulo } from './styled';
import osAPI from '../../services/osAPI';


class Maps extends Component {

  constructor(props){
    super(props);
    this.state={
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
      
    }
  } 

  componentDidMount(){
  }

  render(){
    return(
      <PageContainer>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.510097071944!2d-48.939022085696195!3d-20.029065886548302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bcb11e4088d469%3A0x89348da894d1169e!2sR.%20Machado%20de%20Assis%2C%20320%20-%20Centro%2C%20Frutal%20-%20MG%2C%2038200-000!5e0!3m2!1spt-BR!2sbr!4v1614614966660!5m2!1spt-BR!2sbr" width="100%" height="600" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> */}
        <Area>
          <BoxTitulo>
            <Box f={1}></Box>
            <Box f={2}>
              <Titulo>Agende seu horário e venha nos conhecer</Titulo>
            </Box>
          </BoxTitulo>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.438144760594!2d-48.924291385686075!3d-20.03208254666354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bcb0f8c345ef2b%3A0x27d81db257d1b1e2!2sAv.%20Rio%20de%20Janeiro%2C%201238%20-%20Estudantil%2C%20Frutal%20-%20MG%2C%2038200-000!5e0!3m2!1spt-BR!2sbr!4v1621433710930!5m2!1spt-BR!2sbr" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> */}
          <iframe src={this.props.infos.maps} width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </Area>
      </PageContainer>
    )
  }
}

export default Maps;