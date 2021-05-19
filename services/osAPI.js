import qs from 'qs';

const BASEAPI = 'https://theshave.com.br/api-barbershop/';
const company = 1;
// const endpoint = 'colecoes/getcolecoes';

const osAPI = {

    getInfos:(slug)=>{
      let endpoint = 'config/getInfosSite';
      let body = {
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    
};

export default osAPI;