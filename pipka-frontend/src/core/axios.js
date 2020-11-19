import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9999';
// axios.defaults.headers.common['Autorization'] = AUTH_TOKEN;

export default axios;
