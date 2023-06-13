import axios from "axios"
import { LoginProps, RegisterProps } from "./types"

const register = async (userValues: RegisterProps) => {
    return axios.post("auth/register", userValues);
}

const login = async (userValues: LoginProps) => {
    return axios.post("auth/login", userValues);
}

export { register, login };