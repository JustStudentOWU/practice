import axios from "axios";
import {baseURL, urls} from "../constants";

const axiosInstance = axios.create({baseURL});

const getUsers = () => axiosInstance.get(baseURL + urls.users).then(value => value.data);
const getUser = (id) => axiosInstance.get(baseURL + urls.users + id).then(value => value.data);
const getUserPosts = (id) => axiosInstance.get(baseURL + urls.users + id + urls.posts).then(value => value.data);

export {
    getUser,getUsers, getUserPosts
}