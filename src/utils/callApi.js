import axios from 'axios';
import * as Config from '../contant/config';
export default function callAPI(endpoint, method = 'GET', data) {
    return axios({
        method: method,
        url: `${Config.API_GET_BY_KEYWORD}/${endpoint}`,
        data: data
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
};