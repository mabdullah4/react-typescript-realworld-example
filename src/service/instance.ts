import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
    baseURL: "https://conduit.productionready.io/api/"
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
    if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Token ${localStorage.getItem("token")}`;
    }
    return config;
});

export default instance;
