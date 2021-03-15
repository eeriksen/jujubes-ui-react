import axios from "axios";
import queryString from "query-string";

// Create instance
let instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 60000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
});

/**
 * Interceptor:
 * REQUESTS
 */
instance.interceptors.request.use(
    function (config) {
        // Process request body
        if (config.data) {
            config.data = queryString.stringify(config.data);
        }

        return config;
    },
    function (error) {
        console.log("Request error:", error);
    }
);

/**
 * Interceptor:
 * RESPONSES
 */
instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
