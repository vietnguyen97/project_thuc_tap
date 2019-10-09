import * as types from './../contant/ActionType';
//import callAPI from '../utils/callApi';
import axios from 'axios';

export const listAll = (key) => {
    return {
        type : types.LIST_ALL,
        key
    };
};
export const actKey = (keyword) =>{
    return {
        type : types.LIST_KEY,
        keyword
    };
};
export const getAllList = (key) =>{
    console.log(key);
    return{
        type : types.GET_ALL_LIST,
        key
    };
};
export const actgetAllList = (key)=>{
    console.log(key);
    return dispatch =>{
        return axios({
            method : 'GET',
            url : `http://27.74.250.96:8384/api/v1/search/get_post_by_keyword?keyword=${key}`,
            data : null
        }).then(res =>{
            dispatch(getAllList(res));
        });
    };
};