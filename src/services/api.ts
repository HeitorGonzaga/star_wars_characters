//Importação do Módulo axios para consumir
import axios from 'axios';

/*Definição da URL Base https://swapi.dev/api/
Para mais informações sobre a documentação da API
acesse: https://swapi.dev/documentation
*/
const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {'Cache-Control': 'no-store', Pragma: 'no-cache', Expires: '0'},
});

//Definição do timeout para requisições
api.defaults.timeout = 1000;

export default api;
