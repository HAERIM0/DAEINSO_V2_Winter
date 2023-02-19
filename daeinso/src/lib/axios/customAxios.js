import axios from "axios";
import {
  ACCESS_KEY,
  AHTHORIZATION,
  REFRESH_KEY,
} from "../../constants/auth/auth.constants";
import CONFIG from "../../config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.server}`,
  headers: {
    [AHTHORIZATION]: `${localStorage.getItem(ACCESS_KEY)}`,
  },
});

// const errorInterceptor = async (config) => {
//   const refresh_token = localStorage.getItem(REFRESH_KEY);
//   const { status } = config.response;
//   if (status === 401) {
//     const originalRequest = config.config;

//     try {
//     const {data} = await axios.get(`${CONFIG.server}/auth/refr`)
//     } catch (){}
//   }
// };

export default customAxios;
