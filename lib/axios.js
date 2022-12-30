import axios from "axios";

const dev = process.env.NODE_ENV !== 'production';
const baseURL = dev ? 'http://localhost:3000/api' : 'https://poli.iran.liara.run/api';

const Client = axios.create({
  baseURL,
  headers: {
    accept: 'text/plain',
    'Content-Type': 'application/json'
  },
});


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  Client.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers["Authorization"] = `Bearer ${localStorage.getItem("access-token")}`;
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  Client.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (!error.response) {
      } else {
        if (error.response.status === 401) {
          if(localStorage.getItem("access-token")){
            localStorage.clear();
            location.replace("/reserve")
          }
          // // refreshToken
          // const refreshToken = localStorage.getItem("refresh-token");
          // const userId = localStorage.getItem("userId")
          // if (refreshToken) {
          //   try {
          //     const res = await Client.post("/Users/RefreshToken", {
          //       userId,
          //       refreshToken,
          //     });
          //     if (res.data.success) {
          //       localStorage.setItem("access-token", res.data.accessToken);
          //       localStorage.setItem("refresh-token", res.data.refreshToken);
          //       // retry request
          //       return Client(error.config);
          //     }
          //   } catch (error) {
          //     location.replace("/auth/login");
          //   }
          // }
        }
        if (error.response.status === 403) {
          // alert('403 Forbidden Error')
        }

        if (error.response.status === 404) {
          //  alert(404)
        }
        if (error.response.status === 500) {
        }
      }
      return Promise.reject(error);
    }
  );
  return Client;
};
