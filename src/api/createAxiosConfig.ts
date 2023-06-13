import { AxiosRequestConfig } from "axios";
import { AxiosConfig } from "./types";
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8080/';

const createAxiosConfig = (configParameters?: AxiosConfig | undefined): AxiosRequestConfig => {
	const token = sessionStorage.getItem("token");
	if (!configParameters) configParameters = {};

	if (token) configParameters["headers"] = { Authorization: "Bearer " + token };
	return configParameters;
};

export default createAxiosConfig;
