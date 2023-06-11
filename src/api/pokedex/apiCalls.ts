import axios from "axios";
import createAxiosConfig from "../createAxiosConfig";

const getWholePokedex = async () => {
    return axios.get("http://127.0.0.1:8080/user/pokedex?page=1&perPage=151", createAxiosConfig());
}

const getPaginatedPokedex = async (filterParams: URLSearchParams) => {
    return axios.get(`http://127.0.0.1:8080/user/pokedex?${filterParams}`, createAxiosConfig());
}

export { getWholePokedex, getPaginatedPokedex };