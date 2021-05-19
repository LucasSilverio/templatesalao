import React, { Component } from 'react';
import Head from 'next/head'
import Cookie from 'js-cookie';
import osAPI from '../../../services/osAPI';

import {AreaSite, FirstColor} from '../../../components/MainStyled';
// import Bottom from '../../../components/Bottom';
import BlogInfos from '../../../components/BlogInfosCliente';
import TopBlog from '../../../components/TopBlogCliente';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state={}    
  }

  static async getInitialProps({query}) {
    let el = query.cat

    const resi = await osAPI.getInfosSite(el);
    const info = await resi.json();
    if(!info.success){
      res.writeHead(301, {
        Location:'/'
      });
      res.end();
    }

    const res = await osAPI.getMaterias(el); 
    const json = await res.json();
    const recentes = await osAPI.getRecentes(el);
    const result = await recentes.json();
    
    return {
      info:info.data,
      data:json.data,
      recent:result.data,
      el
    }
  }

  componentDidMount(){
    console.log(this.props.data)
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
         <meta name='description' content='Description' />
         <meta name='keywords' content='Keywords' />
         <title>{this.props.info.nomefantasia} | Blog</title>
         {/* <link rel="manifest" href="/manifest.json" /> */}
         <meta name="theme-color" content={FirstColor}/>
         {/* <script src="//code.jivosite.com/widget/kKrv7B4GQd" async></script> */}
       </Head>
       <AreaSite>
        <TopBlog 
          infos={this.props.info}
        />
        <BlogInfos
          infos={this.props.info}
          materias={this.props.data}
          recents={this.props.recent}
        />
       </AreaSite>
      </>
    )
  }
}

export default Blog;
