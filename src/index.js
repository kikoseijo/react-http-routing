import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': 'dddeedd'
};

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    switch (error.response.status) {
        case 401:
            console.log('modal-session-expired');
            break;
        case 402:
            console.log('ERROROROROR 402');
            break;
        default:
            console.log('ERROROROROR: ' + error);
    }
    return Promise.reject(error);
});

axios.interceptors.request.use(response => {
    console.log(response);
    return response;
}, error => {
    switch (error.response.status) {
        case 401:
            console.log('modal-session-expired');
            break;
        case 402:
            console.log('ERROROROROR 402');
            break;
        default:
            console.log('ERROROROROR: ' + error);
    }
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
