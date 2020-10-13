import qs from 'qs';

const BASEAPI = 'https://theshave.com.br/api-barbershop/';
const company = 1;
// const endpoint = 'colecoes/getcolecoes';

const osAPI = {

    getProdutos:(jwt, offset, limit)=>{
      let endpoint = 'produtos/getProdutos';
      let body = {
        jwt,
        offset,
        limit
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },
    getProdutoInfo:(jwt, produto)=>{
      let endpoint = 'produtos/getInfo';
      let body = {
        jwt,
        produto,
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    
};

export default osAPI;