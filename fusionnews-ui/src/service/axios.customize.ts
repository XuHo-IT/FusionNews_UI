import axios from 'axios';

const isDevelopment = import.meta.env.MODE === 'development';

if (isDevelopment && import.meta.env.MODE !== 'test') {
    console.warn(
        'Warning: SSL certificate validation is disabled'
    );
}

const instance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    withCredentials: true,
    //Disbale SSL verification
    validateStatus: function(status){
        return isDevelopment? true:status >=200 && status<300;
    },
});

instance.interceptors.request.use(
    function(config){
        const token = localStorage.getItem('access_token');
        const auth = token ?`Bearer ${token}`:'';
        config.headers['Authorization']=auth;
        console.log(token);
    if (import.meta.env.DEV){
        console.log(
            `[API Request] ${config.method?.toUpperCase()}${config.url}`,
            config
        );
    }
    return config;
    },
function (error){
    return Promise.reject(error);
}   
);
instance.interceptors.response.use(
    function(response){
        if(response){
            if(import.meta.env.DEV){
                console.log(
                    `[API Response] ${response.status}${response.config.url}`,
                    response.data
                );
            }
            return response;
        }
        return response;
    },
    function (error){
        if (error && error.response){
            return error.response;
        }
        if(import.meta.env.DEV){
            console.log(
                `[API Error] ${error.config?.url|| 'Unknown URL'}`,
                error
            )
        }
        return Promise.reject(error);
    }  ,    
);

export default instance;

