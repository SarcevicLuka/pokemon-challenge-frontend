import axios from "axios";
import createAxiosConfig from "../createAxiosConfig";

const getPokemonDetails = async (id: string | undefined) => {
    return axios.get(`pokemon/${id}`, createAxiosConfig());
}

export { getPokemonDetails };