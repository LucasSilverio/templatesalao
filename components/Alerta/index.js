import React, { Component } from 'react';
import { 
    Container
} from './styled';



class Alerta extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    } 
    
  }
  
  render(){     
      
    return(      
        <Container onClick={e=>this.props.closeAlerta()} visible={this.props.visible}>
          {this.props.alertaMsg}
        </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default Alerta;