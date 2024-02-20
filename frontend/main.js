import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from '../frontend/modules/login'

import './assets/css/style.css';

const login = new Login('.form-login')
const cadastro = new Login('.form-cadastro')

login.init()
cadastro.init()

console.log('Olá mundo 3');
