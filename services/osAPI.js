import qs from 'qs';

// const BASEAPI = 'https://theshave.com.br/api-barbershop/';
const BASEAPI = 'https://elleservicos.net/api-barbershop/';
const company = 1;
// const endpoint = 'colecoes/getcolecoes';

const osAPI = {

    checkPanelLogged:(jwt)=>{
      let endpoint = 'users/checkPanelLogged';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    check:(jwt)=>{
      let endpoint = 'users/checkpanel';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getClientes:(jwt, offset, limit)=>{
      let endpoint = 'users/listarPainel';
      let body = {
        jwt,
        offset,
        limit
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getProdutos:(jwt, offset, limit)=>{
      let endpoint = 'produtos/getProdutos';
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

    getUserInfo:(jwt)=>{
      let endpoint = 'users/getUserInfo';
      let body = {
        jwt,
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

    getHistorico:(jwt, idcliente)=>{
      let endpoint = 'agenda/historico';
      let body = {
        jwt,
        idcliente,
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getHistoricoSite:(jwt, slug)=>{
      let endpoint = 'agenda/historicoUserSite';
      let body = {
        jwt,
        slug
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

    getHorariosSite:(data, profissional, servico, tempo, diaSemana, slug)=>{
      let endpoint = 'agenda/listarSite';
      let body = {
        data,
        profissional,
        servico,
        tempo,
        diaSemana,
        slug
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getServicosAgenda:(jwt)=>{
      let endpoint = 'services/listarPainelAgenda';
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

    getLink:(jwt)=>{
      let endpoint = 'config/getLink';
      let body = {
        jwt
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getProInfo:(jwt, id)=>{
      let endpoint = 'professionals/getProfessionalsGestaoInfos';
      let body = {
        jwt,
        id
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

    passManager:(token)=>{
      let endpoint = 'users/checkTokenPanel';
      let body = {
        token
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },

    getFeed:(tipo, cidade)=>{
      let endpoint = 'feed/get';
      let body = {
        tipo,
        cidade
      }
      return fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    },



    
};

export default osAPI;