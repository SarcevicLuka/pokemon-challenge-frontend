import axios from "axios";
import createAxiosConfig from "../createAxiosConfig";

const getWholePokedex = async () => {
    return axios.get("user/pokedex?page=1&perPage=151", createAxiosConfig());
}

const getPaginatedPokedex = async (filterParams: URLSearchParams) => {
    return axios.get(`user/pokedex?${filterParams}`, createAxiosConfig());
}

export { getWholePokedex, getPaginatedPokedex };