import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.118:3333',
});

export default api;

// verificar se o ip ta certo toda vez
// comparar com o do navegador que vem como: exp://192.168.0.118:19000
// uma vez o numero antes do :3333 tava 119 e nao 118