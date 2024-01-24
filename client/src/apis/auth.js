import axios from "axios";
export async function registerUser(name, email, mobileNumber, password) {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  const payload = { name, email, mobileNumber, password };
  try {
    const response = await axios.post(`${baseURL}/user/register`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}
