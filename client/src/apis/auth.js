import axios from "axios";
const token = localStorage.getItem("token");
export async function registerUser(name, email, mobileNumber, password) {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  const payload = { name, email, mobileNumber, password };
  axios.defaults.withCredentials = true;
  try {
    const response = await axios.post(`${baseURL}/user/register`, payload, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function LoginUser(email, password) {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  const payload = { email, password };
  // axios.defaults.withCredentials = true;
  try {
    const response = await axios.post(`${baseURL}/user/login`, payload, {
      // withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getUserId() {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  try {
    const response = await axios.get(`${baseURL}/user/userdata`, {
      headers: {
        token: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
