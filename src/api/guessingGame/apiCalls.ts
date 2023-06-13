import axios from "axios"
import createAxiosConfig from "../createAxiosConfig";
import { TakeGuessProps } from "./types";

const getGuessingGamePokemon = async () => {
    return axios.get("guessing-game/guess", createAxiosConfig());
}

const takeAGuess = async (guess: TakeGuessProps) => {
    return axios.post(`guessing-game/guess/${guess.guessId}`, guess.usersGuess, createAxiosConfig());
}

export { getGuessingGamePokemon, takeAGuess };