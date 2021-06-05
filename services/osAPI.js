import qs from 'qs';

const BASEAPI = 'https://theshave.com.br/api-barbershop/';
const company = 1;
// const endpoint = 'colecoes/getcolecoes';

const osAPI = {

    getClientes:(jwt, offset, limit)=>{
      let endpoint = 'users/listarPainel';
      let body = {
        jwt,
        offset,
        limit
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getClienteInfo:(jwt, id)=>{
      let endpoint = 'users/getuserinfospainel';
      let body = {
        jwt,
        id,
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getHistorico:(jwt, idcliente)=>{
      let endpoint = 'agenda/historico';
      let body = {
        jwt,
        idcliente,
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getAgenda:(jwt, data)=>{
      let endpoint = 'agenda/getAgendaDoDiaGestao';
      let body = {
        jwt,
        data
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getParceiroComissoes:(jwt, parceiro, datainicial, datafinal)=>{
      let endpoint = 'agenda/getParceiroComissoes';
      let body = {
        jwt,
        parceiro,
        datainicial,
        datafinal
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getInfos:(slug)=>{
      let endpoint = 'config/getInfosSite';
      let body = {
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getServicos:(jwt)=>{
      let endpoint = 'services/listarPainel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getProfessionals:(jwt)=>{
      let endpoint = 'professionals/getProfessionalsGestao';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    listarHorarios:(jwt, profissional, data, tempo, diaDaSemana)=>{
      let endpoint = 'agenda/listarProPainel';
      let body = {
        jwt,
        profissional,
        data,
        tempo,
        diaDaSemana
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },



    
};

export default osAPI;