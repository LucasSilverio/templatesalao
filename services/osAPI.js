import qs from 'qs';

const BASEAPI = 'https://theshave.com.br/api-barbershop/';
const company = 1;
// const endpoint = 'colecoes/getcolecoes';

const osAPI = {

    getProdutos:(jwt)=>{
      let endpoint = 'produtos/getProdutos';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    
};

export default osAPI;