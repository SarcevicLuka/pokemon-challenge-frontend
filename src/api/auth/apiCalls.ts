import axios from "axios"
import { LoginProps, RegisterProps } from "./types"

const register = async (userValues: RegisterProps) => {
    return axios.post("http://127.0.0.1:8080/auth/register", userValues);
}

const login = async (userValues: LoginProps) => {
    return axios.post("http://127.0.0.1:8080/auth/login", userValues);
}

export { register, login };