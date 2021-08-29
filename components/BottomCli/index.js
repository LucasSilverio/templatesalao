import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import Loader from 'react-loader-spinner';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { 
    AdicionarTelaInicial,
    Container,
    Lk,
    Logo,
    Notificacao,
    Opcoes,
    PageArea
} from './styled';
import { Icon } from '../Bottom/styled';

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI to notify the user they can add to home screen
//   addBtn.style.display = 'block';

//   addBtn.addEventListener('click', () => {
//     // hide our user interface that shows our A2HS button
//     addBtn.style.display = 'none';
//     // Show the prompt
//     deferredPrompt.prompt();
//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice.then((choiceResult) => {
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }
//       deferredPrompt = null;
//     });
//   });
// });


class BottomCli extends Component {
  constructor({props, initialQtdValue, test}){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
    let deferredPrompt;
    const addBtn = document.querySelector('.add-button');
    const boxView = document.querySelector('.box-view');
    addBtn.style.display = 'none';
    // boxView.style.display = 'none';
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = 'block';
      // boxView.style.display = 'block';
      console.log('xxx')
      addBtn.addEventListener('click', () => {
        console.log('clicou')
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // boxView.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt 
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
      });
    });
  }

  installApp() {
    // alert('Instalar app');
    // // Show the prompt
    // deferredPrompt.prompt();
    // setupButton.disabled = true;
    // // Wait for the user to respond to the prompt
    // deferredPrompt.userChoice
    //     .then((choiceResult) => {
    //         if (choiceResult.outcome === 'accepted') {
    //             console.log('PWA setup accepted');
    //             // hide our user interface that shows our A2HS button
    //             setupButton.style.display = 'none';
    //         } else {
    //             console.log('PWA setup rejected');
    //         }
    //         deferredPrompt = null;
    //     });
  }

  render(){     

    return(        
      <Container bgcolor={'#333'} altura={this.props.altura}> 
          <PageArea>
            <Link href='/'>
              <Lk>
                <Logo src={'/logo.png'} />
                Crie sua agenda
              </Lk>
            </Link>
            
          </PageArea>
          <Notificacao>
            <div class='onesignal-customlink-container'></div>
          </Notificacao>
          <AdicionarTelaInicial>
            {/* <Opcoes >
              <button class="add-button" onClick={this.installApp}>Adicione Nosso App à Sua Tela Inicial</button>
            </Opcoes> */}
          </AdicionarTelaInicial>
          <Opcoes >
              <button class="add-button" onClick={this.installApp}>Adicione Nosso App à Sua Tela Inicial</button>
          </Opcoes>
      </Container>
    )
  } 
}



const mapStateToProps = (state) => {
  return {
  };    
};

export default BottomCli;