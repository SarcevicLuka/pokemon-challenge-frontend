import { AxiosRequestConfig } from "axios";

export type AxiosConfig = Partial<Record<keyof AxiosRequestConfig, any>>;

export type TakeGuessProps = {
    guessId: string | undefined,
    usersGuess: UsersGuess
}

export type UsersGuess = {
    guessName: string
}

export type Pokedex = {
    page: number,
    per_page: number,
    total: number,
    last_page: number,
    data: PokedexPokemon[],
}

export type PokedexPokemon = {
    id: string,
    name?: string,
    image?: string,
}