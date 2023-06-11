import axios from "axios";
import createAxiosConfig from "../createAxiosConfig";

const getPokemonDetails = async (id: string | undefined) => {
    return axios.get(`http://127.0.0.1:8080/pokemon/${id}`, createAxiosConfig());
}

export { getPokemonDetails };