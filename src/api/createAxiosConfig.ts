import { AxiosRequestConfig } from "axios";

import { AxiosConfig } from "./types";

const createAxiosConfig = (configParameters?: AxiosConfig | undefined): AxiosRequestConfig => {
	const token = sessionStorage.getItem("token");
	if (!configParameters) configParameters = {};

	if (token) configParameters["headers"] = { Authorization: "Bearer " + token };
	return configParameters;
};

export default createAxiosConfig;
