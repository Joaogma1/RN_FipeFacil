import axios from 'axios';

// ao utilizar mudar o baseURL para o Ip da maquina que hospeda a API

const apiService = axios.create({
  baseURL: 'http://fipeapi.appspot.com/api/1/',
});
export default apiService;
