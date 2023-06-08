import axios from "axios";
import createAxiosConfig from "../createAxiosConfig";

const getPokedex = async () => {
    return axios.get("http://127.0.0.1:8080/user/pokedex?page=1&perPage=151", createAxiosConfig());
}

export { getPokedex };