import axios from "axios";
import { ACCESS_KEY, AHTHORIZATION } from "../../constants/auth/auth.constants";
import CONFIG from "../../config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.server}`,
  headers: {
    [AHTHORIZATION]: `${localStorage.getItem(ACCESS_KEY)}`,
  },
});

export default customAxios;
