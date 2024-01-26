import axios from "axios";
const token = localStorage.getItem("token");
export async function getDataonMount() {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  axios.defaults.withCredentials = true;
  try {
    const response = await axios.get(`${baseURL}/job/alljobs`, {
      headers: {
        token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
