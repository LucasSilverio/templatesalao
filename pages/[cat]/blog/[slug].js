import React, { Component } from 'react';
import Head from 'next/head'
import Cookie from 'js-cookie';
import osAPI from '../../../services/osAPI';

import {AreaSite, FirstColor} from '../../../components/MainStyled';
import Bottom from '../../../components/Bottom';
import Materia from '../../../components/Materia';
import TopBlog from '../../../components/TopBlog';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state={}    
  }
 
  static async getInitialProps({query}) {
    const el = query.slug;
    const cliente = query.cat;
    const resi = await osAPI.getInfosSite(cliente);
    const info = await resi.json();
    const res = await osAPI.getMateria(cliente, el);
    const json = await res.json();
    const recentes = await osAPI.getRecentes(el);
    const result = await recentes.json();
    
    return {
      data:json.data,
      recent:result.data,
      info,
      el,
    }
  }

  componentDidMount(){
    console.log(this.props.recent)
  }
 
  render(){
    return (
      <>
        <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-140120435-5"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-140120435-5');
              `,
          }}
        />
         <meta charset='utf-8' />
         <meta http-equiv='X-UA-Compatible' content='IE=edge' />
         <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
         <meta name='description' content={this.props.data.previa} />
         <meta name='keywords' content='Keywords' />
         <title>{this.props.data.titulo}</title>
         {/* <link rel="manifest" href="/manifest.json" /> */}
         <meta name="theme-color" content={FirstColor}/>
         {/* <script src="//code.jivosite.com/widget/kKrv7B4GQd" async></script> */}
       </Head>
       <AreaSite>
        <TopBlog 
          infos={this.props.info.data}
          cliente={true}
        />
        <Materia
            infos={this.props.info.data}
            info={this.props.data}
            recents={this.props.recent}
        />
        {/* <Bottom /> */}
       </AreaSite>
      </>
    )
  }
}

export default Blog;
