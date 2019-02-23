import axios from 'axios';
import constant from '../constants';

export default {
    getPosts() {
        return axios.get(constant.baseURL + "posts");
    },     
    getPhotos() {
        return axios.get(constant.baseURL + "photos");
    },
    getUsers() { 
        return axios.get(constant.baseURL + "users");
    }
};