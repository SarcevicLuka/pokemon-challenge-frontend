import { AxiosRequestConfig } from "axios";

export type AxiosConfig = Partial<Record<keyof AxiosRequestConfig, any>>;

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

export type PokemonData = {
    id: string,
    name?: string,
    baseExperience?: number,
    height?: number,
    image?: string,
    weight?: number,
    createdAt: string,
    abilities: Ability[],
    stats: Stat[]
}

export type Ability = {
    id: string,
    name?: string,
    pokemonId: string
}

export type Stat = {
    id: string,
    pokemonId: string,
    name?: string,
    baseStat?: number,
    effort?: number
}