import axios from "axios";

const API_TOKEN = "DE1CA22B854CF19195D82F526D53BAD6";
const API_KEY = "dbv2";

export const api = axios.create({
    baseURL: "https://www.donbilet.ru/WSv2/",
});

api.interceptors.request.use((config) => {
    if (!config.params) config.params = {};
    config.params["apitoken"] = API_TOKEN;
    config.params["apikey"] = API_KEY;
    return config;
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("API error:", err.response?.data || err.message);
        throw err;
    }
);