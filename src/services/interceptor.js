// "API_BASE_URL": "https://api.tgraderp.com/"
import axios from "axios";
import Config from "./config.json";

const getInstance = async (ApiUrl,port, url) => {
    // const apiUrl = ApiUrl+url;
    const apiUrl = ApiUrl+port+"/"+url;

    // var token = localStorage.getItem("Inits");
    var headers = Config.API_HEADERS;
    // headers.Authorization = `Basic ` + token;
    let config = {
        headers: headers,
    };

    return axios.get(apiUrl, config);
};
const postInstance = async (ApiUrl,port, url, body, ENV, AppId) => {
    // const apiUrl = ApiUrl+url;
    const apiUrl = ApiUrl+port+"/"+url;
    console.log(apiUrl);

    // var token = localStorage.getItem("Inits");

    let config = {
        headers: {
            ENV: ENV,
            appId: AppId,
            // 'Authorization': `Basic ${token}`,
        },
    };
    // return axios.post(apiUrl, body, config);
    return axios.post(apiUrl, body);
};

const putInstance = async (ApiUrl,port, url, body, ENV, AppId) => {
    const apiUrl = ApiUrl+port+"/"+url;
    console.log(apiUrl);

    // var token = localStorage.getItem("Inits");

    let config = {
        headers: {
            ENV: ENV,
            appId: AppId,
            // 'Authorization': `Basic ${token}`,
        },
    };
    // return axios.post(apiUrl, body, config);
    return axios.put(apiUrl, body);
};

const deleteInstance = async (ApiUrl,port,url) => {
    // const apiUrl = ApiUrl+url;
    const apiUrl = ApiUrl+port+"/"+url;

    // var token = localStorage.getItem("Inits");
    var headers = Config.API_HEADERS;
    // headers.Authorization = `Basic ` + token;
    let config = {
        headers: headers,
    };

    return axios.delete(apiUrl, config);
};




const apicall = async (method,port,routename,body,companyID,id) => {
    if (method === "get") {
        const response = await getInstance(Config.API_BASE_URL,port,routename) || {};
        return response;
    } else if (method === "post") {
        const response = await postInstance(Config.API_BASE_URL,port,routename, body) || {};
        return response;
    }
 else if (method === "put") {
        const response = await putInstance(Config.API_BASE_URL,port,routename,body) || {};
        return response;
    }
    else if (method === "delete") {
        const response = await deleteInstance(Config.API_BASE_URL,port,routename) || {};
        return response;
    }
};

axios.interceptors.request.use(
    function (config) {
        console.log("start api call");
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function (response) {
        console.log("ended api call");
        return response;
    },
    function (error) {
        return null;
    }
);

export default { apicall };