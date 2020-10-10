import React, { Component } from 'react';
import Cookie from 'js-cookie';
import Head from 'next/head';

import Feed from '../../components/Feed';
import TopBarMobile from '../../components/TopBarMobile';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  render(){
    
    return(
      <>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <title>Home | Template</title>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="theme-color" content="#E887B2"/>
       </Head>
       <TopBarMobile 
        bgcolor={'#343261'}
       />
       <Feed />
      </>
    )
  }
}

export default Home;
